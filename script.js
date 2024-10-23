// Get reference to the form and display area
var form = document.getElementById( 'resume-form');
var resumeDisplay = document.getElemmentbyId('resume-display');
//Handle form submission
form.addEventListener('submit', function event) {
    Event.preventDefault(); //prevent pge reload
    //collect input values
    var name = document.getElementById('name'),value;
    var email = document.getElementById('email')value;
    var phone = document.getElementById('phone')value;
    var education = document.getElementById('education')value;
    var experience = document.getElementById('experience')value;
    var skills = document.getElementById('skills')value;

    // Generate the resume content dynmically
    const resumehtml =
     <h2> <b> Resume </b>  </h2>
     //Display the generated resume
     if (resumeDisplayElement) {
        resumeDisplayElement.InnerHTml = resumeHTml;
     } 
     else {
        console.error('The resume display element is missing.');
     }
}