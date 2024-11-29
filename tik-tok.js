

let boxes=document.querySelectorAll('.Box');
let resetbtn=document.getElementById('reset-btn');
let newbtn=document.getElementById('new-btn');
let maincontainer=document.querySelector('.main-container');
let msg=document.getElementById('msg')

let turn0=true;
const winPattarn=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

boxes.forEach((box) =>{

    box.addEventListener('click',()=>{
       

        
      if(turn0){
        box.innerText="O";
        turn0=false;
        
      }
      else{
        box.innerText="X";
        turn0=true;
      }
      
      box.disabled= true;
      
     
      checkWinner();
      
    });

});

const checkWinner=()=>{

    for (let pattern of winPattarn ) {
      

    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!=""&& pos3!="")
        if(pos1===pos2 && pos2===pos3){
          console.log(`winner ${pos1}`)
            showwinner(pos1);
        }
    }

}

const showwinner=( winner)=>{

    msg.innerText=`Congratulation ${winner} `;
    maincontainer.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes=()=>{

  for (const Box of boxes) {

    Box.disabled=true
    
  }
}

const enabledBoxes=()=>{

  for (const Box of boxes) {

    Box.disabled=false;
    Box.innerText="";
    
  }
}

 const resetGame= ()=>{
  turn0=true;
  enabledBoxes();
  maincontainer.classList.add('hide');
}


resetbtn.addEventListener('click',()=>{
  resetGame();
});

newbtn.addEventListener('click',()=>{
  resetGame();
})
