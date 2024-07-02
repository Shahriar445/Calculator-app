document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;

        if (buttonValue === 'C') {
            display.value = '';
        } else if (buttonValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonValue;
        }
    });
});
