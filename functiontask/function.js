

let cars=[];

function addcars(){
    let name=prompt("Enter car name to add");
    let model=prompt("Enter car model ");

    cars.push({name,model})
}
function displaycars(){
    if(cars.length===0){
        alert("No car in the showroom");
    }
    else{
        let carlist=cars.map(car=> car.name).join("\n");
        alert("Car \n"+ carlist);
    }
}

function searchcars(){
    let name=prompt("Enter Search Car Name");
    let car=cars.find(c=> c.name===name);

    if(car){
        alert(`Your Car : ${car.name}\n Model : ${car.model}`);
    }
    else{
    
        alert("Soryy car is not found ");
    }
}

function deletecar(){

let name =prompt("Enter the Remove the car name");
let index=cars.findIndex(c=> c.name===name)

if(index!==-1){
    cars.splice(index,1);
    alert("Car is Remove ");
}
else{
    alert("Car is not found");
}
}


let choice

do {
    choice=prompt("BRIGITA CAR SHOWROOM \n\n 1 : Add Car\n 2 : Display Cars\n 3 : Search Car\n 4 : Delete Car \n 0 : Close  ");

    if(choice==="1")addcars();
    else if(choice==="2")displaycars();
    else if(choice==="3") searchcars();
    else if(choice==="4") deletecar()  ; 
    
} while (choice!==0);
alert("Thanks Visit again");
