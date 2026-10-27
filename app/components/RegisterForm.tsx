"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { PROGRAM_SELECTED_EVENT } from "./ProgramTable";
import { EDUCATION_OPTIONS, PROGRAM_OPTIONS } from "../data/programs";
import { submitRegistration, type RegistrationPayload } from "../lib/register";

type FormStatus = {
  type: "success" | "error";
  title: string;
  errors?: string[];
} | null;

function validate(data: RegistrationPayload) {
  const errors: string[] = [];
  if (data.full_name.trim().length < 2)
    errors.push("Nama lengkap minimal 2 karakter.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()))
    errors.push("Format email belum benar.");
  const digits = data.whatsapp.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15)
    errors.push("Nomor WhatsApp belum benar. Contoh: 081234567890.");
  if (data.domicile.trim().length < 2)
    errors.push("Kota domisili wajib diisi.");
  if (!data.education) errors.push("Pilih pendidikan terakhir.");
  if (!data.program_interest) errors.push("Pilih program yang diminati.");
  if (!data.consent)
    errors.push("Centang persetujuan penggunaan data.");
  return errors;
}

function getFormData(form: HTMLFormElement): RegistrationPayload {
  const formData = new FormData(form);
  return {
    full_name: String(formData.get("full_name") ?? ""),
    email: String(formData.get("email") ?? ""),
    whatsapp: String(formData.get("whatsapp") ?? ""),
    domicile: String(formData.get("domicile") ?? ""),
    education: String(formData.get("education") ?? ""),
    program_interest: String(formData.get("program_interest") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on",
    website: String(formData.get("website") ?? ""),
  };
}

export function RegisterForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [validated, setValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const lastSubmitRef = useRef(0);
  const cooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleProgramSelection(event: Event) {
      const selection = event as CustomEvent<{ value: string }>;
      const select =
        formRef.current?.querySelector<HTMLSelectElement>(
          "#program_interest",
        ) ?? null;
      if (select) select.value = selection.detail.value;

      const registrationSection = document.getElementById("daftar");
      registrationSection?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      window.setTimeout(() => {
        nameRef.current?.focus({ preventScroll: true });
      }, 400);
    }

    window.addEventListener(PROGRAM_SELECTED_EVENT, handleProgramSelection);
    return () => {
      window.removeEventListener(PROGRAM_SELECTED_EVENT, handleProgramSelection);
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    const data = getFormData(form);
    const errors = validate(data);

    if (errors.length) {
      setStatus({ type: "error", title: "Periksa isian berikut:", errors });
      document.getElementById("form-status")?.scrollIntoView({
        block: "nearest",
      });
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < 5000 || submitting) return;
    lastSubmitRef.current = now;
    setCooldown(true);
    cooldownTimerRef.current = setTimeout(() => setCooldown(false), 5000);
    setSubmitting(true);
    setStatus(null);

    try {
      const result = await submitRegistration(data);

      if (result.success) {
        setStatus({
          type: "success",
          title: result.message,
        });
        form.reset();
        setValidated(false);
      } else {
        setStatus({
          type: "error",
          title: result.message,
          errors: result.errors,
        });
      }
    } catch {
      setStatus({
        type: "error",
        title:
          "Tidak bisa terhubung ke server. Periksa koneksi internet, lalu coba lagi.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section" id="daftar">
      <div className="container register">
        <div className="register-intro">
          <h2>Daftar minat</h2>
          <p>
            Isi form ini, lalu tim menghubungi kamu lewat WhatsApp untuk
            konsultasi awal. Kamu juga menerima email konfirmasi.
          </p>
          <ul className="next-list">
            <li>Email konfirmasi terkirim otomatis.</li>
            <li>Konsultasi awal tidak dipungut biaya.</li>
            <li>Form ini hanya menyatakan minat, bukan pembayaran.</li>
          </ul>
        </div>

        <form
          ref={formRef}
          id="registration-form"
          className={`form${validated ? " was-validated" : ""}`}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label htmlFor="full_name">Nama lengkap</label>
            <input
              ref={nameRef}
              id="full_name"
              name="full_name"
              type="text"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={150}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Nomor WhatsApp</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="081234567890"
                maxLength={25}
                required
              />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="domicile">Kota domisili</label>
              <input
                id="domicile"
                name="domicile"
                type="text"
                autoComplete="address-level2"
                maxLength={100}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="education">Pendidikan terakhir</label>
              <select id="education" name="education" required defaultValue="">
                <option value="" disabled>
                  Pilih pendidikan
                </option>
                {EDUCATION_OPTIONS.map((edu) => (
                  <option key={edu} value={edu}>
                    {edu}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="program_interest">Program yang diminati</label>
            <select
              id="program_interest"
              name="program_interest"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Pilih program
              </option>
              {PROGRAM_OPTIONS.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">
              Pertanyaan atau catatan <span className="optional">(opsional)</span>
            </label>
            <textarea id="message" name="message" rows={3} maxLength={500} />
          </div>

          <div className="hp" aria-hidden="true">
            <label htmlFor="website">Jangan diisi</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="consent">
            <input id="consent" name="consent" type="checkbox" required />
            <label htmlFor="consent">
              Saya setuju data ini dipakai tim untuk menghubungi saya tentang
              program.
            </label>
          </div>

          <button
            className="btn btn-primary btn-wide"
            type="submit"
            id="submit-btn"
            disabled={submitting || cooldown}
          >
            {submitting ? "Mengirim..." : "Kirim pendaftaran"}
          </button>
          <div
            id="form-status"
            className={`form-status${status ? ` is-${status.type}` : ""}`}
            role="status"
            aria-live="polite"
          >
            {status && (
              <>
                <strong>{status.title}</strong>
                {status.errors && status.errors.length > 0 && (
                  <ul>
                    {status.errors.map((error, index) => (
                      <li key={`${index}-${error}`}>{error}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
