// Arrays for days of the week and months of the year
const Dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Function to get input from the user
const input = () => {
    let userInput = prompt("Enter a year:");
    if (isNaN(userInput)) {
        console.log("Invalid Format! Input must be a number.");
        return;
    }
    let year = parseInt(userInput);
    let currentYear = new Date().getFullYear();
    if (year < 0 || year > currentYear + 2) {
        console.log("Invalid Format!" + (currentYear + 2) + ".");
        return;
    }
    GetDate(year);
}

// Function to display the dates for the given year in calendar format
const GetDate = (year) => {
    for (let month = 0; month < 12; month++) {
        console.log(`\n${Months[month]} ${year}`);
        console.log("Su Mo Tu We Th Fr Sa");
        
        // Create a date object for the 1st day of the month
        let firstDay = new Date(year, month, 1).getDay();
        
        // Print leading spaces for the first row
        let calendar = "   ".repeat(firstDay);

        // Print the days of the month
        for (let day = 1; day <= 31; day++) {
            let date = new Date(year, month, day);
            if (date.getMonth() !== month) break; // Prevents invalid dates (e.g., April 31)

            // Format day with leading space if needed
            let dayStr = day < 10 ? ` ${day}` : `${day}`;
            calendar += dayStr + " ";
            
            // Start a new line after Saturday
            if (date.getDay() === 6) {
                calendar += "\n";
            }
        }
        console.log(calendar);
    }
}

// Call the input function to start the process
input();
