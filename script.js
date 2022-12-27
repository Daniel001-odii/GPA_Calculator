const insertBtn = document.getElementById("addCourse");
const courseRow = document.getElementById("courseRow");
const panel = document.getElementById("key");
const Box = document.getElementById("master-row");

const newRow = document.getElementsByClassName("new-row");
const cascade = document.getElementsByClassName("delete");

const unit = document.getElementsByClassName("units");

const grades = document.getElementsByClassName("grades");

const selector =  document.getElementsByClassName("select");
const display = document.getElementById("display");

let counter;

let userUnits = [];
let userGrades = [];

let i = 0;

let keyPoints = {"A":5, "B":4, "C":3, "D":2, "E":1, "F":0};


counter = 0;

insertBtn.onclick =()=>{
      // panel.innerHTML += Box.innerHTML;


    let box = document.createElement("div");
    box.innerHTML =  `
            <div class="new-row block" id="courseRow">
            <input class="select course" type="text" placeholder="Course" id="courseRow${counter}">
            
            <input class="select units" type="number" placeholder="units" id="unitRow${counter}">
                
            <select class="select grades" name="grade" id="gradeRow${counter}">
                <option value="">grade</option>
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
                <option value="0">F</option>
            </select>

            <div class="remover"><i class="bi bi-trash-fill delete"></i></div>
            </div>
    `;
    panel.appendChild(box);
    //initiate counter to control arrays...
    

 
  
  
    
//log the number of grade rows inserted by the user on the console.....
    for(let i = 0; i < grades.length; i++){
    console.log(grades.length);
    }

//automatically set an indexed unit load for each new row of record...
    for(let i = 0; i < unit.length; i++){
       // unit[i].setAttribute("id", `unitLoad${counter++}`);
        unit[i].onchange =()=>{
            // console.log("value for a row has changed");
            // console.log("value for row " + document.getElementById(`unitLoad${i}`).value + " has changed!")
        }
    }

    //DELETING FUNTIONS>........
    //initiate delete ability for each new row created by user...
    for(let i = 0; i < cascade.length; i++){
    cascade[i].onclick =()=>{
            newRow[i].remove();
            console.log(i + " has been removed!");
            userUnits.splice(document.getElementById(`unitRow${cascade[i]}`), 1);
            console.log("remaining items in units array are: " + userUnits);
        }
    }
    
    //alert user on new row added...
    console.log("new course added!")

counter += 1;

}


const multiplex = []
let Toptal, totalMultiplex;

function getGPA(){
    
for(let i = 0; i < unit.length; i++){

    
    userUnits.push(parseInt(unit[i].value));
    userGrades.push(grades[i].value);
   
    Toptal = userUnits[i] * userGrades[i];


    // const sumOfUnits = userUnits.reduce((a,b) => a + b, 0);
    const sumOfGrades = userGrades.reduce((a,b) => a + b, 0);
    

    multiplex.push(Toptal);

    totalMultiplex = multiplex.reduce((a,b) => a + b, 0)

    console.log(totalMultiplex);
}

console.log("the units array: " + userUnits);
console.log("the grades array: " + userGrades);


console.log("GPA: " + totalMultiplex/userUnits.reduce((a,b) => a + b, 0))
display.innerHTML = totalMultiplex/userUnits.reduce((a,b) => a + b, 0);
display.innerHTML = parseFloat(display.innerHTML.slice(0,4)).toFixed(2);
// if(display.innerHTML.length > 1){display.innerHTML += ".0"};

console.log("modified: " + display.innerHTML.slice(0,4));


/*
userUnits = [];
userGrades = [];
*/
}



for(let i = 0; i < grades.length; i++){
    units[i].value.onchange =()=>{
        console.log("calculae GPA...")
        getGPA();
    }
}





