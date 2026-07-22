const tbody = document.getElementById("tbody");
const kelas = document.getElementById("kelas");
const search = document.getElementById("search");
const tanggal = document.getElementById("tanggal");
const simpan = document.getElementById("simpan");


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

                <select class="status">

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



simpan.addEventListener("click",()=>{

    console.log("TOMBOL SIMPAN TERTEKAN");


    let dataAbsensi =
    JSON.parse(localStorage.getItem("absensi")) || [];

    const tanggalSekarang = tanggal.value;


    document.querySelectorAll("#tbody tr")
    .forEach((row)=>{


        let nama =
        row.children[1].innerText;


        let status =
        row.querySelector(".status").value;



        if(status!=""){

            dataAbsensi.push({

                tanggal:tanggalSekarang,
                kelas:kelas.value,
                nama:nama,
                status:status

            });

        }


    });



    localStorage.setItem(
        "absensi",
        JSON.stringify(dataAbsensi)
    );


    alert("Absensi berhasil disimpan");


});



kelas.addEventListener("change",render);

search.addEventListener("input",render);


render();
