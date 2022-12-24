const insertBtn = document.getElementById("addCourse");
const courseRow = document.getElementById("courseRow");
const panel = document.getElementById("key");
const Box = document.getElementById("master-row");

const newRow = document.getElementsByClassName("new-row");
const cascade = document.getElementsByClassName("delete");

const unit = document.getElementsByClassName("units");

const grades = document.getElementsByClassName("grades");

const selector =  document.getElementsByClassName("select");


let counter;

const userUnits = [];
const userGrades = [];

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

    //initiate delete ability for each new row created by user...
    for(let i = 0; i < cascade.length; i++){
    cascade[i].onclick =()=>{
            newRow[i].remove();
            console.log(i + " has been removed!");
        }
    }
    
    //alert user on new row added...
    console.log("new course added!")

counter += 1;

   

}

function getGPA(){
for(let i = 0; i < unit.length; i++){
    userUnits.push(unit[i].value);
    userGrades.push(grades[i].value);
    console.log(userUnits + "<br/>" + userGrades);
    let Toptal = userUnits[i] * userGrades[i];
    
    let result = Toptal/userUnits.reduce((a,b) => a + b, 0);
    
    console.log(result);
    }


}







