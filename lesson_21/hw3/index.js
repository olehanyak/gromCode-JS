function getTitle() {
    return document.querySelector('.title').textContent;
    // console.log(getContent.textContent);
};

// getTitle();

function getDescription() {
    return document.querySelector('.about').innerText;
    // console.log(getContent.innerText);
};

// getDescription();

function getPlans() {
    return document.querySelector('.plans').innerHTML;
    // console.log(getContent.innerHTML);
};

// getPlans();

function getGoal() {
    return document.querySelector('.goal').outerHTML;
    // console.log(getContent.outerHTML);
};

// getGoal();

export { getTitle, getDescription, getPlans, getGoal };