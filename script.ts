const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skill = (document.getElementById('skill') as HTMLTextAreaElement).value;

    // Generate the resume HTML
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span> </p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p><span contenteditable="true">${education}</span></p>

    <h3>Experience</h3>
    <p><span contenteditable="true">${experience}</span></p>

    <h3>Skills</h3>
    <p><span contenteditable="true">${skill}</span></p>
    `;

    // Display the resume content
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});
