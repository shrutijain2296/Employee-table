class person{
  name;
  profession;
  age;
  constructor(name, profession, age){
    this.name = name;
    this.profession = profession;
    this.age = age;
  }
}
  
  // Array to store user data
  let array = [];
  let id = 1;
  document.getElementById("add-user").addEventListener('click', (event) =>{
    event.preventDefault();
    let form = document.getElementById("form-container");
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    console.log(name + profession + age);

    if (name.trim() == "" || profession.trim() == "" || age.trim() == ""){
      let status = document.getElementById("status");
      status.innerText = "Error : Please make sure all the fields are filled before adding in an employee !";
      status.style = `
      color: red;
      padding-bottom: 1rem;` 
    }else{
      let status = document.getElementById("status");
      status.innerText = "Success : Employee Added!";
      status.style = `
      color: green;
      padding-bottom: 1rem;`

      document.getElementById("hidden").style.display = "none";
      let employeeContainer = document.getElementById("employeesList");
      let employee = document.createElement("div");
      employee.className = "employee-box";
      employee.innerHTML = `
      <div class = "employee-details">
        <p>${id}.</p>
        <p>Name: <span>${name}</span></p>
        <p>Profession: <span>${profession}</span></p>
        <p>Age: <span>${age}</span></p>
      </div>
      <div> <button class = "delete-btn">Delete User</button></div>`

      employeeContainer.append(employee);
      let newPerson = new person(name, profession, age);
      array.push(newPerson);
      id++;
      // form.reset();
      document.getElementById("name").value = "";
      document.getElementById("profession").value = "";
      document.getElementById("age").value = "";


      // event listener to the delete button
      let deleteBtn = employee.querySelector(".delete-btn");
      deleteBtn.addEventListener('click', () =>{

        let index = array.indexOf(newPerson);
        array.splice(index, 1);

        employee.remove();

        if(array.length === 0){
          document.getElementById("hidden").style.display = "block";
        }
      });

    }

  });

  console.log(array);
  
  