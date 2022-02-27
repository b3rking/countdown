// console.log(Math.floor((((((deadline - now) / 1000) / 3600) / 24) / 7) / 4));

// new instance of the date which correspond to the present time
let _now = new Date();
// set a new dead line by changing this line bellow
let _dead_line = new Date("5-30-2022"); // paramenters are (month-day-year)

/**
 *
 * @param {*} now
 * @param {*} dead_line
 * @returns
 */
const validDeadline = (now, dead_line) => {
    if (now < dead_line) {
        return true;
    } else {
        return false;
    }
};

/**
 *
 * @param {*} now
 * @param {*} dead_line
 * @returns
 */
const getSeconds = (now, dead_line) => {
    if (validDeadline(now, dead_line)) {
        return Math.floor((dead_line - now) / 1000);
    } else {
        alert("invalid deadline value");
    }
};

/**
 *
 * @param {*} now
 * @param {*} dead_line
 * @returns
 */
const getMinutes = (now, dead_line) => {
    if (validDeadline(now, dead_line)) {
        return Math.floor((dead_line - now) / 1000 / 60);
    } else {
        alert("invalid deadline value");
    }
};

/**
 *
 * @param {*} now
 * @param {*} dead_line
 * @returns
 */
const getHours = (now, dead_line) => {
    if (validDeadline(now, dead_line)) {
        return Math.floor((dead_line - now) / 1000 / 60 / 3600);
    } else {
        alert("invalid deadline value");
    }
};

/**
 *
 * @param {*} now
 * @param {*} dead_line
 * @returns
 */
const getDays = (now, dead_line) => {
    if (validDeadline(now, dead_line)) {
        return Math.floor((dead_line - now) / 1000 / 60 / 3600 / 24);
    } else {
        alert("invalid deadline value");
    }
};

/**
 * =============================================>
 */
const show_time = () => {
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    setInterval(() => {
        days.textContent = new Date().getDay();
        hours.textContent = new Date().getHours();
        minutes.textContent = new Date().getMinutes();
        seconds.textContent = new Date().getSeconds();
    }, 1000);
};

// run everything

show_time();