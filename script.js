var arr = [];

function openWindow() {
    var storage = JSON.parse(localStorage.getItem("tasks"));
    if(storage.length > 0){
        tasks = storage;
        
    }
    for(var i = 0; i < storage.length; i++){
        var cards = document.getElementById("noteFrame2");
        var notes = document.createElement("div");
        notes.className = "note";
        notes.innerHTML = '<i class="fas fa-times"></i>' + "<div class='text-note'>" + storage[i].toDo + "</div>" + "<div class='date-note'>" + 
        storage[i].date + " </div>" + "<div class='time-note'>" + storage[i].time + "</div>";
        cards.append(notes);
        notes.onclick = closeNote;
    }
}
    openWindow();

function createTask(toDo, date, time, counter) {
    var obj = {
        toDo: toDo,
        date: date,
        time: time,
        counter: counter
    }
    return obj;
}

function add(){
    var toDo = document.forms["firstInput"]["first"].value;
    var date = document.forms["firstInput"]["second"].value;
    var time = document.forms["firstInput"]["third"].value;
    var counter = 0;
    if(chack(toDo, date) == true){
        counter++;
        document.getElementById("errorMsg").innerHTML = "";
        arr.push(createTask(toDo, date, time, counter));
        localStorage.setItem("tasks", JSON.stringify(arr));
        var taskindex = arr.length -1;
        var cards = document.getElementById("noteFrame2");
        var notes = document.createElement("div");
        notes.className = "note";
        notes.innerHTML = '<i class="fas fa-times"></i>' + "<div class='text-note'>" + toDo + "</div>" + "<div class='date-note'>" + 
        date + " </div>" + "<div class='time-note'>" + time + "</div>";
        cards.append(notes);
    }
    document.forms["firstInput"]["first"].value= "";
    document.forms["firstInput"]["second"].value= "";
    document.forms["firstInput"]["third"].value= "";
    notes.onclick = closeNote;
   
}
function chack(toDo,date){
    if(toDo == ""){
        document.getElementById("errorMsg").innerHTML = "Task required";
        return false;
    }
    else if(date == ""){
        document.getElementById("errorMsg").innerHTML = "Date required";
        return false;
    }
    else{
        return true;
    }
}

function closeNote() {
    this.parentElement.removeChild(this);
    arr.splice(arr.counter, 1);
    localStorage.setItem("tasks", JSON.stringify(arr));
   
}

function clearForms (){
    document.forms["firstInput"]["first"].value= "";
    document.forms["firstInput"]["second"].value= "";
    document.forms["firstInput"]["third"].value= "";
    document.getElementById("errorMsg").innerHTML = "";
}
