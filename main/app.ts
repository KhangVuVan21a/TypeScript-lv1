function getProduct(id) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}
const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);
const showProduct = (name, price) => {
    console.log("name:" + name + "price" + price);
};
const products = getProduct(1);
showProduct(products.price, products.name);
//
interface Producttest {
    id: number;
    name: string
};
function show(producttest: Producttest) {
    console.log(producttest.id + producttest.name);
}
show({ id: 10, name: "asdasd" });
//   interface StringFormat {
//     (str: string, isUpper: boolean): string
// }
let format;
format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
//Type of typescript
console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase());
const heading = document.querySelector('h1'); // HTMLHeadingElement
let counter: number = 1;
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
//Type Annotation
let person: {
    name: string;
    age: number
};

person = {
    name: 'John',
    age: 5
};
//
let greeting: (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};
//Type Inference
let items = [0, 1, null, 'Hi'];
let arr = [new Date(), new RegExp('\d+')];
console.log(typeof arr);
//TypeScript Number
let price: number;
price = 9.92;
let x: number = 100,
    y: number = 200;
let bin = 0b100;
let anotherBin: number = 0B010;
let octal: number
    = 0o10;
let hexadecimal: Number = 0XA;
//let big: bigint = 9007199254740991n;
console.log(bin);
console.log(anotherBin);
console.log(octal);
console.log(hexadecimal);
//console.log(big);
//TypeScript String
let firstName: string = 'John';
let title: string = "Web Developer";
let description = `This TypeScript string can 
span multiple 
lines
`;
console.log(description);

let profile: string = `I'm ${firstName}. 
I'm a ${title}`;
console.log(profile);
//TypeScript Boolean
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;
console.log(pending);

//TypeScript object Type

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee.firstName);
let employee1: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee1);
let vacant: {} = {};

console.log(vacant.toString());
//TypeScript Array Type
let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills[3] = "asdasdas";
skills.push('Software Design');
skills.forEach(element => {
    console.log(element);

});
console.log(typeof skills[0]);

console.log(skills.length);

let series = [1, 2, 3];
let doubleIt = series.map(e => e * 2);
console.log(doubleIt);
let scores = ['Programming', 5, 'Software Design', 4];
console.log(scores);
// let scores : (string | number)[];
// scores = ['Programming', 5, 'Software Design', 4];

//TypeScript Tuple
let skill: [string, number];
skill = ['Programming', 5];
let color: [number, number, number] = [255, 0, 0];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log(bgColor);
console.log(headerColor);
//TypeScript Enum
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};


function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(Month.Aug);

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if (request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
//TypeScript any Type
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
let result: any;
result = 10.123;
console.log(result.toFixed());
//result.willExist(); //

//TypeScript never Type
function raiseError(message: string): never {
    throw new Error(message);
}
function reject() {
    return raiseError('Rejected');
}
let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}

function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
}
//TypeScript union Type
//   function add(a: any, b: any) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b);
//     }
//     throw new Error('Parameters must be numbers or strings');
// }
// add(true, false);
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add("asdas", "llllll"));
let resultt: number | string;
resultt = 10; // OK
resultt = 'Hi'; // also OK

//TypeScript Type Aliases
type chars = string;
let messsage: chars = 'a'; // same as string type
console.log(typeof messsage);
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi';
//TypeScript String Literal Types
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//mouseEvent = 'mouseover'; // compiler error

//CONTROL FLOW STATEMENTS
//if else
if (3 > 2) {
    // if-statements
    console.log('3>2');

} else {
    // else statements;
    console.log('2>3');

}
//switch case
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}
console.log(targetId);
let month = 1,
    year = 2020;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
//for(;;)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let counters = 0;

//while
while (counters < 5) {
    console.log(counters);
    counters++;
}
let list = document.querySelector('#list');

while (list.firstChild) {
    list.removeChild(list.firstChild);
}

//do while
let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);
//TypeScript Functions
// function name(parameter: type, parameter:type,...): returnType {
//     // do something
//  }
function echo(message: string): void {
    console.log(message.toUpperCase());
}
echo("Hello");
function addd(a: number, b: number): number {
    return a + b;
}
console.log(addd(5, 3));
//TypeScript Function Types
let addd1 = function (x: number, y: number) {
    return x + y;
};
console.log(addd1(2, 3));
let addd2: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
console.log(addd2(2, 3));
let addd3 = function (x: string, y: string): number {
    return x.concat(y).length;
};
console.log(addd3("Hello", " World!"));
//TypeScript Optional Parameters
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(1, 2, 3));
//TypeScript Default Parameters
// function name(parameter1=defaultValue1,...) {
//     // do something
//  }
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
function sum(a: number, b: number = 5): number {
    return a + b;
}
console.log(sum(4));
function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}
let dayy = getDay(2020, 2);
console.log(dayy); // 28
dayy = getDay(undefined, 2);
console.log(dayy);
//TypeScript Rest Parameters
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
//TypeScript Function Overloadings
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: any, b: any): any {
    return a + b;
}
console.log(add1("abc", "cba"));
console.log(add1(1, 2));
function sum1(a: number, b: number): number;
function sum1(a: number, b: number, c: number): number;
function sum1(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log(sum1(1, 2));

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter1 = new Counter();

console.log(counter1.count());
console.log(counter1.count()); // return a number
console.log(counter1.count(20)); // return an array

//TypeScript Class
// function Person(ssn, firstName, lastName) {
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }
// let persons = new Person('171-28-0926','John','Doe');
// console.log(persons.getFullName());
// class Person {
//     ssn: string;
//     firstName: string;
//     lastName: string;

