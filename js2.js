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
console.log(car.description());