// add event listener to "Run" button
document.getElementById("run-btn").addEventListener("click", function(){
    // get input values
    var inputText = document.getElementById("input-text").value;
    var shiftAmount = document.getElementById("shift-number").value;
    var shiftDirection = document.querySelector('input[name="shift-direction"]:checked').value;

    // perform Caesar's cipher algorithm
    var outputText = "";
    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // uppercase letters
            outputText += String.fromCharCode((charCode - 65 + shiftAmount * (shiftDirection == "right" ? 1 : -1) + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
            outputText += String.fromCharCode((charCode - 97 + shiftAmount * (shiftDirection == "right" ? 1 : -1) + 26) % 26 + 97);
        } else { // non-alphabetic characters
            outputText += inputText.charAt(i);
        }
    }

    // set output value
    document.getElementById("output-text").value = outputText;
});

// add event listener to "Clear" button
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("input-text").value = "";
    document.getElementById("shift-number").value = "";
    document.getElementById("shift-right").checked = true;
    document.getElementById("output-text").value = "";
});
