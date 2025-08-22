/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/


// Step 1: Select the theme button
letthemeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    // This section will run whenever the button is clicked
}


// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  Purpose:
  - When the user submits the form, the name and state they
    entered should be added to the list of participants.
***/

let count = 3;
// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById('rsvp-button');

const addParticipant = (event) => {
  // Step 2: Write your code to manipulate the DOM here



  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert('Please enter both name and email.');
    return;
  }

  // Step 3.2: Create a new <p> element
  const participantInfo = document.createElement('p');

  // Step 3.3: Set the <p> text content
  participantInfo.textContent = `Name: ${name}, Email: ${email}`;
  

  // Step 3.4: Find the rsvp-participants div and append the new <p>
  const participantsDiv = document.querySelector('.rsvp-participants');
  participantsDiv.appendChild(participantInfo);

  // Optional: Clear input fields after submission
  nameInput.value = '';
  emailInput.value = '';
  const oldCountElement = document.getElementById('rsvp-count');
  if (oldCountElement) {
    oldCountElement.remove(); // Remove the old count element
  }

  count = count + 1; // Increment the counter

  // Create and insert the new count element
  const newCountElement = document.createElement('p');
  newCountElement.id = 'rsvp-count';
  newCountElement.textContent = `⭐ ${count} people have subscribed to this newsletter!`;

  participantsDiv.appendChild(newCountElement); // Append to the bottom
  document.getElementById('rsvp-form').reset();

 
  
}


// Step 3: Add a click event listener to the submit RSVP button here
document.addEventListener('DOMContentLoaded', function () {
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', addParticipant);
  }
});
/*** Form Handling [PLACEHOLDER] ***/
/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/
