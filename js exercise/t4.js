/*
 Task4:WriteaJavaScript program that creates a class called University with properties for university
 names and departments. Include methods to add a department, remove a department, and display all
 departments. Create an instance of the University class and add and remove departments
*/

class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDept(department) {
        this.departments.push(department);
    }

    removeDept(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        } else {
            console.log(`${department} not found in departments`);
        }
    }

    displayDept() {
        console.log(`Departments at ${this.name}:`);
        this.departments.forEach((dept, index) => {
            console.log(`${index + 1}. ${dept}`);
        });
    }
}

const myUniversity = new University("Tech University");

myUniversity.addDept("Computer Science");
myUniversity.addDept("Electrical Engineering");
myUniversity.addDept("Mechanical Engineering");

console.log("After adding departments:");
myUniversity.displayDept();

myUniversity.removeDept("Electrical Engineering");

console.log("\nAfter removing a department:");
myUniversity.displayDept();
