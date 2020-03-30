function setButton(buttonText) {
    // const setText = document.querySelector('body');
    document.querySelector('body').innerHTML = buttonText;
};

setButton('<button>button text</button>');

export { setButton };