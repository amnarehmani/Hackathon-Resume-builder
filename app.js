var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('contact');
    var skillsElement = document.getElementById('skills');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    if (nameElement && emailElement && phoneElement && skillsElement && educationElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = phoneElement.value;
        var skills = skillsElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var resumeOutput = "\n      <h2>Generated Resume</h2>\n      <p><strong>Name:</strong> ".concat(name_1, " </p>\n      <p><strong>Email:</strong> ").concat(email, " </p>\n      <p><strong>Contact:</strong> ").concat(contact, " </p>\n\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n\n      <h3>Work Experience</h3>\n      <p>").concat(experience, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.log('The elements are not filled');
        }
    }
    else {
        console.log('One or more inputs are missing');
    }
});
