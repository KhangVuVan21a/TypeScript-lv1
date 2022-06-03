var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var product = getProduct(1);
console.log("The product ".concat(product.name, " costs $").concat(product.price));
var showProduct = function (name, price) {
    console.log("name:" + name + "price" + price);
};
var products = getProduct(1);
showProduct(products.price, products.name);
;
function show(producttest) {
    console.log(producttest.id + producttest.name);
}
show({ id: 10, name: "asdasd" });
//   interface StringFormat {
//     (str: string, isUpper: boolean): string
// }
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
//Type of typescript
console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase());
var heading = document.querySelector('h1'); // HTMLHeadingElement
var counter = 1;
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
//Type Annotation
var person;
person = {
    name: 'John',
    age: 5
};
//
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
//Type Inference
var items = [0, 1, null, 'Hi'];
var arr = [new Date(), new RegExp('\d+')];
console.log(typeof arr);
//TypeScript Number
var price;
price = 9.92;
var x = 100, y = 200;
var bin = 4;
var anotherBin = 2;
var octal = 8;
var hexadecimal = 0XA;
//let big: bigint = 9007199254740991n;
console.log(bin);
console.log(anotherBin);
console.log(octal);
console.log(hexadecimal);
//console.log(big);
//TypeScript String
var firstName = 'John';
var title = "Web Developer";
var description = "This TypeScript string can \nspan multiple \nlines\n";
console.log(description);
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
console.log(profile);
//TypeScript Boolean
var pending;
pending = true;
// after a while
// ..
pending = false;
console.log(pending);
//TypeScript object Type
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee.firstName);
var employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee1);
var vacant = {};
console.log(vacant.toString());
//TypeScript Array Type
var skills = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills[3] = "asdasdas";
skills.push('Software Design');
skills.forEach(function (element) {
    console.log(element);
});
console.log(typeof skills[0]);
console.log(skills.length);
var series = [1, 2, 3];
var doubleIt = series.map(function (e) { return e * 2; });
console.log(doubleIt);
var scores = ['Programming', 5, 'Software Design', 4];
console.log(scores);
// let scores : (string | number)[];
// scores = ['Programming', 5, 'Software Design', 4];
//TypeScript Tuple
var skill;
skill = ['Programming', 5];
var color = [255, 0, 0];
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log(bgColor);
console.log(headerColor);
//TypeScript Enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
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
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var request = {
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
var json = "{\"latitude\": 10.11, \"longitude\":12.12}";
// parse JSON to find location
var currentLocation = JSON.parse(json);
console.log(currentLocation);
var result;
result = 10.123;
console.log(result.toFixed());
//result.willExist(); //
//TypeScript never Type
function raiseError(message) {
    throw new Error(message);
}
function reject() {
    return raiseError('Rejected');
}
var loop = function forever() {
    while (true) {
        console.log('Hello');
    }
};
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}
var neverOccur = function () {
    throw new Error('Never!');
};
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
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add("asdas", "llllll"));
var resultt;
resultt = 10; // OK
resultt = 'Hi'; // also OK
var messsage = 'a'; // same as string type
console.log(typeof messsage);
var input;
input = 100; // valid
input = 'Hi';
//TypeScript String Literal Types
var mouseEvent;
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
}
else {
    // else statements;
    console.log('2>3');
}
//switch case
var targetId = 'btnDelete';
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
var month = 1, year = 2020;
var day = 0;
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
console.log("The month ".concat(month, " in ").concat(year, " has ").concat(day, " days"));
//for(;;)
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
var counters = 0;
//while
while (counters < 5) {
    console.log(counters);
    counters++;
}
var list = document.querySelector('#list');
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
//do while
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
//TypeScript Functions
// function name(parameter: type, parameter:type,...): returnType {
//     // do something
//  }
function echo(message) {
    console.log(message.toUpperCase());
}
echo("Hello");
function addd(a, b) {
    return a + b;
}
console.log(addd(5, 3));
//TypeScript Function Types
var addd1 = function (x, y) {
    return x + y;
};
console.log(addd1(2, 3));
var addd2 = function (x, y) {
    return x + y;
};
console.log(addd2(2, 3));
var addd3 = function (x, y) {
    return x.concat(y).length;
};
console.log(addd3("Hello", " World!"));
//TypeScript Optional Parameters
function multiply(a, b, c) {
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
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
function sum(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
console.log(sum(4));
function getDay(year, month) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var day = 0;
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
var dayy = getDay(2020, 2);
console.log(dayy); // 28
dayy = getDay(undefined, 2);
console.log(dayy);
//TypeScript Rest Parameters
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
function add1(a, b) {
    return a + b;
}
console.log(add1("abc", "cba"));
console.log(add1(1, 2));
function sum1(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum1(1, 2));
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter1 = new Counter();
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
var Persoreadonly = /** @class */ (function () {
    function Persoreadonly(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
    return Persoreadonly;
}());
var person3 = new Persoreadonly(new Date(1990, 12, 25));
console.log(person3.birthDate);
//person3.birthDate = new Date(1991, 12, 25); // Compile error
//TypeScript Inheritance
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
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
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.getHeadcount = function () {
        return Employee.headcount;
    };
    Employee.headcount = 0;
    return Employee;
}());
var john = new Employee('John', 'Doe', 'Front-end Developer');
var jane = new Employee('Jane', 'Doe', 'Back-end Developer');
console.log(Employee.getHeadcount()); // 2
//TypeScript Abstract Classes
var Employeeabstrc = /** @class */ (function () {
    function Employeeabstrc(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employeeabstrc.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employeeabstrc.prototype.compensationStatement = function () {
        return "".concat(this.fullName(), " makes ").concat(this.getSalary(), " a month.");
    };
    return Employeeabstrc;
}());
//let employee = new Employeeabstrc('John','Doe');
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employeeabstrc));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(Employeeabstrc));
var johnn = new FullTimeEmployee('John', 'Doe', 12000);
var janee = new Contractor('Jane', 'Doe', 100, 160);
console.log(johnn.compensationStatement());
console.log(janee.compensationStatement());
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var johns = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(johns));
var janes = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
};
var fullName = getFullName(janes);
console.log(fullName); // Jane Doe
var formatt;
formatt = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
var lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
console.log(formatt('hi', true));
console.log(lowerCase('Hi', false));
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.later = function (email, after) {
        console.log("Send email to ".concat(email, " in ").concat(after, " ms."));
        return true;
    };
    Mail.prototype.send = function (email) {
        console.log("Sent email to ".concat(email));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to ".concat(email, "."));
        return true;
    };
    return Mail;
}());
var maill = new Mail();
maill.later("asdsad", 1);
var e = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
console.log(e);
var c = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
console.log(c);
function add4(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
console.log(add4(3, 4));
console.log(add4("asda", "khas"));
var Customerr = /** @class */ (function () {
    function Customerr() {
    }
    Customerr.prototype.isCreditAllowed = function () {
        // ...
        return true;
    };
    return Customerr;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        // ...
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
    if (partner instanceof Customerr) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }
    return message;
}
var test1 = new Supplier;
console.log(signContract(test1));
//Type Casting
var inputt = document.querySelector('input[type="text"]');
console.log(inputt.value);
var enteredtext = inputt.value;
console.log(enteredtext);
// let el: HTMLElement;
// el = new HTMLInputElement();
var input1 = document.querySelector('input[type="text"]');
console.log(input1.value);
//Type Assertions
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
var netPrice = getNetPrice(100, 0.05, true);
console.log(netPrice);
var netPrice1 = getNetPrice(100, 0.05, false);
console.log(netPrice1);
var netPrice3 = getNetPrice(100, 0.05, false);
console.log(typeof netPrice3);
//TypeScript Generics
function getRandomNumberElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let numbers = [1, 5, 7, 4, 2, 9];
// console.log(getRandomNumberElement(numbers));
function getRandomStringElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let colors = ['red', 'green', 'blue'];
// console.log(getRandomStringElement(colors));
function getRandomAnyElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let numbers = [1, 5, 7, 4, 2, 9];
// let colors = ['red', 'green', 'blue'];
// console.log(getRandomAnyElement(numbers));
// console.log(getRandomAnyElement(colors));
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// let numbers = [1, 5, 7, 4, 2, 9];
// let randomEle = getRandomElement<number>(numbers); 
// console.log(randomEle);
var numbers = [1, 5, 7, 4, 2, 9];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result3 = merge({ name: 'John' }, { age: 5 });
console.log(result3);
//TypeScript Generic Constraints
var person5 = merge({ name: 'John' }, 25);
console.log(person5);
function prop(obj, key) {
    return obj[key];
}
var str = prop({ name: 'John' }, 'name');
console.log(str);
var montht = {
    key: 'Jan',
    value: 1
};
console.log(montht);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var listt = new List();
for (var i_2 = 0; i_2 < 10; i_2++) {
    listt.add(i_2);
}
console.log(listt);
var inputOptions = {
    'disabled': false,
    'visible': true
};
console.log(inputOptions);
//TypeScript Generic Classes
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numberr = new Stack(5);
while (!numberr.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    numberr.push(n);
}
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
