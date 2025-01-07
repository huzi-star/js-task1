import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

function App(){

  return(
    <div className='container'>
    <Header/>
    <SearchPizza/>
   <Menu/>
   <Footer />
 
    
 </div>
  )
}

function Header(){
 
  return <div className='header'>
     <h1>Brigita Hotel</h1>
  </div>
  }
  
 
    function Menu(){
      return <div className='menu'>
      <h2>Our Menu</h2>
      
      <main>
      
      
        <Pizza name='Pizza Spinaci' 
      ingredients='Tomato,mozrella,spainach ' 
      Photoname='pizza/breakfast2.jpg' 
      price={10}  />
  
      <Pizza name='Paratha funghi '
       ingredients='Tomato,mozrella,masroom ' 
       Photoname='pizza/dinner1.jpg' 
       price={12}/>
  
      <Pizza name='chicken Malai '
       ingredients='Tomato,mozrella,cream '
        Photoname='pizza/dinner2.jpg' price={15}/>
  
      <Pizza name='Chicken Boti '
       ingredients='Tomato,mozrella,kabab '
        Photoname='pizza/dinner3.jpg'
         price={17}/>
  
      <Pizza name='Samosa chai ' 
      ingredients=  ' Potato ,mozrella ,milk'
       Photoname='pizza/lunch3.jpg' price={10}/>
  
      <Pizza name='Pizza allu '
       ingredients='Tomato,mozrella,masroom '
        Photoname='pizza/dinner1.jpg'
         price={14}/>
         

      
         </main>
     </div>
    }
    function Footer(){ 
      function returntime()
      {
        const hrs= new Date().getHours();
        const openhrs= 8;
        const closehrs= 14;
        
        
        let open=hrs>=openhrs  && hrs<=closehrs;
         return open ? " Currently Open":"Close";
      }
        
      return <footer>{new Date().toLocaleTimeString()}. <span style={{fontStyle:"italic"}}>  {returntime()}</span> </footer>
    }

  function Pizza(props){
    return (
    <div className='pizza'>
      <img src={props.Photoname} alt={props.name}></img>
      <div className='item'>
  
        <h3>{props.name}</h3>
       <p>{props.ingredients}</p><br></br>
        <h4>{props.price}</h4>
        </div>
    </div>)
  }


  
function SearchPizza(){

  function searchPizza(){

      const pizzas=[
          {Photoname:'pizza/breakfast2.jpg', name:'Pizza Spinaci',ingredients:'Tomato,mozrella,spainach', Price: 10 },
          { Photoname:'pizza/breakfast3.jpg' , name: 'Paratha Funghi', ingredients: 'Tomato, mozrella, mushroom', price: 12 },
           {Photoname:'pizza/dinner1.jpg' ,name: 'Chicken Malai', ingredients: 'Tomato, mozrella, cream', price: 15 },
           { Photoname:'pizza/dinner2.jpg ',name: 'Chicken Boti', ingredients: 'Tomato, mozrella, kebab', price: 17 },
          { Photoname:'pizza/lunch3.jpg' ,name: 'Samosa Chai', ingredients: 'Potato, mozrella, milk', price: 10 },
          { Photoname:'pizza/dinner3.jpg' ,name: 'Pizza allu', ingredients: 'Potato, mozrella, milk', price: 14 }
      ];

      const myInput=document.getElementById('inputValue').value.toLowerCase();
      const result= pizzas.find((pizza)=>pizza.name.toLowerCase()===myInput);

      const resultDiv=document.getElementById('result-div');

      if(result){
          resultDiv.innerHTML=`
          <img src="${result.Photoname}" alt="${result.name}" style="width:760px; height:auto; border-radius:50%; border:5px solid white" >
          <h3 style="font-size:30px;  color:rgb(189, 123, 0);">${result.name}</h3 >
          <p> Ingredient : ${result.ingredients}</p>
          <p> Price :${result.price}</p>`
      }
      else{
          resultDiv.innerHTML=`<p> Sorry Pizza not Found</p>`
      }
  }
  return (
      <div className='pizza-search'>

          {/* <label>Search Pizza </label> */}
          <input type="text" id="inputValue" placeholder="Enter Pizza "></input>
          <button onClick={searchPizza}>Search</button>
          <div id="result-div" style={{color:'white'}}></div>

      </div>
  )
}

  





























  

  // / if(hrs >=openhrs && hrs<=closehrs){
  //   //   return "open";
  //   // }
  //   // else{
  //   //   return "close";
  //   // }



 

