document.getElementById('resume-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

   const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('contact') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    const userElement = document.getElementById('username') as HTMLInputElement;


  if (userElement && profilePictureElement && nameElement && emailElement && phoneElement && skillsElement && educationElement && experienceElement ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = phoneElement.value;
    const skills = skillsElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
// unique path 
    const username = userElement.value;
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

// profile picture
   const profilePictureFile = profilePictureElement.files?.[0]
   const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


    const resumeOutput = `
      <h2>Generated Resume</h2>
      ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-Picture">` : ""}
      <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
      <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email} </span></p>
      <p><strong>Contact:</strong><span id="edit-phone" class="editable"> ${contact}  </span></p>

      <h3>Skills</h3>
      <p><span id="edit-skills" class="editable"> ${skills} </span></p>

      <h3>Education</h3>
      <p><span id="edit-resume" class="editable"> ${education} </span></p>

      <h3>Work Experience</h3>
      <p> <span id="edit-resume" class="editable"> ${experience} </span></p>
    `;


    const downloadLink = document.createElement('a');
    downloadLink.href = `data:text/html;charset=utf-8` + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = ('Download your resume');

    const resumeOutputElement = document.getElementById('resume-output');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      resumeOutputElement.classList.remove('hidden')
      makeEditable()

    const btnContainer = document.createElement("div");
    btnContainer.id = "btn-container";
    resumeOutputElement.appendChild(btnContainer)

    // PDF link Button
    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download as PDF";
    downloadBtn.addEventListener("click" , () =>{
      window.print()
    });
    btnContainer.appendChild(downloadBtn)


    // link button
      const linkBtn = document.createElement('button');
      linkBtn.textContent = "Copy link";
      linkBtn.addEventListener('click' , async() =>{
        try {
          const shareLink = `https://yourdomain.com/resumes/${name.replace(
          /\s+/g,"_")}_cv.html`

          await navigator.clipboard.writeText(shareLink)
        } 
        catch (err){
          console.error("Link is not copied: " , err)
          alert('Link is not copied please try again later')
        }
      });
      btnContainer.appendChild(linkBtn);
    } 
  } else {
    console.log('One or more inputs are missing');
  }
  // function for edit resume
    function makeEditable(){
      const editableElement = document.querySelectorAll('.editable');
      editableElement.forEach(element => {
        element.addEventListener('click' , function(){
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";



          if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
            const input = document.createElement('input');
            input.type = "text";
            input.value = currentValue;
            input.classList.add('editing-input')

         input.addEventListener('blur' , function(){
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove()
         })

            currentElement.style.display = "none";
            currentElement.parentNode?.insertBefore(input , currentElement)
            input.focus()
          }
        })
      })
    }






});

      