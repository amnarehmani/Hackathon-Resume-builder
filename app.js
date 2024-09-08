var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('contact');
    var skillsElement = document.getElementById('skills');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var userElement = document.getElementById('username');
    if (userElement && profilePictureElement && nameElement && emailElement && phoneElement && skillsElement && educationElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = phoneElement.value;
        var skills = skillsElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var username = userElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n      <h2>Generated Resume</h2>\n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-Picture\">") : "", "\n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n      <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n      <p><strong>Contact:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(contact, "  </span></p>\n\n      <h3>Skills</h3>\n      <p><span id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </span></p>\n\n      <h3>Education</h3>\n      <p><span id=\"edit-resume\" class=\"editable\"> ").concat(education, " </span></p>\n\n      <h3>Work Experience</h3>\n      <p> <span id=\"edit-resume\" class=\"editable\"> ").concat(experience, " </span></p>\n    ");
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8" + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = ('Download your resume');
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
            resumeOutputElement.appendChild(downloadLink);
        }
    }
    else {
        console.log('One or more inputs are missing');
    }
    function makeEditable() {
        var editableElement = document.querySelectorAll('.editable');
        editableElement.forEach(function (element) {
            element.addEventListener('click', function () {
                var _a;
                var currentElement = element;
                var currentValue = currentElement.textContent || "";
                if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                    var input_1 = document.createElement('input');
                    input_1.type = "text";
                    input_1.value = currentValue;
                    input_1.classList.add('editing-input');
                    input_1.addEventListener('blur', function () {
                        currentElement.textContent = input_1.value;
                        currentElement.style.display = "inline";
                        input_1.remove();
                    });
                    currentElement.style.display = "none";
                    (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                    input_1.focus();
                }
            });
        });
    }
});
