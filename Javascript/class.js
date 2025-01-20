class Employee{
    constructor(){
        this.id=103;
        this.empName="Sheetal";
    }
    // constructor(id,name){
    //     this.id=id;
    //     this.name=name;
    // }//Js doesn't support java concepts
    displayInfo(){
        console.log(this.id+" "+this.empName)
    }
}
let emp=new Employee();
emp.displayInfo();