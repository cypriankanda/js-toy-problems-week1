function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    // Tax Calculation (Simplified)
    let tax = 0;
    if (grossSalary <= 24000) tax = grossSalary * 0.1;
    else if (grossSalary <= 32333) tax = grossSalary * 0.25;
    else tax = grossSalary * 0.3;
    
    // NHIF Deductions (Simplified)
    let nhif = grossSalary <= 5999 ? 150 : grossSalary <= 7999 ? 300 : 500;
    
    // NSSF Deductions (Simplified)
    let nssf = grossSalary * 0.06;
    
    let netSalary = grossSalary - (tax + nhif + nssf);
    return `Gross Salary: ${grossSalary}, Net Salary: ${netSalary}`;
}

// Example usage
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

if (basicSalary > 0 && benefits >= 0) {
    console.log(calculateNetSalary(basicSalary, benefits));
} else {
    console.log("Invalid input! Please enter valid numbers.");
}
