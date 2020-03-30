function setButton(buttonText) {
    const setText = document.querySelector('body');
    setText.innerHTML = buttonText;
    setText.textContent = buttonText;
    // console.log(buttonText)
    // console.log(setText)
};

// setButton('<button>button text</button>');

export { setButton };