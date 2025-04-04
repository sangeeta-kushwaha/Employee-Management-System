class employee{
    #id;
    constructor(name,id,department){
        this.name = name;
        this.#id = id;
        this.department = department;
    }

    getId(){
        return this.#id;
    }

    setId(newId){
        if(typeof newId ==="number" && newId>0){
            this.#id = newId;
        }else{
            console.log("invalid id")
        }
    }

    displayInfo(){
        console.log(`employee id : ${this.#id} ,name: ${this.name} , department : ${this.department}`)
    }
}


//2nd

class manager extends employee{
    constructor(name,id,department,teamsize){
        super(name,id,department);
        this.teamsize = teamsize
    }

    displayInfo(){
        console.log(`${this.name} is managing a team of ${this.teamsize} people`);
    }

    promoteEmployee(){
        console.log(`${this.name} has promoted an employee`)
    }
}


class intern extends employee{
    constructor(name,id,department,duration){
        super(name,id,department);
        this.duration = duration
    }

    displayInfo(){
        console.log(`intern ${this.name} internship is now extended to ${this.duration} months`)
    }

    extendInternship(months){
        this.duration +=months;
    }
}



//additional
class PartTimeEmployee extends employee {
    constructor(name,id,department, hourlyRate) {
        super(name,id,department);
        this.hourlyRate = hourlyRate;
    }

    calculateSalary(hoursWorked) {
        return this.hourlyRate * hoursWorked;
    }
}



let emp1 = new employee("Alice", 101, "HR");
emp1.displayInfo();  



let emp2 = new manager( "Bob",102, "IT", 10);
emp2.displayInfo();  

emp2.promoteEmployee();  


let emp3 = new intern( "Charlie",103, "Marketing", 3);
emp3.displayInfo(); 
emp3.extendInternship(2);
emp3.displayInfo();  




let emp4 = new PartTimeEmployee(104, "David", "Finance", 20);
console.log(`David's salary for 10 hours: $${emp4.calculateSalary(10)}`);