function convert() {
    var temp = document.getElementById("temp").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");
    var error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    if (temp == "" || isNaN(temp)) {
        error.innerHTML = "Please enter a valid number";
        return;
    }

    temp = parseFloat(temp);

    if (unit == "C") {
        var f = (temp * 9/5) + 32;
        var k = temp + 273.15;

        result.innerHTML =
            "Fahrenheit: " + f.toFixed(2) + " °F<br>" +
            "Kelvin: " + k.toFixed(2) + " K";
    }
    else if (unit == "F") {
        var c = (temp - 32) * 5/9;
        var k = c + 273.15;

        result.innerHTML =
            "Celsius: " + c.toFixed(2) + " °C<br>" +
            "Kelvin: " + k.toFixed(2) + " K";
    }
    else {
        var c = temp - 273.15;
        var f = (c * 9/5) + 32;

        result.innerHTML =
            "Celsius: " + c.toFixed(2) + " °C<br>" +
            "Fahrenheit: " + f.toFixed(2) + " °F";
    }
}
