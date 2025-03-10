function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    
    if (speed <= speedLimit) {
        return "Ok";
    }

    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
    
    return demeritPoints > 12 ? "License suspended" : `Points: ${demeritPoints}`;
}

// Example usage
const speed = parseInt(prompt("Enter car speed: "), 10);

if (speed > 0) {
    console.log(speedDetector(speed));
} else {
    console.log("Invalid input! Please enter a positive number.");
}
