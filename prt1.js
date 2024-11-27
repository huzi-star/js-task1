// // // // let n = prompt(" enter th num");

// // // // for(let i=1; i<=10;i++){

// // // //     let table = n * i;

// // // //     console.log(table);
// // // // }


// // // // let btn1=document.querySelector("#btn").addEventListener("mouseover" ,()=>{


// // // //     document.querySelector("#btn").style.background="red";
// // // //     document.querySelector("#btn").style.color="white";
// // // //     document.querySelector("#btn").style.width="100px";
// // // //     document.querySelector("#btn").style.height="100px";

    
// // // // // });
// // // // const button = document.createElement('button');

// // // // document.createElement('button').style.width="100px",height="100px",background="red";

// // // // console.log(button)


// // // let Buttons=document.querySelector(".Button");
// // // console.log(Buttons);
// // // let body=document.querySelector("body");




// // <style>
// // body {
// //     font-family: Arial, sans-serif;
// //     margin: 20px;
// // }
// // .form-container {
// //     max-width: 400px;
// //     margin-bottom: 20px;
// // }
// // .user-info {
// //     background-color: #daabab;
// //     padding: 10px;
// //     border: 1px solid #ddd;
// //     margin-top: 10px;
// // }
// // </style>
// // </head>
// // <body>
// // <h1>Job Application Form</h1>
// // <div class="form-container">
// // <form id="jobForm">
// //     <label for="name">Name:</label><br>
// //     <input type="text" id="name" name="name" required><br><br>
// //     <label for="email">Email:</label><br>
// //     <input type="email" id="email" name="email" required><br><br>
// //     <label for="phone">Phone:</label><br>
// //     <input type="text" id="phone" name="phone" required><br><br>
// //     <label for="qualification">Qualification:</label><br>
// //     <input type="text" id="qualification" name="qualification" required><br><br>
// //     <button type="submit">Submit</button>
// // </form>
// // </div>
// // <div id="userList">
// // <!-- User information will display here -->
// // </div>
// // {/* 
// // <script>
// // const userArray = [];
// // const form = document.getElementById('jobForm');
// // const userList = document.getElementById('userList');

// // form.addEventListener('submit', function(event) {
// //     event.preventDefault(); // Prevent page reload

// //     // Get form values
// //     const name = document.getElementById('name').value;
// //     const email = document.getElementById('email').value;
// //     const phone = document.getElementById('phone').value;
// //     const qualification = document.getElementById('qualification').value;

// //     // Store values in an object and push to array
// //     const user = { name, email, phone, qualification };
// //     userArray.push(user);

// //     // Display user info dynamically
// //     displayUsers();
    
// //     // Clear form inputs
// //     form.reset();
// // });

// // function displayUsers() {
// //     userList.innerHTML = ''; // Clear previous entries
// //     userArray.forEach(user => {
// //         const div = document.createElement('div');
// //         div.classList.add('user-info');
// //         div.innerHTML = `
// //             <p><strong>Name:</strong> ${user.name}</p>
// //             <p><strong>Email:</strong> ${user.email}</p>
// //             <p><strong>Phone:</strong> ${user.phone}</p>
// //             <p><strong>Qualification:</strong> ${user.qualification}</p>
// //         `;
// //         userList.appendChild(div);
// //     });
// // }
// // </script>
// //  */}





// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Counter Example</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//       margin-top: 50px;
//     }
//     button {
//       margin: 5px;
//       padding: 10px 20px;
//       font-size: 16px;
//     }
//     .count {
//       font-size: 24px;
//       margin-top: 20px;
//     }
//   </style>
// </head>
// <body>
//   <h1>Counter Application</h1>
//   <button id="increment">Click Me</button>
//   <button id="reset">Reset</button>
//   <div class="count">Count: <span id="counter">0</span></div>

//   <script>
//     let count = 0; // Counter variable

//     // Get DOM elements
//     const counterDisplay = document.getElementById('counter');
//     const incrementButton = document.getElementById('increment');
//     const resetButton = document.getElementById('reset');

//     // Increment counter on button click
//     incrementButton.addEventListener('click', () => {
//       count++;
//       counterDisplay.textContent = count;
//     });

//     // Reset counter on button click
//     resetButton.addEventListener('click', () => {
//       count = 0;
//       counterDisplay.textContent = count;
//     });
//   </script>
// </body>
// </html>

