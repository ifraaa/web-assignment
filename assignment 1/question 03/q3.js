document.getElementById('add-history').addEventListener('click', function() {
    var list = document.getElementById('employment-history-list');
    var newInput = document.createElement('li');
    newInput.innerHTML = '<input type="text" name="Employment-History" placeholder="Enter your past employment">';
    list.appendChild(newInput);
  });
  document.getElementById('add-job').addEventListener('click', function() {
    var wrapper = document.getElementById('prev-jobs');
    var jobHistoryContainer = document.createElement('div');
    jobHistoryContainer.classList.add('job-history-container');
    jobHistoryContainer.innerHTML = `
          <label for="company">Company Name :</label>
          <input name="Company" type="text">
          <br>
          <label for="emp-date">Employemeny Period :</label>
          <input name="Start Date" type="date"> to
          <input name="End Date" type="date">
          <br>
          <label for="job-resp">Job responsibilities :</label>
          <input name= "Job Responsibilities" type="text">
          <br>
          <hr>
      `;
    wrapper.appendChild(jobHistoryContainer);
  });
  document.getElementById('add-skill').addEventListener('click', function() {
    var list = document.getElementById('skills-list');
    var newInput = document.createElement('li');
    newInput.innerHTML = '<input type="text" name="Skill" placeholder="Enter your skill">';
    list.appendChild(newInput);
  });
  document.getElementById('add-certificate').addEventListener('click', function() {
    var list = document.getElementById('certificates-list');
    var newInput = document.createElement('li');
    newInput.innerHTML = '<input type="file" name="certificates">';
    list.appendChild(newInput);
  });
  function checkfeilds(value) {
    return value.trim() === '';
  }
  document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let flag=0;
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let zip=document.getElementById("zip").value;
    if(!(/^[A-Za-z]+$/.test(fname))){
      if(!checkfeilds(fname)){
        alert('Enter valid first name');
        flag=1;
      }
  
    }
    if(!(/^[A-Za-z]+$/.test(lname))){
      if(!checkfeilds(lname)){
        alert('Enter valid last name');
        flag=1;
      }
    }
    if(! (/^\d{4}-\d{7}$/.test(phone))){
      if(!checkfeilds(phone)){
        alert('Enter valid phone number');
        flag=1;
      }
    }
    if (! (/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email))) {
      if(!checkfeilds(email)){
        alert('enter valid email');
        flag=1;
      }
  
    }
    if(!(/^\d+$/.test(zip))){
      if(!checkfeilds(zip)){
        alert('enter valid zip code');
        flag=1;
      }
    }
  
    if (checkfeilds(fname) || checkfeilds(lname) || checkfeilds(phone) || checkfeilds(email)) {
      alert("Please fill out all required fields");
    }
    check=document.getElementById("checkbox");
    if(!check.checked){
      alert('you must agree to the terms and conditions');
      flag=1;
    }
    if(flag!=1)
    {
      var submitButton = document.getElementById("submit-btn");
      submitButton.innerHTML = "Submitted";
      submitButton.disabled=true;
      let heading=document.getElementById("heading");
      let table_view=document.getElementById("view-tbl");
      heading.style.display="flex"
      table_view.style.display="flex";
    }
  });
  
  document.getElementById("my-form").onsubmit = function(event) {
    event.preventDefault();
  };
  document.getElementById("view-tbl").onclick=table_view;
  function table_view() {
    var table = document.getElementById("data-table");
    var form = document.getElementById("my-form");
  
    if (table.style.display === "none" || table.style.display === "") {
      table.innerHTML = "";
      var thead = document.createElement("thead");
      var headerRow = document.createElement("tr");
      var th1 = document.createElement("th");

      th1.textContent = "Field";
      var th2 = document.createElement("th");
      th2.style.width="70%";
      th2.textContent = "Value";
      headerRow.appendChild(th1);
      headerRow.appendChild(th2);
      thead.appendChild(headerRow);
      table.appendChild(thead)
      var tbody = document.createElement("tbody");
      var inputs = form.querySelectorAll('input[type="radio"]:checked, input[type="file"], input[type="text"], input[type="email"], input[type="date"], select, textarea');
      for (var i = 0; i < inputs.length; i++) {
  
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = inputs[i].name; 
        var td2 = document.createElement("td");
        td2.textContent = inputs[i].value; 
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      table.style.display = "block"; 
    } else {
      table.style.display = "none"; 
    }
  }