function manageClasses() {
    const addClassOne = document.querySelector('.one');
    addClassOne.classList.add('selected');
    // console.log(addClassOne)

    const deleteClassTwo = document.querySelector('.two');
    deleteClassTwo.classList.remove('selected');
    // console.log(deleteClassTwo)

    const toggleClass = document.querySelector('.three');
    toggleClass.classList.toggle('three_done');
    // console.log(toggleClass)

    const addClassFour = document.querySelector('.some-class');
    if (addClassFour) {
        addClassFour.classList.add('another-class');
        // console.log(addClassFour)
    }
};

// manageClasses();

export { manageClasses };