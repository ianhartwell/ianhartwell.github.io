// --- DOM Manipulation - Random Number Generator ---

// Random number function
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate number function
function generateNum() {
    let min = document.getElementById('min_value').value;
    let max = document.getElementById('max_value').value;
    
    // Add validation check - check that both values have been provided
    if (min === '' || max === '') {
        document.getElementById('output').innerText = 'Please enter both minimum and maximum values';
        document.getElementById('output').style.color = 'red';
        return;
    }

    // Add vaildation check - check that maximum is bigger than minimum
    if (min >= max) {
        document.getElementById('output').innerText = 'Error: Maximum must be greater than minimum';
        document.getElementById('output').style.color = 'red';
        return;
    }

    // Call random number function and pass in user provided values
    let numOut = randomNum(min, max);
    document.getElementById('output').innerHTML = numOut; // Change the text in the output box to that of the result
    document.getElementById('output').style.color = 'black';
}

// Add event listerner to the generate button
document.getElementById('numGenButton').addEventListener('click', generateNum);

// --- DOM Manipulation - Random Text Generator ---

// Create a pre-defined array of possible sentences
function generateText() {
    const phrases = [
        "The sun is <strong>yellow</strong>",
        "The sky is <strong>blue</strong>",
        "The grass is <strong>green</strong>",
        "The snow is <strong>white</strong>",
        "The water is <strong>clear</strong>"
    ];

    // Generate a random index value up to the length of the array
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById('random-text').innerHTML = phrases[randomIndex];
}

// Add event listener for the generate text button
document.getElementById('textGenButton').addEventListener('click', generateText);

// --- Event Handling - Hover Box ---

// Assign HTML element to a variable
const hoverBox = document.getElementById('hoverBox');


// Add event listeners
if (hoverBox) {
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.classList.add('hover-over');
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.classList.remove('hover-over');
    });
}

// --- Event Handling - Click Box ---

// Create array of possible colors to select
function randomColor() {
    const colors = [
        '#ff0000',
        '#ffa500',
        '#ffff00',
        '#008000',
        '#0000ff',
        '#4b0082',
        '#ee82ee'
    ];

    // Generate a random index value up to the length of the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.getElementById('clickBox').style.backgroundColor = colors[randomIndex];
}

// Add event listener for the color changer 'click me' button
document.getElementById('clickButton').addEventListener('click', randomColor);

// --- Form Interaction - Input Validation ---

// Assign HTML elements to variables
const validationForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const usernameError = document.getElementById('usernameError');

// Validation logic - check that input is greater than 3 characters, remove once true
if (usernameInput && usernameError) {
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            usernameError.style.display = 'inline';
            usernameError.style.color = 'red';
        } else {
            usernameError.style.textContent = '';
            usernameError.style.display = 'none';
        }
    });
    
    // Add event listener for valid / invalid form entry
    if (validationForm) {
        validationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (usernameInput.value.length >= 3) {
                alert('Valid entry! Username ' + usernameInput.value);
            } else {
                alert('Invalid entry!');
            }
        }); 
    }
}

// --- Form Interaction - Dynamic Dropdowns ---

// Assign HTML elements to variables
const continentSelect = document.getElementById('continentSelect');
const countrySelect = document.getElementById('countrySelect');

// Create arrays for each value of the continent dropdown menu
const countriesByContinent = {
    'Africa': ['Algeria', 'Cameroon', 'Egypt', 'Kenya', 'South Africa'],
    'Antarctica': ['Antarctica'],
    'Asia': ['China', 'India', 'Japan', 'Mongolia', 'South Korea'],
    'Europe': ['Finland', 'France', 'Germany', 'Greece', 'United Kingdom'],
    'Oceania': ['Australia', 'Fiji', 'New Zealand', 'Solomon Islands', 'Tonga'],
    'North America': ['Canada', 'United States'],
    'South America': ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Peru']
};

// Logic for updating the coutnry dropdown depending on the selected continent menu item
if (continentSelect && countrySelect) {
    continentSelect.addEventListener('change', () => {
        const selectedContinent = continentSelect.value;
        countrySelect.innerHTML = '<option value="">Select a country</option>'; // Reset country select option

        if (selectedContinent && countriesByContinent[selectedContinent]) {
            countriesByContinent[selectedContinent].forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        }
    });
}

// --- Client-side Data Storage - Dark Mode ---
// Moved to darkmode.js 
