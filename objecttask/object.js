const StudentManager = {

student :[],

manageStudent(){
    let choice;

    do {
        choice=prompt("Choose option \n 1 : Add Name and Email \n 2 : remove name and Email \n 3 : Display list \n 0 : Quit");


        if( choice==="1"){

            const name =prompt("Enter your name");
            const email=prompt("Enter your Email");

            const student = {
                name,
                email
            }

            this.student.push(student);

        }
        else if (choice==="2"){
            const name=prompt("Enter your remove Name");
            const email=prompt("Enter your remove Email ");

            const index= this.student.findIndex(student => student.name ===name && student.email===email);

            if(index!== -1){
                this.student.splice(index,1);
            }
            else{
                console.log("no found student");

            }

        }
        else if(choice==="3"){
            
            if(this.student.length==0){
                console.log("list is emply");

            }
            else{
                this.student.forEach((student,i)=>{
                    console.log(`${i+1}. Name ${student.name}, ${student.email}`);
                });
            }
        }

        else if(choice!=="0"){
            console.log("option is wrong");
        }











        
    } while (choice!=="0");
        console.log("good bye ")
    
}



}
StudentManager.manageStudent();