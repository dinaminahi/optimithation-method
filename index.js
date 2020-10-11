const parts = 19;
let interval = [2, 3];
let dots = [];
let functionVal = [];
let point;
const wrapper = document.getElementById('iterations');
let iteration = 1;
while (interval[1] - interval[0] >= 0.001 || calcFn(interval[1]) - calcFn(interval[0]) >= 0.001) {
    defineDots(interval, parts)
    defineFnVal(dots);
    point = findMin(functionVal);

    let iterationNode = document.createElement('div');
    let curIteration = document.createElement('h3');
    curIteration.innerText = `Iteration ${iteration}`;
    let curInterval = document.createElement('h4');
    curInterval.innerText = `Current interval:  [${interval}]`;
    let curPoint = document.createElement('h4');
    curPoint.innerText = `Current point:   [${point}]`;

    iterationNode.appendChild(curIteration);
    iterationNode.appendChild(curInterval);
    iterationNode.appendChild(curPoint);

    wrapper.appendChild(iterationNode);

    changeInterval();
    iteration++;
}


function defineDots(interval, n) {
    for (let i = 1; i <= n; i++) {
        const x = interval[0] + (i * ((interval[1] - interval[0]) / (n + 1)));
        dots.push(x);
    }
}

function defineFnVal(values) {
    for (let i = 0; i < values.length; i++) {
        functionVal.push(calcFn(values[i]));
    }
}

function calcFn(x) {
    let val = (5 * x) + (Math.pow(x, 2)) - (0.25 * Math.pow(x, 4));
    return val;
}

function findMin(functionVal) {
    let minY = Math.max(...functionVal);
    let minX = dots[functionVal.findIndex(el => el === minY)];
    return [minX, minY];
}

function changeInterval() {
    interval = [dots[dots.findIndex(el => el === point[0]) - 1], dots[dots.findIndex(el => el === point[0]) + 1]];
    dots = [];
    functionVal = [];
}


