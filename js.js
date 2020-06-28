//variable
//deklarasi
var mobil;//
console.log(mobil);
//assign
mobil= "xenia";
console.log(mobil);
//deklarasi lebih dari satu variable
var mobil1 = "innova", mobil2 = "kijang", mobil3 = "mobilio";
console.log(mobil1);
console.log(mobil2);
console.log(mobil3);
//menggabungkan nilai variabel
var kata_mobil = mobil + " ada 5";
console.log(kata_mobil);
var jumlah = 4+5;
var jumlah1 = "4"+5+6; //setelah string, selanjutnya dianggap string
var jumlah2 = 4+5+"6";
//analisis perbedaan nya
//program dievaluasi dari atas kebawah, kiri kekanan

console.log(jumlah);
console.log(jumlah1);
console.log(jumlah2);
//operator
//arithmetic operator
var operator_jumlah = 4+5;
var operator_kurang = 4-5;
//assignment operator
var angka1 =5; 
var angka2 =6;
angka1 += angka2;
console.log(angka1);
angka1 -= angka2;
console.log(angka1);
angka1 *= angka2;
console.log(angka1);
//comparison
console.log(5>6);
console.log(5==6);
console.log(5>4);
//logical operator
console.log(5<6|| 5>6);
console.log(5<6 && 5>6);

//data type
//data type di JS bersifat dynamic
var kata = "aku";
console.log(typeof(kata));
kata=5;
console.log(kata);
console.log(typeof(kata));
var takTerdefinisi;
console.log(typeof(takTerdefinisi));
//perbedaan undefined dan null dibahas pertemuan kedepan


