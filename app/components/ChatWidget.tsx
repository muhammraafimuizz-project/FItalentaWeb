"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export function ChatWidget() {
  useEffect(() => {
    const webhookUrl = process.env.NEXT_PUBLIC_CHAT_WEBHOOK?.trim();
    if (!webhookUrl) return;

    let cancelled = false;
    let chatApp: { unmount: () => void } | null = null;

    void import("@n8n/chat")
      .then(({ createChat }) => {
        if (cancelled) return;

        const app = createChat({
          webhookUrl,
          mode: "window",
          showWelcomeScreen: false,
          loadPreviousSession: true,
          defaultLanguage: "en",
          initialMessages: [
            "Halo! Aku asisten virtual FITALENTA.",
            "Tanya soal program Jepang, biaya dan cicilan, atau cara daftar.",
          ],
          i18n: {
            en: {
              title: "Asisten FITALENTA",
              subtitle: "Jawaban cepat seputar program.",
              footer: "",
              getStarted: "Mulai chat",
              inputPlaceholder: "Tulis pertanyaanmu...",
              closeButtonTooltip: "Tutup chat",
            },
          },
        });

        if (cancelled) {
          app.unmount();
        } else {
          chatApp = app;
        }
      })
      .catch((error: unknown) => {
        console.error("Gagal memuat widget chat FITALENTA.", error);
      });

    return () => {
      cancelled = true;
      if (chatApp) {
        chatApp.unmount();
        chatApp = null;
      }
    };
  }, []);

  return null;
}
