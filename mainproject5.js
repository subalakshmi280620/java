function calculateEMI() {
    let P = parseFloat(document.getElementById("loanAmount").value);
    let R = parseFloat(document.getElementById("interestRate").value);
    let N = parseFloat(document.getElementById("loanYears").value);

    if (!P || !R || !N) {
        document.getElementById("resultBox").innerHTML =
            "Please fill all fields correctly.";
        return;
    }

    // Convert annual interest to monthly & years to months
    let monthlyRate = R / (12 * 100);
    let months = N * 12;

    // EMI Formula
    let emi =
        (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayable = emi * months;

    document.getElementById("resultBox").innerHTML = `
            <strong>Monthly EMI:</strong> ₹${emi.toFixed(2)} <br>
            <strong>Total Payable Amount:</strong> ₹${totalPayable.toFixed(2)}
        `;
}