import { useEffect, useState } from "react";
import FormDataSiswa from "./components/FormDataSiswa";
import "./App.css";
import TableDataSiswa from "./components/TableDataSiswa";

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
      <header className="p-4">
        <h1 className="font-bold text-3xl">Data Siswa</h1>
      </header>
      <FormDataSiswa funcPostDataSiswa={postDataSiswa} />
      <TableDataSiswa
        dataSiswa={dataSiswa}
        funcDeleteDataSiswa={deleteDataSiswa}
      />
      <h1 className="mt-5">Gema Dodi Pranata</h1>
      <p>PBL - Pengembangan Web dengan Nodejs dan React</p>
    </>
  );
}

export default App;
