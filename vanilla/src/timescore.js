
var secondsElement = document.getElementById('seconds');
var minutesElement = document.getElementById('minutes');



var minutesCount = 0;
var secondsCount = 0;

class Time {


updateTime() {

    secondsCount = secondsCount + 1;

    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;
    }

    secondsElement.innerText = secondsCount < 10 ? "0" + secondsCount : secondsCount;
    minutesElement.innerText = minutesCount < 10 ? "0" + minutesCount +":" : minutesCount +":";

}
}
export default Time;