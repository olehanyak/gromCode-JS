
// =========================================================================

const submitBtn = document.querySelector('.submit-button');
const getFormData = document.querySelector('.login-form');
const errorText = document.querySelector('.error-text');

console.log(errorText)
console.log(getFormData)

const userUrl = 'https://5e9e6e6ffb467500166c3f84.mockapi.io/api/v1/users';


const changeStatusBtn = () => {
    if (getFormData.reportValidity()) {
        submitBtn.disabled = false;
    }
};

// console.log(changeStatusBtn())

getFormData.addEventListener('input', changeStatusBtn);

const onFormSubmit = (e) => {
    e.preventDefault();
    const myFormDataOnPage = [...new FormData(getFormData)]

    createUser(myFormDataOnPage)
        .then(response => response.json())
        .then(addDataUser => {
            alert(JSON.stringify(addDataUser));
            submitBtn.disabled = true;
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
            submitBtn.disabled = true;
        });

        console.log(myFormDataOnPage)
};

const createUser = addDataUser => {
    return fetch(userUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(addDataUser)
    })
};



getFormData.addEventListener('submit', onFormSubmit);


