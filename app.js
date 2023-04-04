// let studentsData = JSON.parse(localStorage.getItem("data"));
// if (studentsData && studentsData.length) {
//   studentsData.forEach((student) => {
//     drawCard(student.fullName, student.number, student.major, student.image,false);
//   });
// }

// function handleSubmitForm(e) {
//   e.preventDefault();
//   const fullName = e.target.fullName.value;
//   // const date = e.target.date.value;
//   // const gender = e.target.gender.value;
//   const number = e.target.number.value;
//   // const grade = e.target.grade.value;
//   const major = e.target.major.value;
//   drawCard(fullName, number, major, "./assets/OIP.jpg",true);
//   document.getElementById("myForm").reset();
// }

// function drawCard(fullName, number, major, image, saveStudent) {

//   const card = document.getElementById("card");
//   const studentImage = document.createElement("img");
//   studentImage.setAttribute("src", image);
//   const name = document.createElement("p");
//   name.innerHTML = "Name : " + fullName;
//   const studentNumber = document.createElement("p");
//   studentNumber.innerHTML = "Phone# : " + number;
//   const studentMajor = document.createElement("p");
//   studentMajor.innerHTML = "Major : " + major;
//   card.appendChild(studentImage);
//   card.appendChild(name);
//   card.appendChild(studentNumber);
//   card.appendChild(studentMajor);

//   if(saveStudent){
//     saveToStorage({ fullName: fullName, image, major, number });
// }
// }

// // function drawTable(fullName,date,gender,number,major){
// //     const tablebody = document.getElementById('tablebody')
// //     const tr = document.createElement('tr')
// //     const td1 = document.createElement('td')
// //     td1.innerHTML =fullName
// //     const td2 = document.createElement('td')
// //     td2.innerHTML =date
// //     const td3 = document.createElement('td')
// //     td3.innerHTML =gender
// //     const td4 = document.createElement('td')
// //     td4.innerHTML =number
// //     const td5 = document.createElement('td')
// //     td5.innerHTML = major
// //     tr.appendChild(td1)
// //     tr.appendChild(td2)
// //     tr.appendChild(td3)
// //     tr.appendChild(td4)
// //     tr.appendChild(td5)
// //     tablebody.appendChild(tr)
// // }
// function saveToStorage(data) {
//   let studentsData = JSON.parse(localStorage.getItem("data"));
//   if (!studentsData) {
//     studentsData = [];
//   }
//   studentsData.push(data);
//   localStorage.setItem("data", JSON.stringify(studentsData));
// }

let arrData=[];

if(sessionStorage.arrData != null){
    arrData=JSON.parse(sessionStorage.arrData);
  }
 
let userName;
let userPassword;
let userEmail;
let userNumber;

let DataCollected=document.getElementById("datasub");

DataCollected.addEventListener("submit",function(event){
event.preventDefault();

  userName=event.target.username.value;
  userPassword=event.target.userpassword.value;
  userEmail=event.target.useremail.value;
  userNumber=event.target.usernumber.value;
 
  if( validateName() &&  validatePassword() && validateEmail() && validateNumber()){
		arrData.push(userName);
		sessionStorage.setItem('arrData',JSON.stringify(arrData) );
		// DataCollected.reset(); 
  }

 
  
});


function validateName() {
	let Name = userName.toLowerCase();
	if (Name == "") {
	  alert("Name must be filled out");
	  return false;
	}else if(Name.includes(" ")){
		alert("Name must be filled with no spaces");
		return false;	
	} else if(arrData.includes(userName)){

		alert("Username already exists. welcome "+userName);
		return false;
	}
return true;
  }
  function validatePassword(){
	let iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	let password = userPassword;
	if (password.length<8) {
		alert ("The password length must be more than 8 characters");
		return false;
			}
	for (let i = 0; i < password.length; i++) {
		if (iChars.indexOf(password.charAt(i)) != -1) {
		alert ("The password has special characters. \nThese are not allowed.\n");
		return false;
			}
		}	
		return true;
	}   
	function validateEmail(){
		let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
		let Email = userEmail.toLowerCase();
		 if(!Email.includes("@")  || !Email.includes(".com") ){
			alert("Please enter a valid Email EX.. majdi@gamil.com");
			return false;
		}
		for (let i = 0; i < Email.length; i++) {
			if (iChars.indexOf(Email.charAt(i)) != -1) {
			alert ("The Email has special characters. \nThese are not allowed.\n");
			return false;
				}
			}
			return true;
		}   

		function validateNumber(){
			let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?@.";
			let Number = userNumber;
  
			 if( !(Number.includes("07"))    || !(Number.length ==10)  ){
				alert("Please enter a valid number ex. 0799855850");
				return false;
			}
			
			for (let i = 0; i < Number.length; i++) {
				if (iChars.indexOf(Number.charAt(i)) != -1) {
				alert ("The Number has special characters. \nThese are not allowed.\n");
				return false;
					}
				}
		return true;
			}  