function TableDataSiswa({ dataSiswa, funcDeleteDataSiswa }) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Kode Siswa
            </th>
            <th scope="col" class="px-6 py-3">
              Nama Siswa
            </th>
            <th scope="col" class="px-6 py-3">
              Alamat Siswa
            </th>
            <th scope="col" class="px-6 py-3">
              Tanggal Siswa
            </th>
            <th scope="col" class="px-6 py-3">
              Jurusan Siswa
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((siswa) => {
            return (
              <tr key={siswa.kode_siswa}>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {siswa.nama_siswa}
                </th>
                <td class="px-6 py-4">{siswa.nama_siswa}</td>
                <td class="px-6 py-4">{siswa.alamat_siswa}</td>
                <td class="px-6 py-4">{siswa.tgl_siswa}</td>
                <td class="px-6 py-4">{siswa.jurusan_siswa}</td>
                <td class="px-6 py-4">
                  <form method="DELETE" onSubmit={funcDeleteDataSiswa}>
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
    </div>
  );
}

export default TableDataSiswa;
