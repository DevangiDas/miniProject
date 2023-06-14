// Get reference to the Save button
const saveBtn = document.querySelector('.save-btn');

// Add a click event listener to the document
document.addEventListener('click', enableSaveButton);

// Function to enable the Save button
function enableSaveButton() {
  saveBtn.disabled = false;
}



