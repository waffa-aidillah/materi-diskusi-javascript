//perulangan
var ulang= 5;
for(i=0;i< ulang; i++){
    console.log(i);
}
var start=0;
while(start<ulang){
    console.log(start);
    start++;
}
var start2=1;
do{
    console.log(start2);
    start2++;
}while(start2<ulang);

//DOM-> document object model
//html dom dibangun dengan pohon objek
//kita bisa mengedit2 apa aja yang ada di pohon objek tersebut
//html element sebagai objek
//ada beberapa istilah ->yaitu DOM method dan DOM property
//contoh
document.getElementById("pertama").innerHTML ="Hello Word";
//getElementById ->DOM method
//innerHTML -> DOM property
//beberapa contoh method lainnya
//DOM untuk html
var tag = document.getElementsByTagName("p");
console.log(tag);
var daftarClass = document.getElementsByClassName("namaClass");
console.log(daftarClass);
var query = document.querySelectorAll("p#pertama");
console.log(query);
//DOM untuk css
document.getElementById("pertama").style.color = "red";
document.getElementById("pertama").style.fontSize = "20px";

function randomize() {
    document.getElementById('pertama').style.color = randomColors();
    console.log(randomColors());
  }
  
  
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
