function createButton (buttonText) {
    const createBtn = document.createElement('button');
    createBtn.innerHTML = buttonText;
    document.querySelector('body').append(createBtn);
    // console.log(createBtn)
}

// createButton('Send email');

export { createButton };