const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    starter: 0,
    startTimer() {
        // console.log(setInterval(this.secondsPassed, 5000));
        // alert(setInterval(this.secondsPassed === 5000));

        this.starter = setInterval(() => {
            if (this.secondsPassed === 60) {
                this.secondsPassed = 0;
                this.minsPassed++;
            }
            // console.log(this.secondsPassed)
            // console.log(this.minsPassed)
            this.secondsPassed += 5;
        }, 5000);
    },

    getTime() {

        if (this.secondsPassed >= 10) {
            // console.log(`${this.minsPassed}:${this.secondsPassed}`);
            return `${this.minsPassed}:${this.secondsPassed}`;
        } else {
            // console.log(`${this.minsPassed}:0${this.secondsPassed}`);
            return `${this.minsPassed}:${this.secondsPassed + '0'}`;
        }
    },

    stopTimer() {
        clearInterval(this.starter);
        // console.log(clearInterval(this.startTimer()));
    },

    resetTime() {
        // console.log(this.secondsPassed)
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
};

// timer.startTimer();
// timer.getTime();

export { timer };