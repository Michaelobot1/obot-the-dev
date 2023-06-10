let tempInput;
document.getElementById("subBtn").onclick = function () {
   let idGet = Number(document.getElementById("tempInput").value);
   tempInput = idGet;
   newTemp = tempInput + 273;
   newTemp2 = (1.8*tempInput) + 32; 
   document.getElementById("myLabel").innerHTML = "Temperature in kelvin is: " + newTemp;
   document.getElementById("myLabel2").innerHTML = "Temperature in fahrenheit is: " + newTemp2;
}
