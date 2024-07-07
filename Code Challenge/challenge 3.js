// calculate PAYE (income tax)
function calculatePAYE(annualSalary) {
    let monthlySalary = annualSalary / 12;

    if (monthlySalary <= 24000) {
        return monthlySalary * 0.1;
    } else if (monthlySalary <= 32333) {
        return monthlySalary * 0.25;
    } else if (monthlySalary <= 500000) {
        return monthlySalary * 0.3;
    } else if (monthlySalary <= 800000) {
        return monthlySalary * 0.325;
    } else {
        return monthlySalary * 0.35;
    }
}

// calculate NHIF deduction
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// calculate NSSF deduction
function calculateNSSF(grossSalary) {
    let tierI_limit = 7000
    let tierI_rate = 0.06
    let tierII_limit = 36000
    let tierII_rate = 0.06

    let tierI_contribution = Math.min(grossSalary, tierI_limit) * tierI_rate;
    let tierII_contribution = Math.max(0, Math.min(grossSalary, tierII_limit) - tierI_limit) * tierII_rate;

    return tierI_contribution + tierII_contribution;
}

//  to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits
    let payee = calculatePAYE(grossSalary * 12);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary)
    let netSalary = grossSalary - payee - nhif - nssf;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}


console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE:", salaryDetails.payee)
console.log("NHIF:", salaryDetails.nhif)
console.log("NSSF:", salaryDetails.nssf)
console.log("Net Salary:", salaryDetails.netSalary);