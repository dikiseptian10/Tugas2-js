var namaTeman = [
{Nama: 'Fahmi', Kelas: 'XI RPL 1'},
{Nama: 'Adjie', Kelas: 'XI RPL 1'},
{Nama: 'Zhanpar', Kelas: 'XI RPL 1'},
{Nama: 'Arul', Kelas: 'XI RPL 1'},
{Nama: 'Ilham', Kelas: 'XI RPL 1'},
{Nama: 'Herdi', Kelas: 'XI RPL 1'},
{Nama: 'Genta', Kelas: 'XI RPL 1'},
{Nama: 'Johanes', Kelas: 'XI RPL 3'},
{Nama: 'Robbie', Kelas: 'XI RPL 3'},
{Nama: 'AhmadIkhsan', Kelas: 'XI RPL 1'},]

console.log();

function Manggil() {
  var nyeleksi = namaTeman.filter (Ngaran =>{
    return Ngaran.Kelas == "XI RPL 1"  
  });
  console.log(nyeleksi);  
}
Manggil();