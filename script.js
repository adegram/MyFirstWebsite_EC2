document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myParagraph = document.getElementById('myParagraph');

    myButton.addEventListener('click', function() {
        myParagraph.textContent = 'The text has been successfully changed by JavaScript!';
    });
});