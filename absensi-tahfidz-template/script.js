const tb=document.querySelector('#tbl tbody');const sel=document.getElementById('kelas');
function render(){tb.innerHTML='';(siswa[sel.value]||[]).forEach((n,i)=>{tb.innerHTML+=`<tr><td>${i+1}</td><td>${n}</td><td><select><option>Hadir</option><option>Izin</option><option>Sakit</option><option>Alpha</option></select></td></tr>`})}
sel.onchange=render;render();