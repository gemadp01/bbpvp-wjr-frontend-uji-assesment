function FormDataSiswa({ funcPostDataSiswa }) {
  return (
    <div className="mb-4">
      <form method="POST" onSubmit={funcPostDataSiswa}>
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
  );
}

export default FormDataSiswa;
