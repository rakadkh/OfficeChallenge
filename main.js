class Document{
    constructor(EmployeeName){
        this.EmployeeName=EmployeeName
    }
}

class Employee{
    constructor(name){
        this.name=name
    }
    work(Office){
        const doc=new Document(this.name)
        for(let i=0;i<10;i++){
            Office.documents.push(doc)
        }
    }
}

class Manager{
    constructor(name,employees){
        this.employees=[]
        this.name=name
    }
    hireEmployee(name){
        const emp=new Employee(name)
        this.employees.push(emp)
    }
    askEmployeesToWork(Office){
        this.employees.forEach(emp=>emp.work(Office))
    }
}

class Cleaner{
    constructor(name){
        this.name=name
    }
    clean(){
        console.log("Clean");
        
    }
}

class Office{
    constructor(documents,managers,cleaners){
        this.documents=[]
        this.managers=[]
        this.cleaners=[]
    }
    hireCleaner(name){
        const cln=new Cleaner(name)
        this.cleaners.push(cln)
    }
    hireManager(name){
        const mgr=new Manager(name)
        this.managers.push(mgr)
    }
    startWorkDay(){
        this.managers.forEach(mgr=>mgr.askEmployeesToWork(this))
        this.cleaners.forEach(cln=>cln.clean())
    }
}