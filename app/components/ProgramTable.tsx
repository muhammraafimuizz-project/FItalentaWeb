"use client";

import { programs } from "../data/programs";

export const PROGRAM_SELECTED_EVENT = "fitalenta:select-program";

export function ProgramTable() {
  function chooseProgram(value: string) {
    window.dispatchEvent(
      new CustomEvent(PROGRAM_SELECTED_EVENT, { detail: { value } }),
    );
  }

  return (
    <section className="section" id="program">
      <div className="container">
        <div className="section-head">
          <h2>Pilih program yang sesuai kondisimu</h2>
          <p>
            Semua program Jepang berikut mencakup lima bidang kerja: kaigo
            (perawatan lansia), pengelolaan makanan, pertanian, perhotelan, dan
            driver. Program Gijinkoku khusus lulusan engineer.
          </p>
        </div>
        <div className="table-wrap">
          <table className="programs">
            <thead>
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Biaya pelatihan</th>
                <th scope="col">Biaya keberangkatan</th>
                <th scope="col">Perkiraan total</th>
                <th scope="col">Cicilan</th>
                <th scope="col">
                  <span className="sr-only">Pilih program</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.value}>
                  <th scope="row" data-label="Program">
                    <span className="prog-name">{program.name}</span>
                    <span className="prog-desc">{program.description}</span>
                  </th>
                  <td data-label="Biaya pelatihan">{program.trainingCost}</td>
                  <td data-label="Biaya keberangkatan">
                    {program.departureCost}
                  </td>
                  <td data-label="Perkiraan total" className="total">
                    {program.totalCost}
                  </td>
                  <td data-label="Cicilan">{program.installment}</td>
                  <td className="act">
                    <button
                      type="button"
                      className="btn btn-ghost btn-small"
                      onClick={() => chooseProgram(program.value)}
                    >
                      Pilih program
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="fineprint">
          Perkiraan total adalah biaya pelatihan ditambah biaya keberangkatan,
          belum termasuk biaya registrasi Rp300.000. Angka diambil dari website
          resmi FITALENTA per 26 Oktober 2026. Konfirmasi ke tim sebelum
          membayar.
        </p>
        <p className="side-program">
          Ingin kuliah di Korea Selatan? Program Korea menyiapkan bahasa (TOPIK)
          dan dokumen awal secara online selama 3 bulan, dengan biaya Rp11,4
          juta dan cicilan 3 kali.
        </p>
      </div>
    </section>
  );
}
