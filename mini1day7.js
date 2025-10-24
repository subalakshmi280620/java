function Employee(name,id){
    this.name=name;
    this.id=id;
}
    function Manager(name,id,department,managedTeam){
        Employee.call(this, name,id);
        this.department=department;
    }
    Employee.prototype.getDetails=function(){
        return `Name: ${this.name}, ID: ${this.id}`;
    };
    Manager.prototype=Object.create(Employee.prototype);
    Manager.prototype.constructor=Manager;
    Manager.prototype.getManagerdetails=function(){
        return `${this.getDetails()}, department: ${this.department}`;

};
const emp1=new Employee("suba","E001");
console.log(emp1.getDetails());
const manager1=new Manager("muthu","M001","Sales");
console.log(manager1.getDetails());
console.log(manager1.getManagerdetails());

function PERSON(name,age){
    this.name=name;
    this.age=age;
}
function CreatePERSONInstance(personName,personAge){
  const newperson=new PERSON(personName,personAge);
  return newperson;
}
const suba=CreatePERSONInstance("suba",25);
console.log(suba);
console.log(suba.name);