function editField(fieldId) {
    const field = document.getElementById(fieldId);
    field.removeAttribute('readonly');
    field.focus();
}

// Function to delete the content of a specific field
function deleteField(fieldId) {
    const field = document.getElementById(fieldId);
    field.value = ''; // Clear the content
    field.focus(); // Optional: focus on the field after clearing
}

// Function to generate resume preview
function generateResume() {
    const name = document.getElementById('name').value.trim();
    const cnic = document.getElementById('cnic').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const education = document.getElementById('education').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();

    if (!name || !cnic || !dob || !email || !education || !experience || !skills) {
        alert('Please fill out all fields before generating the resume.');
        return;
    }

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <h2>Saved Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>CNIC:</strong> ${cnic}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
}

// Function to save resume to local storage
function saveResume() {
    const name = document.getElementById('name').value.trim();
    const cnic = document.getElementById('cnic').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const education = document.getElementById('education').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();

    if (!name || !cnic || !dob || !email || !education || !experience || !skills) {
        alert('Please fill out all fields before saving the resume.');
        return;
    }

    const resumeData = {
        name,
        cnic,
        dob,
        email,
        education,
        experience,
        skills
    };

    try {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        alert('Resume saved!');
        generateResume(); // Update resume preview after saving
    } catch (e) {
        console.error('Error saving to local storage:', e);
        alert('Failed to save resume. Please try again.');
    }
}

// Function to load saved resume on page load
window.onload = function() {
    try {
        const savedResume = localStorage.getItem('resumeData');
        if (savedResume) {
            const resumeData = JSON.parse(savedResume);
            document.getElementById('name').value = resumeData.name || '';
            document.getElementById('cnic').value = resumeData.cnic || '';
            document.getElementById('dob').value = resumeData.dob || '';
            document.getElementById('email').value = resumeData.email || '';
            document.getElementById('education').value = resumeData.education || '';
            document.getElementById('experience').value = resumeData.experience || '';
            document.getElementById('skills').value = resumeData.skills || '';
            generateResume(); // Generate resume preview if data is found
        }
    } catch (e) {
        console.error('Error loading from local storage:', e);
    }
};

// Function to make all fields editable
function editAllFields() {
    document.querySelectorAll('#resumeForm input, #resumeForm textarea').forEach(field => {
        field.removeAttribute('readonly');
        field.focus();
    });
}

// Function to enable editing of all fields
function enableEditing() {
    document.querySelectorAll('#resumeForm input, #resumeForm textarea').forEach(field => {
        field.removeAttribute('readonly');
        field.focus();
    });
}
// Function to clear all fields in the form without affecting local storage
function clearFormFields() {
    document.querySelectorAll('#resumeForm input, #resumeForm textarea').forEach(field => {
        field.value = ''; // Clear the content
    });
    document.getElementById('resumePreview').innerHTML = ''; // Clear the resume preview
    document.getElementById('name').focus(); // Optional: Focus on the first field
}