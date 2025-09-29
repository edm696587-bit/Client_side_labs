function Employee(name, age, position, office, s_date) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.s_date = s_date;
}

let e1 = new Employee("Airi Satou", 33, "Accountant", "Tokyo", "2008/11/28");
let e2 = new Employee(
  "Angelica Ramos",
  47,
  "Chief Executive Officer (CEO)",
  "London",
  "2009/10/09"
);
let e3 = new Employee(
  "Ashton Cox",
  66,
  "Junior Technical Author",
  "San Francisco",
  "2009/01/12"
);
let e4 = new Employee(
  "Bradley Greer",
  41,
  "Software Engineer",
  "London",
  "2012/10/13"
);
let e5 = new Employee(
  "Brenden Wagner",
  28,
  "Software Engineer",
  "San Francisco",
  "2011/06/07"
);
let e6 = new Employee(
  "Brielle Williamson",
  61,
  "Integration Specialist",
  "New York",
  "2012/12/02"
);
let e7 = new Employee(
  "Bruno Nash",
  38,
  "Software Engineer",
  "London",
  "2011/05/03"
);
let e8 = new Employee(
  "Caesar Vance",
  21,
  "Pre-Sales Support",
  "New York",
  "2011/12/12"
);
let e9 = new Employee(
  "Cara Stevens",
  46,
  "Sales Assistant",
  "New York",
  "2011/12/06"
);
let e10 = new Employee(
  "Cedric Kelly",
  22,
  "Senior Javascript Developer",
  "Edinburgh",
  "2012/03/29"
);

let employees = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10];

function formatDate(date) {
  let d = new Date(date);
  let day = String(d.getDate()).padStart(2, "0");
  let month = String(d.getMonth() + 1).padStart(2, "0");
  let year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function pushdata(data) {
  let tbody = document.getElementById("employee-body");
  tbody.innerHTML = "";
  data.forEach((emp) => {
    let row = `<tr>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.position}</td>  
        <td>${emp.office}</td>
        <td>${formatDate(emp.s_date)}</td>
      </tr>`;
    tbody.innerHTML += row;
  });
}

function sortt(asc, field) {

  let temp = [...employees];
  console.log(field);

  temp.sort(function (a, b) {
    if (typeof a[field] === "string") {
      
      if (asc) {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    } else {
      if (asc) {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    }
  });

  return temp;
}

pushdata(employees);


function Addemp() {
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("Age").value);
  let position = document.getElementById("Position").value;
  let office = document.getElementById("Office").value;
  let s_date = document.getElementById("Start_date").value;




  let newEmp = new Employee(name, age, position, office, s_date);

  employees.push(newEmp);

  pushdata(employees);


  document.getElementById("name").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("Position").value = "";
  document.getElementById("Office").value = "";
  document.getElementById("Start_date").value = "";
}
