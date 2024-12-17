const steps = document.querySelectorAll('.step');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const popup = document.getElementById('popup');

let currentStep = 0;

// Show initial step
steps[currentStep].classList.add('active');

// Update buttons state
function updateButtons() {
  prevButton.disabled = currentStep === 0;
  nextButton.disabled = currentStep === steps.length - 1;
}

// Show the next step
nextButton.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep++;
  steps[currentStep].classList.add('active');
  updateButtons();
});

// Show the previous step
prevButton.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep--;
  steps[currentStep].classList.add('active');
  updateButtons();
});

// Show popup
function showPopup() {
  popup.style.display = 'block';
}

// Close popup
function closePopup() {
  popup.style.display = 'none';
}

updateButtons();
