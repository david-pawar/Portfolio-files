// Function to simulate typing effect
function typeEffect(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(interval);
        }
    }, speed);
}

// Call the function with the desired element and text
const typedText = document.getElementById('typedText');
typeEffect(typedText, 'Front End Web Developer, Database Administrator, Web Designer and custom web solution developer', 50);
