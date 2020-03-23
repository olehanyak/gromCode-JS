const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    start: 0,
    startTimer() {
        // console.log(setInterval(this.secondsPassed, 5000));
        // alert(setInterval(this.secondsPassed === 5000));

        this.start = setInterval(() => {
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },

    getTime() {
        // console.log(`${this.minsPassed}:${this.secondsPassed}`);
        
        return `${this.minsPassed}:0${this.secondsPassed}`;
    },

    stopTimer() {
        setInterval(this.start);
        // console.log(setInterval(this.start))
    },

    resetTime() {
        this.secondsPassed === 0;
        this.minsPassed === 0;
    },

    // if (setInterval(this.secondsPassed === 5000)) {
    //     this.secondsPassed += 5;
    // }
};

// timer.resetTime();

export {
    timer
};


// let i = 0;

// let id = setInterval(function() {
// 	i++;

// 	if (i == 10) {
// 		clearInterval(id);
// 	} else {
// 		console.log(i);
// 	}
// }, 1000);

// console.log(id)