//     constructor(ssn: string, firstName: string, lastName: string) {
//         this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(): string {
//         return this.firstName+this.lastName;
//     }
// }
// let person2 = new Person('171-28-0926','John','Doe');
// console.log(person2.getFullName());

//TypeScript Access Modifiers
// class Person {
//     private ssn: string;
//     private firstName: string;
//     private lastName: string;

//     constructor(ssn: string, firstName: string, lastName: string) {
//         this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(): string {
//         return `${this.firstName} ${this.lastName}`; 
//     }
// }

// class Person {
//     constructor(protected ssn: string, private firstName: string, private lastName: string) {
//         this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// let person2 = new Person('153-07-3130', 'John', 'Doe');
// console.log(person2.getFullName());

//TypeScript readonly
class Persoreadonly {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}
let person3 = new Persoreadonly(new Date(1990, 12, 25));
console.log(person3.birthDate);

//person3.birthDate = new Date(1991, 12, 25); // Compile error

//TypeScript Inheritance

class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

// class Employee extends Person {
//     constructor(
//         firstName: string,
//         lastName: string,
//         private jobTitle: string) {

//         // call the constructor of the Person class:
//         super(firstName, lastName);
//     }
//     describe(): string {
//         return super.describe() + `I'm a ${this.jobTitle}.`;
//     }
// }
// let employee3 = new Employee('John','Doe','Front-end Developer');
// console.log(employee3.getFullName());
// console.log(employee3.describe());

//TypeScript Static Methods and Properties
class Employee {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount()); // 2
//TypeScript Abstract Classes
abstract class Employeeabstrc {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName()} makes ${this.getSalary()} a month.`;
    }
}
//let employee = new Employeeabstrc('John','Doe');
class FullTimeEmployee extends Employeeabstrc {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
class Contractor extends Employeeabstrc {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
let johnn = new FullTimeEmployee('John', 'Doe', 12000);
let janee = new Contractor('Jane', 'Doe', 100, 160);

console.log(johnn.compensationStatement());
console.log(janee.compensationStatement());

//TypeScript Interface

// function getFullName1(person: {
//     firstName: string;
//     lastName: string
// }) {
//     return `${person.firstName} ${person.lastName}`;
// }

// let person1 = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(getFullName1(person1));
// interface Personinterface {
//     firstName: string;
//     lastName: string;
// }
interface Personinterface {
    firstName: string,
    middleName?: string,
    lastName: string
}
function getFullName(person: Personinterface) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let johns = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(johns));
let janes = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
 };
 let fullName = getFullName(janes);
console.log(fullName); // Jane Doe

interface StringFormat {
    (str: string, isUpper: boolean): string
}
let formatt: StringFormat;

formatt = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
}

console.log(formatt('hi', true));
console.log(lowerCase('Hi', false));

// interface Json {
//     toJSON(): string,
//  }
//  class Student implements Json {
//     constructor(private firstName: string,
//         private lastName: string) {
//     }
//     toJSON(): string {
//         return JSON.stringify(this);
//     }
// }
// let person5 = new Student('John', 'Doe');
//console.log(person5.toJSON());

//Extend Interfaces in TypeScript
interface Mailable {
    send(email: string): boolean
    queue(after: string): boolean
}
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
let maill= new Mail();
maill.later("asdsad",1);
//TypeScript Intersection Types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
//type typeAB = typeA & typeB;
//type typeBA = typeB & typeA;
type Employee1 = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee1 = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
console.log(e);

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
console.log(c);

//TypeScript Type Guards

type alphanumeric1 = string | number;

function add4(a: alphanumeric1, b: alphanumeric1) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
console.log(add4(3,4));
console.log(add4("asda","khas"));

class Customerr {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner1 = Customerr | Supplier;

function signContract(partner: BusinessPartner1) : string {
    let message: string;
    if (partner instanceof Customerr) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}

let test1:BusinessPartner1=new Supplier;
console.log(signContract(test1));

//Type Casting
 let inputt = document.querySelector('input[type="text"]') as HTMLInputElement;

 console.log(inputt.value);
let enteredtext=(inputt as HTMLInputElement).value;
console.log(enteredtext);

// let el: HTMLElement;
// el = new HTMLInputElement();

let input1 = <HTMLInputElement> document.querySelector('input[type="text"]');

console.log(input1.value);

//Type Assertions

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, true)as string;
console.log(netPrice);

let netPrice1 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice1);
let netPrice3 = <number>getNetPrice(100, 0.05,false);
console.log(typeof netPrice3);

//TypeScript Generics


