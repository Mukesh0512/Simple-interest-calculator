function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    const interestRate = parseFloat(document.getElementById('interest').value);

    if (isNaN(principal) || isNaN(tenure) || isNaN(interestRate)) {
        alert('Please enter valid details for all fields.');
       return;
    }

    const interest = (principal * tenure * interestRate) / 100;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Simple Interest Is: ${interest.toFixed(2)
    
    }`;

}
