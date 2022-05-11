function compute()
{
    var principal= document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var amt = parseInt(principal) + parseInt(interest);
    var result = document.getElementById("result")

    result.innerHTML = "If you deposit <mark> "+principal+" </mark> <br>";
    result.innerHTML += "at an interest rate of <mark>" + rate + "% </mark> <br>";
    result.innerHTML += "You will receive an amount of <mark>" + amt + "</mark> <br>";
    result.innerHTML += "In the year <mark>" + year + "</mark>. <br>"

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}  

function validate() {

        var princip_val = document.getElementById("principal");

        if (princip_val.value == "" || princip_val.value < 0) {
            alert("The principal must be greater than 0");
            princip_val.focus();
            return false;
        }
        return true;
}
