const data = JSON.parse(localStorage.getItem("absensi")) || [];


let hadir = 0;
let izin = 0;
let sakit = 0;
let alpha = 0;



data.forEach(item => {

    if(item.status.includes("Hadir")){
        hadir++;
    }

    if(item.status.includes("Izin")){
        izin++;
    }

    if(item.status.includes("Sakit")){
        sakit++;
    }

    if(item.status.includes("Alpha")){
        alpha++;
    }

});



document.getElementById("total").innerText = data.length;
document.getElementById("hadir").innerText = hadir;
document.getElementById("izin").innerText = izin;
document.getElementById("sakit").innerText = sakit;
document.getElementById("alpha").innerText = alpha;



const tabel = document.getElementById("dataAbsensi");


data.forEach((item,index)=>{


    tabel.innerHTML += `

    <tr>

        <td>${index+1}</td>

        <td>${item.tanggal}</td>

        <td>${item.kelas}</td>

        <td style="text-align:left;padding-left:15px;">
            ${item.nama}
        </td>

        <td>${item.status}</td>

    </tr>

    `;


});
