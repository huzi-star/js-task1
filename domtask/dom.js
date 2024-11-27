

const userArray=[];

const form=document.getElementById('jobform');
const userlist=document.getElementById('userlist')

form=addEventListener('submit',function(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const qualification=document.getElementById('qualification').value;
   
    const user={name,email,phone,qualification};
    userArray.push(user);

    displayUsers();

    form.reset();


});

function displayUsers(){

userlist.innerHTML=' ';

userArray.forEach(user =>{

    const div=document.createElement('div');
    div.classList.add('user-info');

    div.innerHTML=`<p><strong>${user.name}</strong></p>
    <p><strong>${user.email}</strong></p>
    <p><strong>${user.phone}</strong></p>
    <p><strong>${user.qualification}</strong></p>`

    userlist.appendChild(div)
});

}