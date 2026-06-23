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


// const navbar = document.createElement('nav')
// navbar.style.width = "100%"
// navbar.style.height = "100px"
// // navbar.style.backgroundColor = "black"
// navbar.style.border = "2px solid yellow"
// navbar.style.display = "flex";
// navbar.style.alignItems = "center";
// navbar.style.justifyContent = "space-evenly";
// navbar.setAttribute('class','navbar')

// document.body.appendChild(navbar)

// const heading = document.createElement('h1');
// heading.innerHTML = "Nav Bar";
// heading.style.color = "white";
// heading.setAttribute('class','heading')


// const home = document.createElement('a');
// home.innerText = "Home";
// home.style.color = "white";
// home.setAttribute('class','home')

// const about = document.createElement('a');
// about.innerText = "About";
// about.style.color = "white";
// about.setAttribute('class','about')

// const contact = document.createElement('a');
// contact.innerText = "Contact";
// contact.style.color = "white";
// contact.setAttribute('class','contact')

// navbar.appendChild(heading);
// navbar.appendChild(home);
// navbar.appendChild(about);
// navbar.appendChild(contact);

// document.body.appendChild(navbar);


// const app = document.getElementById("app");

// const formBox = document.createElement("div");
// formBox.className = "form-box";

// const title = document.createElement("h2");
// title.innerText = "Create Account";

// const form = document.createElement("form");

// const fields = [
//   { label: "Full Name", type: "text", placeholder: "Enter your name", id: "name" },
//   { label: "Email", type: "email", placeholder: "Enter your email", id: "email" },
//   { label: "Password", type: "password", placeholder: "Enter password", id: "password" },
//   { label: "Confirm Password", type: "password", placeholder: "Confirm password", id: "confirmPassword" }
// ];

// fields.forEach(function(field) {
//   const inputGroup = document.createElement("div");
//   inputGroup.className = "input-group";

//   const label = document.createElement("label");
//   label.innerText = field.label;

//   const input = document.createElement("input");
//   input.type = field.type;
//   input.placeholder = field.placeholder;
//   input.id = field.id;

//   inputGroup.appendChild(label);
//   inputGroup.appendChild(input);
//   form.appendChild(inputGroup);
// });

// const button = document.createElement("button");
// button.type = "submit";
// button.innerText = "Sign Up";

// const message = document.createElement("p");
// message.className = "message";

// form.appendChild(button);
// form.appendChild(message);

// formBox.appendChild(title);
// formBox.appendChild(form);
// app.appendChild(formBox);

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const confirmPassword = document.getElementById("confirmPassword").value.trim();

//   if (name === "" || email === "" || password === "" || confirmPassword === "") {
//     message.innerText = "Please fill all fields!";
//     message.style.color = "red";
//     return;
//   }

//   if (password.length < 6) {
//     message.innerText = "Password must be at least 6 characters!";
//     message.style.color = "red";
//     return;
//   }

//   if (password !== confirmPassword) {
//     message.innerText = "Passwords do not match!";
//     message.style.color = "red";
//     return;
//   }

//   message.innerText = "Account created successfully!";
//   message.style.color = "green";

//   form.reset();
// });


// const app = document.getElementById("app");

// app.style.width = "50%";
// app.style.height = "500px";
// app.style.backgroundColor = "blue";
// app.style.border = "2px solid gray";
// app.style.display = "flex";
// app.style.flexDirection = "column";
// app.style.justifyContent = "center";
// app.style.alignItems = "center";
// app.style.gap = "15px";

// // Name Label
// const labelName = document.createElement("label");
// labelName.innerText = "Name";
// labelName.style.color = "white";

// const nameInput = document.createElement("input");
// nameInput.type = "text";
// nameInput.placeholder = "Enter Name";
// app.appendChild(labelName);
// app.appendChild(nameInput);

// // Last Name Label
// const labelLast = document.createElement("label");
// labelLast.innerText = "Last Name";
// labelLast.style.color = "white";

// const lastInput = document.createElement("input");
// lastInput.type = "text";
// lastInput.placeholder = "Enter Last Name";

// app.appendChild(labelLast);
// app.appendChild(lastInput);

// // Email Label
// const labelEmail = document.createElement("label");
// labelEmail.innerText = "Email";
// labelEmail.style.color = "white";

// const emailInput = document.createElement("input");
// emailInput.type = "email";
// emailInput.placeholder = "Enter Email";

// app.appendChild(labelEmail);
// app.appendChild(emailInput);

// const button = document.createElement("a")
// button.innerHTML = "Submit";
// button.style.width = "60px";
// button.style.display = "flex";
// button.style.alignItems = "center";
// button.style.justifyContent = "center";
// button.style.border = "3px solid black";
// button.style.color = "black";
// button.style.backgroundColor = "gray";
// button.href = './login.html'
// button.onclick = function() {
//   alert("Button was clicked!");
// };

// app.appendChild(button);

// const input = document.getElementById("taskInput");
// const app = document.getElementById("app");
// const taskList = document.getElementById("taskList");

// app.addEventListener("click", () => {

//     if (input.value === "") {
//         alert("Enter Task!");
//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent = input.value;

//     const deleteapp = document.createElement("button");
//     deleteapp.textContent = "Delete";

//     deleteapp.addEventListener("click", function () {
//         li.remove();
//     });

//     li.appendChild(deleteapp);
//     taskList.appendChild(li);

//     input.value = "";

//     const hi = document.createElement("hi");
//     hi.textContent = input.value;

//     const editeapp = document.createElement("button");
//     editapp.textContent = "Edit";

//     editapp.addEventListener("click", function () {
//         hi.edit();
//     });

//     hi.appendChild(editapp);
//     taskList.appendChild(hi);

// })

// const input = document.getElementById("taskInput");
// const app = document.getElementById("app");
// const taskList = document.getElementById("taskList");

// app.addEventListener("click", () => {
//     if (input.value.trim() === "") {
//         alert("Enter todo");
//         return;
//     }

//     const li = document.createElement("li");

//     // localStorage(JSON.parse("list", "value"))

//     const span = document.createElement("span");
//     span.textContent = input.value;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     deleteBtn.addEventListener("click", function () {
//         li.remove();
//     });

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";

//     editBtn.addEventListener("click", function () {
//         const newTask = prompt("Edit your task:", span.textContent);

//         if (newTask !== null && newTask.trim() !== "") {
//             span.textContent = newTask;
//         }
//     });

//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     li.appendChild(editBtn);

//     taskList.appendChild(li);





//     input.value = "";
// });


Student.prototype.module = function (message) {
    console.log("this module is 3")
}

function Student(name, age, module) {
    this.name = name;
    this.age = age
    // this.module = module
}

const student1 = new Student("ali", 20, "module 3")

console.log(student1)

