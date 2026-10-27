import type { ReactNode } from "react";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#atas" aria-label="FITALENTA, ke bagian atas">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.svg" alt="FITALENTA" className="brand-logo" />
          </a>
          <nav className="main-nav" aria-label="Navigasi utama">
            <a href="#program">Program</a>
            <a href="#alur">Alur</a>
            <a href="#perusahaan">Perusahaan</a>
            <a href="#faq">Pertanyaan</a>
          </nav>
          <a className="btn btn-primary btn-small" href="#daftar">
            Daftar minat
          </a>
        </div>
      </header>
    </>
  );
}

export function Hero() {
  return (
    <>
      <section className="hero" id="atas">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Kerja di Jepang dimulai dari persiapan yang jelas.</h1>
            <p className="lead">
              FITALENTA di Bandung membantu calon pekerja dan pelajar menyiapkan
              bahasa, keterampilan, dan dokumen sebelum berangkat. Biaya dan
              cicilan setiap program ditampilkan terbuka di halaman ini.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#daftar">
                Daftar minat
              </a>
              <a className="btn btn-ghost" href="#program">
                Bandingkan program
              </a>
            </div>
            <p className="hero-note">Konsultasi awal gratis lewat WhatsApp.</p>
          </div>

          <aside className="pass" aria-label="Ringkasan program kerja ke Jepang">
            <div className="pass-top">
              <span className="pass-brand">FITALENTA</span>
              <span className="pass-tag">Program Jepang</span>
            </div>
            <div className="pass-route">
              <div>
                <span className="pass-label">Dari</span>
                <strong>Bandung</strong>
              </div>
              <svg
                className="pass-plane"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <div className="pass-to">
                <span className="pass-label">Ke</span>
                <strong>Jepang</strong>
              </div>
            </div>
            <dl className="pass-facts">
              <div>
                <dt>Durasi</dt>
                <dd>6 bulan</dd>
              </div>
              <div>
                <dt>Bidang kerja</dt>
                <dd>5 pilihan</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Offline, asrama, hybrid</dd>
              </div>
              <div>
                <dt>Cicilan</dt>
                <dd>3 sampai 5 kali</dd>
              </div>
            </dl>
            <div className="pass-stub">
              <p>
                Mulai dari satu form singkat. Tim kami menghubungi kamu lewat
                WhatsApp.
              </p>
              <div className="barcode" aria-hidden="true" />
            </div>
          </aside>
        </div>
      </section>
      <section className="partners" aria-label="Mitra">
        <div className="container">
          <p>
            Bermitra dengan BBPVP Bandung, Dompet Dhuafa, GMF AeroAsia, HIPMI
            Jabar, BPRS Al Salaam, dan YDSF.
          </p>
        </div>
      </section>
    </>
  );
}

export function Steps() {
  const steps = [
    ["Isi form minat", "Nama, kontak, dan program yang kamu pilih. Cukup dua menit."],
    [
      "Konsultasi lewat WhatsApp",
      "Tim menjelaskan program, biaya, dan jadwal yang cocok dengan profilmu.",
    ],
    [
      "Seleksi dan pelatihan",
      "Kamu belajar bahasa dan keterampilan kerja selama program berjalan.",
    ],
    [
      "Penempatan dan keberangkatan",
      "Tim mendampingi dokumen dan persiapan sebelum kamu berangkat.",
    ],
  ];
  return (
    <section className="section section-tint" id="alur">
      <div className="container">
        <div className="section-head">
          <h2>Dari form sampai keberangkatan</h2>
          <p>
            Gambaran umum langkahnya. Detail jadwal dan syarat dijelaskan tim
            saat konsultasi.
          </p>
        </div>
        <ol className="steps">
          {steps.map(([title, description]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Company() {
  const services = [
    [
      "Rekrutmen berbasis kompetensi",
      "Mencocokkan kandidat dengan kebutuhan posisi, dari penyaringan sampai penempatan.",
    ],
    [
      "Pelatihan sales, leadership, dan coaching",
      "Dipakai antara lain oleh bank syariah dan lembaga keuangan untuk meningkatkan kemampuan tim.",
    ],
    [
      "Seminar, workshop, dan event",
      "Perencanaan sampai pelaksanaan acara, termasuk seri Work and Study Abroad.",
    ],
  ];
  return (
    <section className="section" id="perusahaan">
      <div className="container company">
        <div className="section-head">
          <h2>Untuk perusahaan dan lembaga</h2>
          <p>
            Selain program individu, FITALENTA melayani kebutuhan tim dan
            organisasi.
          </p>
          <a
            className="btn btn-primary"
            href="mailto:info@fitalenta.co.id?subject=Kebutuhan%20perusahaan"
          >
            Hubungi tim lewat email
          </a>
        </div>
        <ul className="services">
          {services.map(([title, description]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  [
    "Apakah ada program yang bisa diikuti dari rumah?",
    "Ada. Program Hybrid berlangsung online lewat Zoom atau Google Meet selama 6 bulan. Program Tokutei Ginou Fast Track juga bisa diikuti online.",
  ],
  [
    "Berapa total biaya dan apakah bisa dicicil?",
    "Total program Jepang berkisar Rp33 juta sampai Rp45 juta, tergantung program. Skema cicilan 3 sampai 5 kali tersedia untuk program tertentu. Lihat tabel di atas, lalu konfirmasi rinciannya ke tim.",
  ],
  [
    "Apakah pasti berangkat setelah mendaftar?",
    "Tidak ada jaminan. Keberangkatan bergantung pada hasil seleksi, kemampuan bahasa, dan kesiapan dokumen. Tanyakan kriteria seleksi saat konsultasi.",
  ],
  [
    "Apa syarat mengikuti program?",
    "Syaratnya berbeda per program. Fast Track untuk pemegang sertifikat JLPT N4 dan SSW, sedangkan Gijinkoku untuk lulusan engineer. Tim akan menjelaskan syarat yang berlaku untukmu.",
  ],
  [
    "Data apa yang saya kirim lewat form ini?",
    "Hanya nama, email, nomor WhatsApp, domisili, pendidikan, dan program yang diminati. Form ini tidak meminta NIK, paspor, atau data rekening.",
  ],
];

export function Faq() {
  return (
    <section className="section section-tint" id="faq">
      <div className="container faq-wrap">
        <div className="section-head">
          <h2>Pertanyaan yang sering muncul</h2>
          <p>
            Belum menemukan jawabannya? Tanyakan ke asisten virtual di pojok
            kanan bawah.
          </p>
        </div>
        <div className="faq">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="FITALENTA" className="footer-logo" />
          <p>
            FITALENTA (PT FAST Indo Talenta) membantu individu dan perusahaan
            lewat rekrutmen, pelatihan keterampilan, dan pendampingan bisnis.
          </p>
        </div>
        <div>
          <p className="footer-title">Kontak resmi perusahaan</p>
          <address>
            Gedung Science Techno Park ITB
            <br />
            Jl. Ganesha No. 15E, Bandung 40132
            <br />
            WhatsApp +62 811 10119273
            <br />
            info@fitalenta.co.id
          </address>
        </div>
        <div>
          <p className="footer-title">Privasi</p>
          <p>
            Data pada form dipakai tim FITALENTA untuk menghubungi pendaftar
            mengenai program.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SectionHead({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
