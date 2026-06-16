// function register(name, age, payment) {
//     this.name = name;
//     this.age = age;
//     this.payment = payment;
// }

// function handleForm() {
//     const name = prompt("enter name")
//     const age = prompt("enter age")
//     const payment = prompt("enter payment")

//     const record = new register(name,age,payment)

//     console.log(record)
// }


// function NewMobile(model, storage, color){
//     this.model = model;
//     this.storage = storage;
//     this.color = color;
// }

// function handleForm(){
//     const model = prompt("enter your model")
//     const storage  = prompt("enter your storage")
//     const color = prompt("enter your color")

//     const record = new NewMobile(model, storage, color)

//     console.log(record)
// }



// let name = "basim"
// let age = 20

// // document.write("my name is " + name ," ","my age is " + age)    
// document.write(`my name is ${name} and my age is ${age}`)    


// let num = prompt("enter table num")
// let num1 = prompt("enter second num")


// for (i = num1; i <= num1; i++) {
//     document.writeln(`${num} x ${i} = ${num * num1}` + "<br>")
// }

// const p = document.getElementById('P')
// p.style.color = "green"
// p.style.width = "100%"
// p.style.fontSize = "60px"
// p.style.height = "450px"
// p.style.fontWeight = "bold"


// const div = document.createElement('div')
// div.style.width = "50%"
// div.style.height = "200px"
// div.style.border = "2px solid black"

// div.appendChild(para)

// let mainDiv = document.getElementById('main');
// mainDiv.style.backgroundColor = "green"


const navbar = document.createElement('nav')
navbar.style.width = "100%"
navbar.style.height = "100px"
// navbar.style.backgroundColor = "black"
navbar.style.border = "2px solid yellow"
navbar.style.display = "flex";
navbar.style.alignItems = "center";
navbar.style.justifyContent = "space-evenly";
navbar.setAttribute('class','navbar')

document.body.appendChild(navbar)

const heading = document.createElement('h1');
heading.innerHTML = "Nav Bar";
heading.style.color = "white";
heading.setAttribute('class','heading')


const home = document.createElement('a');
home.innerText = "Home";
home.style.color = "white";
home.setAttribute('class','home')

const about = document.createElement('a');
about.innerText = "About";
about.style.color = "white";
about.setAttribute('class','about')

const contact = document.createElement('a');
contact.innerText = "Contact";
contact.style.color = "white";
contact.setAttribute('class','contact')

navbar.appendChild(heading);
navbar.appendChild(home);
navbar.appendChild(about);
navbar.appendChild(contact);

document.body.appendChild(navbar);
