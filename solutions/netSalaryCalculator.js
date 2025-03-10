const readline = require("readline-sync");

// Function to calculate PAYE tax
function calculatePAYE(taxableIncome) {
    if (taxableIncome <= 24000) return taxableIncome * 0.1;
    if (taxableIncome <= 32333) return (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    if (taxableIncome <= 500000) return (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.30);
    if (taxableIncome <= 800000) return (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + ((taxableIncome - 500000) * 0.325);
    return (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
}

// Function to calculate NSSF contribution
function calculateNSSF(grossSalary) {
    const tierI = Math.min(grossSalary, 8000) * 0.06;
    const tierII = grossSalary > 8000 ? Math.min(grossSalary - 8000, 72000) * 0.06 : 0;
    return tierI + tierII;
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const shif = grossSalary * 0.0275; // SHIF is 2.75% of gross salary
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = grossSalary * 0.015; // Housing Levy is 1.5% of gross salary

    const totalDeductions = paye + shif + nssf + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    console.log("\nSalary Breakdown:");
    console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
    console.log(`PAYE Tax: Ksh ${paye.toFixed(2)}`);
    console.log(`SHIF Deduction: Ksh ${shif.toFixed(2)}`);
    console.log(`NSSF Deduction: Ksh ${nssf.toFixed(2)}`);
    console.log(`Housing Levy: Ksh ${housingLevy.toFixed(2)}`);
    console.log(`Total Deductions: Ksh ${totalDeductions.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

// Get user input
const basicSalary = parseFloat(readline.question("Enter your basic salary (Ksh): "));
const benefits = parseFloat(readline.question("Enter your benefits (Ksh): "));

// Run calculator
calculateNetSalary(basicSalary, benefits);
