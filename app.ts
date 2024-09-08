document.getElementById('resume-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('contact') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;

  if (nameElement && emailElement && phoneElement && skillsElement && educationElement && experienceElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = phoneElement.value;
    const skills = skillsElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;

    const resumeOutput = `
      <h2>Generated Resume</h2>
      <p><strong>Name:</strong> ${name} </p>
      <p><strong>Email:</strong> ${email} </p>
      <p><strong>Contact:</strong> ${contact} </p>

      <h3>Skills</h3>
      <p>${skills}</p>

      <h3>Education</h3>
      <p>${education}</p>

      <h3>Work Experience</h3>
      <p>${experience}</p>
    `;

    const resumeOutputElement = document.getElementById('resume-output');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.log('The elements are not filled');
    }
  } else {
    console.log('One or more inputs are missing');
  }
});
