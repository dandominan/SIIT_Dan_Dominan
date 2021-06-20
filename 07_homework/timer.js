var secondsElement = document.getElementById('seconds');
var minutesElement = document.getElementById('minutes');
var hoursElement = document.getElementById('hours');

var hoursCount = 0;
var minutesCount = 0;
var secondsCount = 0;

function updateTime() {

    secondsCount = secondsCount + 1;

    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;
    }


    if (minutesCount === 60) {
        minutesCount = 0;
        hoursCount++;
    }

    secondsElement.innerText = secondsCount < 10 ? "0" + secondsCount : secondsCount;
    minutesElement.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount;
    hoursElement.innerText = hoursCount < 10 ? "0" + hoursCount : hoursCount;

}



var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');
var saveBtn = document.getElementById('save-btn');
var resetBtn = document.getElementById('reset-btn');
var clearBtn = document.getElementById('clear-btn');
var resultsContainer = document.getElementById('results-container');
var timeCount = 0;

startBtn.addEventListener("click", function () {
    var timp = setInterval(updateTime, 1000)
    stopBtn.addEventListener("click", function () {
        clearInterval(timp);
    })

})

saveBtn.addEventListener('click', function () {
    var result = document.createElement('div')
    timeCount = timeCount + 1;
    result.innerText = timeCount + ".  "
        + (hoursCount < 10 ? "0" + hoursCount : hoursCount) + ":"
        + (minutesCount < 10 ? "0" + minutesCount : minutesCount) + ":"
        + (secondsCount < 10 ? "0" + secondsCount : secondsCount);
    resultsContainer.appendChild(result);
})

resetBtn.addEventListener('click', function () {
    hoursCount = 0;
    hoursElement.innerText = "0" + hoursCount;
    minutesCount = 0;
    minutesElement.innerText = "0" + minutesCount;
    secondsCount = 0;
    secondsElement.innerText = "0" + secondsCount;

})

clearBtn.addEventListener("click", function () {
    resultsContainer.innerText = "";
    timeCount = 0;
})