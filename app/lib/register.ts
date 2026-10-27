export type RegistrationPayload = {
  full_name: string;
  email: string;
  whatsapp: string;
  domicile: string;
  education: string;
  program_interest: string;
  message: string;
  consent: boolean;
  website: string;
};

export type SubmitRegistrationResult =
  | {
      success: true;
      message: string;
      isDemo?: boolean;
    }
  | {
      success: false;
      message: string;
      errors?: string[];
      isDemo?: boolean;
    };

export async function submitRegistration(
  data: RegistrationPayload,
): Promise<SubmitRegistrationResult> {
  const webhook = process.env.NEXT_PUBLIC_REGISTRATION_WEBHOOK?.trim();

  // Mode demo bila webhook belum dikonfigurasi
  if (!webhook) {
    return {
      success: true,
      isDemo: true,
      message:
        "Mode demo: webhook belum diisi (NEXT_PUBLIC_REGISTRATION_WEBHOOK belum disetel). Data pendaftaran tidak dikirim ke n8n.",
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    const result = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
      errors?: string[];
    };

    if (response.status === 200) {
      return {
        success: true,
        message:
          result.message ||
          "Pendaftaran diterima. Cek email kamu dan tunggu kabar dari tim kami.",
      };
    }

    if (response.status === 400 && Array.isArray(result.errors)) {
      return {
        success: false,
        message: "Periksa isian berikut:",
        errors: result.errors,
      };
    }

    return {
      success: false,
      message:
        result.message ||
        "Pendaftaran belum terkirim. Coba lagi beberapa saat, atau hubungi tim lewat WhatsApp.",
    };
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      return {
        success: false,
        message:
          "Permintaan memakan waktu terlalu lama (timeout 20 detik). Periksa koneksi internet Anda, lalu coba lagi.",
      };
    }

    return {
      success: false,
      message:
        "Tidak bisa terhubung ke server. Periksa koneksi internet, lalu coba lagi.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

