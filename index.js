let marks = prompt("Enter student marks between 0 and 100:");

if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}


const speed = Number(prompt("Enter car speed (in km/h):"));

if (speed <= 70) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints >= 12) {
    console.log("License suspended");
  } else {
    console.log(`Demerit points: ${demeritPoints}`);
  }
}

// Constants for tax rates, NHIF deductions, and NSSF deductions
const TAX_RATES = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 40667, rate: 0.15 },
    { min: 40668, max: 57333, rate: 0.2 },
    { min: 57334, max: 74000, rate: 0.25 },
    { min: 74001, max: 100000000, rate: 0.3 }
  ];
  
  const NHIF_RATES = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: 44999, rate: 1000 },
    { min: 45000, max: 49999, rate: 1100 },
    { min: 50000, max: 59999, rate: 1200 },
    { min: 60000, max: 69999, rate: 1300 },
    { min: 70000, max: 79999, rate: 1400 },
    { min: 80000, max: 89999, rate: 1500 },
    { min: 90000, max: 99999, rate: 1600 },
    { min: 100000, max: 109999, rate: 1700 },
    { min: 110000, max: 119999, rate: 1800 },
    { min: 120000, max: 129999, rate: 1900 },
    { min: 130000, max: 139999, rate: 2000 },
    { min: 140000, max: 149999, rate: 2100 },
    { min: 150000, max: 159999, rate: 2200 },
    { min: 160000, max: 169999, rate: 2300 },
    { min: 170000, max: 179999, rate: 2400 },
    { min: 180000, max: 189999, rate: 2500 },
    { min: 190000, max: 199999, rate: 2600 },
    { min: 200000, max: 209999, rate: 2700 },
    { min: 210000, max: 219999, rate: 2800 },
    { min: 220000, max: 229999, rate: 2900 },
    { min: 230000, max: 239999, rate: 3000 },
    { min: 240000, max: 249999, rate: 3100 },
    { min: 250000, max: 259999
  