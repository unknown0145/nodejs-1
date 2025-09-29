const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const employees = [];

function showMenu() {
  console.log("\n=== Employee Management System ===");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleInput);
}

function handleInput(choice) {
  switch (choice.trim()) {            
    case "1":
      rl.question("Enter employee name: ", (name) => {
        rl.question("Enter employee ID: ", (id) => {
          employees.push({ id, name });
          console.log(`Employee ${name} (ID: ${id}) added.`);
          showMenu();
        });
      });
      break;

    case "2":
      console.log("\nEmployee List:");
      if (employees.length === 0) {
        console.log("No employees found.");
      } else {
        employees.forEach((emp, index) => {
          console.log(`${index + 1}. ID: ${emp.id}, Name: ${emp.name}`);
        });
      }
      showMenu();
      break;

    case "3":
      rl.question("Enter employee ID to remove: ", (id) => {
        const index = employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
          employees.splice(index, 1);
          console.log(`Employee (ID: ${id}) removed.`);
        } else {
          console.log(`Employee with ID ${id} not found.`);
        }
        showMenu();
      });
      break;

    case "4":
      console.log("Exiting...");
      rl.close();
      break;

    default:
      console.log("Invalid option. Try again.");
      showMenu();
  }
}

showMenu();
