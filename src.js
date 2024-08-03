let data = [];
let autoID = 1;

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const messageElement = document.getElementById("message");

  if (!name || !profession || !age) {
    messageElement.textContent = "Error: Please make sure all fields are filled before adding an employee!";
    messageElement.className = "error";
    return;
  }

  const employee = {
    id: autoID++,
    name: name,
    profession: profession,
    age: parseInt(age, 10),
  };

  data.push(employee);
  displaydata();
  console.log(data);
  messageElement.textContent = "Success: Employee added!";
  messageElement.className = "success";
  document.getElementById("formID").reset();
}

function displaydata() {
  const employeeList = document.getElementById("employeeList");
  if (data.length === 0) {
    employeeList.innerHTML = "You have 0 data.";
    return;
  }
  let singleDataEmp = 1;
  employeeList.innerHTML = data
    .map((employee) => {
      const html = `
    <div class="emp-details">
          <div class="employee-box" id="employee-${employee.id}">
              <div class="emp-space">
                  <span>${singleDataEmp}. </span>
                  <span>Name: ${employee.name}</span>
                  <span>Profession: ${employee.profession}</span>
                  <span>Age: ${employee.age}</span>
              </div>
          </div>
          <div class="deleteBtn">
              <button onclick="deleteEmployee(${employee.id})">Delete User</button>
          </div>
      </div>
      `;
      singleDataEmp++;
      return html;
    })
    .join("");
}

function deleteEmployee(id) {
  data = data.filter((employee) => employee.id !== id);
  displaydata();
}
