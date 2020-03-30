function setButton(buttonText) {
    const setText = document.querySelector('body');
    setText.innerHTML = `<button>${buttonText}</button>`;
    // console.log(setText)
};

setButton('button text');

export { setButton };