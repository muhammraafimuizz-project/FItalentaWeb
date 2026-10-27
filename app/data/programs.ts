export type Program = {
  name: string;
  value: string;
  trainingCost: string;
  departureCost: string;
  totalCost: string;
  installment: string;
  description: string;
};

export const programs: Program[] = [
  {
    name: "Reguler",
    value: "Reguler (Bandung, offline)",
    trainingCost: "Rp9,5 juta", // TODO: konfirmasi dengan tim
    departureCost: "Rp30 juta", // TODO: konfirmasi dengan tim
    totalCost: "Rp39,5 juta", // TODO: konfirmasi dengan tim
    installment: "4 kali", // TODO: konfirmasi dengan tim
    description: "6 bulan, tatap muka di Bandung",
  },
  {
    name: "Asrama",
    value: "Asrama (Bandung & Cikarang)",
    trainingCost: "Rp15 juta", // TODO: konfirmasi dengan tim
    departureCost: "Rp30 juta", // TODO: konfirmasi dengan tim
    totalCost: "Rp45 juta", // TODO: konfirmasi dengan tim
    installment: "5 kali", // TODO: konfirmasi dengan tim
    description: "6 bulan, berasrama di Bandung dan Cikarang",
  },
  {
    name: "Hybrid",
    value: "Hybrid (online)",
    trainingCost: "Rp7 juta", // TODO: konfirmasi dengan tim
    departureCost: "Rp30 juta", // TODO: konfirmasi dengan tim
    totalCost: "Rp37 juta", // TODO: konfirmasi dengan tim
    installment: "3 kali", // TODO: konfirmasi dengan tim
    description: "6 bulan, online lewat Zoom atau Google Meet",
  },
  {
    name: "Gijinkoku",
    value: "Gijinkoku (lulusan engineer)",
    trainingCost: "Rp15 juta", // TODO: konfirmasi dengan tim
    departureCost: "Rp25 juta", // TODO: konfirmasi dengan tim
    totalCost: "Rp40 juta", // TODO: konfirmasi dengan tim
    installment: "3 kali", // TODO: konfirmasi dengan tim
    description: "6 bulan di Bandung, khusus lulusan engineer",
  },
  {
    name: "Tokutei Ginou Fast Track",
    value: "Tokutei Ginou Fast Track",
    trainingCost: "Rp3 juta (kelas intensif, opsional)", // TODO: konfirmasi dengan tim
    departureCost: "Rp30 juta", // TODO: konfirmasi dengan tim
    totalCost: "Rp33 juta", // TODO: konfirmasi dengan tim
    installment: "Bayar lunas", // TODO: konfirmasi dengan tim
    description:
      "1 bulan, online atau di Bandung, untuk pemegang sertifikat JLPT N4 dan SSW",
  },
  {
    name: "Beasiswa bahasa Jepang N1",
    value: "Beasiswa bahasa Jepang N1",
    trainingCost: "Rp15 juta", // TODO: konfirmasi dengan tim
    departureCost: "Rp25 juta", // TODO: konfirmasi dengan tim
    totalCost: "Rp40 juta", // TODO: konfirmasi dengan tim
    installment: "Bayar lunas", // TODO: konfirmasi dengan tim
    description:
      "6 bulan di Bandung, lalu 2 tahun di Osaka sambil kerja paruh waktu",
  },
];

export const PROGRAM_OPTIONS = [
  "Reguler (Bandung, offline)",
  "Asrama (Bandung & Cikarang)",
  "Hybrid (online)",
  "Gijinkoku (lulusan engineer)",
  "Tokutei Ginou Fast Track",
  "Beasiswa bahasa Jepang N1",
  "Belum tahu, ingin konsultasi",
] as const;

export type ProgramOption = (typeof PROGRAM_OPTIONS)[number];

export const EDUCATION_OPTIONS = [
  "SMA/SMK",
  "D3",
  "D4/S1",
  "S2",
  "Lainnya",
] as const;

export type EducationOption = (typeof EDUCATION_OPTIONS)[number];
