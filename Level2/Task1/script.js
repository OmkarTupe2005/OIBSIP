var display = document.getElementById("display");

function addValue(value) {
    display.value = display.value + value;
}

function clearAll() {
    display.value = "";
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value);
}
