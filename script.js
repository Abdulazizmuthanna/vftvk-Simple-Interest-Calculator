// This is function go when the user click on the compute interest button
function compute()
{
  // Get references for the HTML Elements
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result=document.getElementById("result");
    // Check if the principal is 0 or negative value
    if (principal.value == 0 || principal.value < 0 ) {
      // show a message
      alert("Enter a positive number");
      principal.focus();
      return false;
    }
    // if the principal is positive value it will Calculate the interest
    result.innerHTML="If you deposit <mark>"+principal.value
            +"</mark>,<br>at an interest rate of <mark>"+rate
            +"%</mark>.<br>You will receive an amount of <mark>"
            +interest+"</mark>,<br>in the year <mark>"+year+"</mark><br>";
          }
// this is function for change the value of span whether the range of the rate change
function updateRate()
{
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;
}
