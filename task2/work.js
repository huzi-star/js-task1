

let students = [];
let choice;

while (true) {
    choice = prompt(`Choose an action:
1 - Add a student
2 - Remove a student
3 - Display all students
0 - Quit`);

    if (choice === '1') {
        // Add a student
        let name = prompt("Enter the student's name to add:");
        if (students.includes(name)) {
            alert(`${name} is already in the list.`);
        } else {
            students.push(name);
            alert(`${name} has been added to the list.`);
        }
    } else if (choice === '2') {
        // Remove a student
        let name = prompt("Enter the student's name to remove:");
        if (students.includes(name)) {
            students = students.filter(student => student !== name);
            alert(`${name} has been removed from the list.`);
        } else {
            alert(`${name} is not in the list.`);
        }
    } else if (choice === '3') {
        // Display all students
        if (students.length === 0) {
            alert("The student list is currently empty.");
        } else {
            alert("Students:\n" + students.join("\n"));
        }
    } else if (choice === '0') {
        // Quit
        alert("Goodbye!");
        break;
    } else {
        alert("Invalid choice. Please try again.");
    }
}

