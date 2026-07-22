const tbody = document.getElementById("tbody");
const kelas = document.getElementById("kelas");
const search = document.getElementById("search");

function render() {

    tbody.innerHTML = "";

    const keyword = search.value.toLowerCase();

    const daftar = siswa[kelas.value];

    daftar
        .filter(nama => nama.toLowerCase().includes(keyword))
        .forEach((nama,index)=>{

            tbody.innerHTML += `
            <tr>

                <td>${index+1}</td>

                <td style="text-align:left;padding-left:15px;">
                    ${nama}
                </td>

                <td>

                    <select>

                        <option value="">-</option>

                        <option>✅ Hadir</option>

                        <option>🟡 Izin</option>

                        <option>🔵 Sakit</option>

                        <option>🔴 Alpha</option>

                    </select>

                </td>

            </tr>
            `;

        });

}

kelas.addEventListener("change",render);

search.addEventListener("input",render);

render();
