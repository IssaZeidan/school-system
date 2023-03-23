function handleSubmitForm(e) {
    e.preventDefault();
 const fullName= e.target.fullName.value;
 const date= e.target.date.value
 const gender= e.target.gender.value
 const number= e.target.number.value
 const grade= e.target.grade.value
drawTable(fullName,date,gender,number,grade);
document.getElementById("myForm").reset()
}

function drawTable(fullName,date,gender,number,grade){
    const tablebody = document.getElementById('tablebody')
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.innerHTML =fullName
    const td2 = document.createElement('td')
    td2.innerHTML =date
    const td3 = document.createElement('td')
    td3.innerHTML =gender
    const td4 = document.createElement('td')
    td4.innerHTML =number
    const td5 = document.createElement('td')
    td5.innerHTML =grade
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tablebody.appendChild(tr)
}  