# absensi-tahfidz
absensi-tahfidz/
│── <!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Absensi Tahfidz - MTs Alkarimiyah</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <header class="header">
        <h1>📚 MTs Alkarimiyah</h1>
        <p>Sistem Absensi Tahfidz</p>
    </header>

    <div class="card">

        <div class="top-menu">

            <div>
                <label>Kelas</label>
                <select id="kelas">
                    <option>VIII.1</option>
                    <option>VIII.2</option>
                    <option>VIII.3</option>
                    <option>VIII.4</option>
                </select>
            </div>

            <div>
                <label>Tanggal</label>
                <input type="date" id="tanggal">
            </div>

        </div>

        <input
            type="text"
            id="search"
            placeholder="🔍 Cari Nama Siswa..."
        >

        <table>

            <thead>

            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Status</th>
            </tr>

            </thead>

            <tbody id="tbody">

            </tbody>

        </table>

    </div>

</div>

<script src="data.js"></script>
<script src="script.js"></script>

</body>
</html>
│── *{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#eef3fb;
}

.container{
max-width:1100px;
margin:auto;
padding:30px;
}

.header{
background:#1565c0;
color:white;
padding:25px;
border-radius:15px;
text-align:center;
margin-bottom:20px;
}

.card{
background:white;
padding:20px;
border-radius:15px;
box-shadow:0 5px 15px rgba(0,0,0,.15);
}

.top-menu{
display:flex;
gap:20px;
margin-bottom:20px;
flex-wrap:wrap;
}

.top-menu div{
flex:1;
}

label{
display:block;
margin-bottom:6px;
font-weight:bold;
}

select,input{
width:100%;
padding:10px;
border-radius:8px;
border:1px solid #ccc;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

th{
background:#1565c0;
color:white;
padding:12px;
}

td{
padding:10px;
border-bottom:1px solid #ddd;
text-align:center;
}

tr:hover{
background:#f5f5f5;
}

@media(max-width:700px){

.container{
padding:10px;
}

}
│── document.getElementById("tanggal").value =
new Date().toISOString().split("T")[0];
│── const siswa = {};
│── README.md
│── assets/
│     └── logo.png   ()
