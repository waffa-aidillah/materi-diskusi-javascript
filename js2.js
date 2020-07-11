//object
//gambaran objek seperti benda di kehidupan nyata

var car ={
    //properties
    name : "brio",
    type : "city car",
    fuel : "solar",
    color : "white",
    //method
    //method sama seperti action, perilaku -> function disimpan layaknya properti
    description : function(){
        return `this ${this.name} is ${this.type}`;
    }
};
//accessing
console.log(car.name);
console.log(car.type);
console.log(car.fuel);
console.log(car.description);
console.log(car.description());

//array
var cars = ["volvo", "sedan", "xenia"];
//array adalah variabel yang dapat menyimpan banyak nilai
//dapat mengakses dengan index
console.log(cars[1]);
console.log(cars[0]);
console.log(cars[2]);
//model penulisan
var motors = [
    "ducati",
    "yamaha",
    "honda",
    "kawasaki"
];
//mengubah nilai di array
motors[0]="suzuki";
motors[1]="jeep";
console.log(motors);
//nilai array juga bisa beragam
var tanaman = ["melati", 4, true];

//property dan method di array
//untuk mengetahui panjang dari array
//property length
var panjangMotor = motors.length;
var panjangMobil = cars.length;
//bagaimana jika ingin mendapatkan nilai array yang terakhir?
var lastMotor = motors[motors.length-1];
//menambah item di array
//method push
cars.push("lambo");
console.log(cars);
console.log(cars.length);
//metode pop
//untuk mengeluarkan item
cars.pop();
console.log(cars);
//metode shift
//bisa mendapatkan item yang pertama
var tanamanPertama = tanaman.shift;
console.log(tanaman);
tanaman.unshift("mawar");
console.log(tanaman);
//perbedaan object dan array?
//object menggunakan indeks yang dinamai
//array menggunakan indeks yang dinomorin
//sesuai kebutuhan saja
//properti dan method mengenai array bisa dilihat di w3school

//condition
/*
if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }*/

var suhu=70;
if(suhu<50){
    console.log("suhu dibawah 50 derajat");
}else{
    console.log("suhu diatas 50 derajat :(");
}