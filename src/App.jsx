import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataSiswa, setDataSiswa] = useState([]);

  function postDataSiswa(e) {
    e.preventDefault();
    const data = {
      nama_siswa: e.target.nama_siswa.value,
      alamat_siswa: e.target.alamat_siswa.value,
      tgl_siswa: e.target.tgl_siswa.value,
      jurusan_siswa: e.target.jurusan_siswa.value,
    };

    console.log(data);

    try {
      postFetchingDataSiswa(data);
      alert("Data Berhasil Disimpan");
    } catch (error) {
      console.log(error);
    }
  }

  async function postFetchingDataSiswa(data) {
    await fetch("http://localhost:3000/data-siswa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  function deleteDataSiswa(e) {
    e.preventDefault();
    const kode_siswa = e.target.kode_siswa.value;
    const konfirmasiInput = confirm("Apakah anda yakin ingin menghapus data?");
    if (konfirmasiInput) {
      fetch(`http://localhost:3000/data-siswa/${kode_siswa}`, {
        method: "DELETE",
      });
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/data-siswa")
      .then((result) => result.json())
      .then((data) => setDataSiswa(data));
  }, [dataSiswa]);

  return (
    <>
      <div>
        <form method="POST" onSubmit={postDataSiswa}>
          <div>
            <label htmlFor="nama_siswa">Nama Siswa</label>
            <input
              type="text"
              name="nama_siswa"
              id="nama_siswa"
              className="border"
            />
          </div>
          <div>
            <label htmlFor="alamat_siswa">Alamat Siswa</label>
            <textarea
              name="alamat_siswa"
              id="alamat_siswa"
              className="border"
            ></textarea>
          </div>
          <div>
            <label htmlFor="tgl_siswa">Tanggal Siswa</label>
            <input
              type="date"
              name="tgl_siswa"
              id="tgl_siswa"
              className="border"
            />
          </div>
          <div>
            <label htmlFor="jurusan_siswa">Jurusan Siswa</label>
            <input
              type="text"
              name="jurusan_siswa"
              id="jurusan_siswa"
              className="border"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white
        rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Kode Siswa</th>
            <th>Nama Siswa</th>
            <th>Alamat Siswa</th>
            <th>Tanggal Siswa</th>
            <th>Jurusan Siswa</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((siswa) => {
            return (
              <tr key={siswa.kode_siswa}>
                <td>{siswa.kode_siswa}</td>
                <td>{siswa.nama_siswa}</td>
                <td>{siswa.alamat_siswa}</td>
                <td>{siswa.tanggal_siswa}</td>
                <td>{siswa.jurusan_siswa}</td>
                <td>
                  <form method="DELETE" onSubmit={deleteDataSiswa}>
                    <input
                      type="text"
                      name="kode_siswa"
                      hidden
                      value={siswa.kode_siswa}
                    />
                    <button
                      type="submit"
                      className="bg-red-500 p-2 text-white
        rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
