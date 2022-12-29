
const GPA_DISPLAY = document.getElementById("gpa-display");
const display = document.getElementById("calculator-display");
const user_choice = document.getElementById("input");
const calculate_btn = document.getElementById("calculate_btn");

let box = document.createElement("form");
box.className = "gpa-box";
box.onsubmit =()=>{return false};
let counter = 0;



function createInstance(){
    box.innerHTML = "";
    for(let i = 0; i < user_choice.value; i++){
        counter++;
        box.innerHTML +=  
        `<input class="select course" type="text" placeholder="Code" id="courseRow${counter}" required="true">
        
        <input class="select units" type="number" placeholder="Units" id="unitRow${counter}" required="true">
            
        <select class="select grades" name="grade" id="gradeRow${counter}" required="true">
            <option value="">grade</option>
            <option value="5">A</option>
            <option value="4">B</option>
            <option value="3">C</option>
            <option value="2">D</option>
            <option value="1">E</option>
            <option value="0">F</option>
        </select>
        <br/> 
        <div class="divider"></div>
        `;
    }
    box.innerHTML += `<input type="submit" value="submit" id= "submit" class="chi-btn" onclick="getGPA()">`;
    display.appendChild(box);
};

createInstance();

input.onchange =()=>{
    createInstance();
    if(input.value < 3){input.value = 3};
    console.log(input.value);
    for(let i = 0; i < unit.length; i++){
     //check if theres any input left empty....
     if(unit[i].value != "" && unit[i].value != null && unit[i].value != " "){ 
        calculate_btn.onclick =()=>{getGPA()}
        calculate_btn.style.background = "red";
    };
}
   }
    

let multiplex, Toptal, totalMultiplex, userUnits, userGrades;
const unit = document.getElementsByClassName("units");
const grades = document.getElementsByClassName("grades");
const courses = document.getElementsByClassName("course");

function getGPA(){

    //initially set all arrays empty to avoid auto caching giving wrong values...
    userUnits = [];
    userGrades = [];
    multiplex = [];

   



    //loop through all input rows and perform calculations...........
for(let i = 0; i < unit.length; i++){
    
    //form should ot be submittd while an input is left empty
if(unit[i].value > 0 && grades[i].value != 0 && courses[i].value != ""){
    userUnits.push(parseInt(unit[i].value));
    userGrades.push(parseInt(grades[i].value));
    Toptal = userUnits[i] * userGrades[i];
    // const sumOfUnits = userUnits.reduce((a,b) => a + b, 0);
    const sumOfGrades = userGrades.reduce((a,b) => a + b, 0);
    multiplex.push(Toptal);
    totalMultiplex = multiplex.reduce((a,b) => a + b, 0)
    console.log(totalMultiplex);


    //error logging to monitor the system via console.......
    console.log("the units array: " + userUnits);
    console.log("the grades array: " + userGrades);
    console.log("GPA: " + totalMultiplex/userUnits.reduce((a,b) => a + b, 0))
    GPA_DISPLAY.innerHTML = totalMultiplex/userUnits.reduce((a,b) => a + b, 0);
    GPA_DISPLAY.innerHTML = parseFloat(GPA_DISPLAY.innerHTML.slice(0,4)).toFixed(2);
}
}
}

//this function is still under test and would be worked on consequently XD
//DELETING FUNTIONS>........
    //initiate delete ability for each new row created by user...

    // for(let i = 0; i < cascade.length; i++){
    //     cascade[i].onclick =()=>{
    //             newRow[i].remove();
    //             console.log(i + " has been removed!");
    //             userUnits.splice(document.getElementById(`unitRow${cascade[i]}`), 1);
    //             console.log("remaining items in units array are: " + userUnits);
    //         }
    //     }