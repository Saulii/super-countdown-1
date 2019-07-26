
function getDateFormatted() {
    let date = new Date();
    let hours = addZeroes(date.getHours());
    let mins = addZeroes(date.getMinutes());
    let secs = addZeroes(date.getSeconds());
    return `${hours} : ${mins} : ${secs}`;
}

function addZeroes(value) {
    return (value < 10 ? '0' + value : value).toString();
}

function render(state) {
    const container = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = state;
    span.classList.add('count');
    document.body.innerHTML = ''; // clear body
    document.body.appendChild(container); // render main element
    container.appendChild(span); // render child element of div
}

function handler() {
    let state = getDateFormatted();
    render(state);
}

//first case with SetTimeout

let seconds = 0;

function update() {
    if(seconds >= 60) {
        return;
    }
    seconds++;
    handler();
    setTimeout(update, 1000);
}

update();

//Second case with SetInterval

/*let timerId = setInterval(() => {
    handler();
    seconds ++;
    if (seconds >=60) {
        clearInterval(timerId);
    }
}, 1000);*/




