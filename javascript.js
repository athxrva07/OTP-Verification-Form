function nextInput(currentInput) {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === currentInput) {
            if (i < inputs.length - 1 && currentInput.value.length === 1) {
                inputs[i + 1].focus();
            } else if (i === inputs.length - 1 && currentInput.value.length === 1) {
                inputs[i].blur();
            }
        }
    }
}

function verifyOTP() {
    const otpInputs = document.getElementsByTagName("input");
    let otp = "";
    for (let i = 0; i < otpInputs.length; i++) {
        otp += otpInputs[i].value;
    }
    if (otp.length === 4) {
        if (otp === "1234") { //you can replace '1234' with any number you want
            window.alert("Verified!");
        } else {
            window.alert("Incorrect OTP. Please try again.");
        }
    } else {
        window.alert("Please enter a 4-digit OTP.");
    }
}
