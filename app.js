let studentsData = JSON.parse(localStorage.getItem("data"));
if (studentsData && studentsData.length) {
  studentsData.forEach((student) => {
    drawCard(student.fullName, student.number, student.major, student.image,false);
  });
}

function handleSubmitForm(e) {
  e.preventDefault();
  const fullName = e.target.fullName.value;
  const date = e.target.date.value;
  const gender = e.target.gender.value;
  const number = e.target.number.value;
  const grade = e.target.grade.value;
  const major = e.target.major.value;
  drawCard(fullName, number, major, "./assets/OIP.jpg",true);
  document.getElementById("myForm").reset();
}

function drawCard(fullName, number, major, image, saveStudent) {

  const card = document.getElementById("card");
  const studentImage = document.createElement("img");
  studentImage.setAttribute("src", image);
  const name = document.createElement("p");
  name.innerHTML = "Name : " + fullName;
  const studentNumber = document.createElement("p");
  studentNumber.innerHTML = "Phone# : " + number;
  const studentMajor = document.createElement("p");
  studentMajor.innerHTML = "Major : " + major;
  card.appendChild(studentImage);
  card.appendChild(name);
  card.appendChild(studentNumber);
  card.appendChild(studentMajor);

  if(saveStudent){
    saveToStorage({ fullName: fullName, image, major, number });
}
}

// function drawTable(fullName,date,gender,number,major){
//     const tablebody = document.getElementById('tablebody')
//     const tr = document.createElement('tr')
//     const td1 = document.createElement('td')
//     td1.innerHTML =fullName
//     const td2 = document.createElement('td')
//     td2.innerHTML =date
//     const td3 = document.createElement('td')
//     td3.innerHTML =gender
//     const td4 = document.createElement('td')
//     td4.innerHTML =number
//     const td5 = document.createElement('td')
//     td5.innerHTML = major
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     tr.appendChild(td5)
//     tablebody.appendChild(tr)
// }
function saveToStorage(data) {
  let studentsData = JSON.parse(localStorage.getItem("data"));
  if (!studentsData) {
    studentsData = [];
  }
  studentsData.push(data);
  localStorage.setItem("data", JSON.stringify(studentsData));
}
