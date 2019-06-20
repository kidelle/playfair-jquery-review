console.log('Good Morning');

const playfair = ['Molly', 'Mark', 'Sean', 'Tim',
'David', 'Sam', 'Danielle', 'Kyle', 'Blake',
'Mitch', 'Jake']


$(document).ready(onReady);
// When th DOM is ready (i.e. when the page loads),
// we will render (or display) our students
function onReady() {
renderStudentList (playfair);

// Need to select something already on the DOM
// Can filter the event of something new (dynamically genterated)
// do this with the 2nd argument to 'on' function ('.student)
$('#students').on('click', '.student', showAwesomeAlert);
}

// This function will be called when we click on a student
// It will show an alert saying that student is awesomee!!!
function showAwesomeAlert(event) {
    console.log('event', event);


// In the event handler 'this' is what generated the event
    //console.log('This', this);
let studentName = $(this).text();   
    alert(`${studentName} ia awesome!`);
}

// This function will take in array of students,
// loop thru our students & display them on the DOM
function renderStudentList(studentList) {
    for (student of studentList){
        renderStudent (student);
    }
}

// This function will take in a single student,
// and append it to the '#student' id on the HTML page./

 function renderStudent(student) {
    $('#students').append(`<li class="student">${student}</li>`);
}