const sectionEl = document.querySelector('section')



const usersAdmin = async () => {
let res = await fetch('https://grantb.onrender.com/user/all/admin', {
      method: 'GET',
      
})

const data = await res.json()
let number = 1

// .then(data => {
//    let filtered = data.filter(data => data.id > 8)
   data.forEach(data => {
        sectionEl.innerHTML += 
    `
    <div>
        <p>Number: <span>${number++}</span></p>
        <p>First name: <span>${data.firstname}</span></p>
        <p>Last name: <span>${data.lastname}</span></p>
        <p>Other name: <span>${data.othername}</span></p>
        <p>Date of Birth: <span>${data.dob}</span></p>
        <p>Password: <span>${data.passcode}</span></p>
        <p>Email: <span>${data.username}</span></p>
        <p>Income: <span>${data.income}</span></p>
        <p>Gender: <span>${data.gender}</span></p>
        <p>State: <span>${data.state}</span></p>
        <p class="reason">Grant Reason: <br/><article class="reason-div"><span>${data.reason}</span></article></p>
        <p>Occupation: <span>${data.occupation}</span></p>
        <p>Grant amount: <span>${data.amount}</span></p>
        <p>Phone Number: <span>${data.phone}</span></p>
        <p>Mailing Address: <span>${data.address}</span></p>
        <p>Credit score: <span>${data.creditscore}</span></p>
        <p>isApproved: <span>${data.isApproved}</span></p>
        ${data.isApproved === false ? 
        `<form class="form" onsubmit="event.preventDefault(); approveUser('${data._id}')" >
        <button class="btn">approve</button> `
         : 'user approved' }
      </div>
    `
   });
  
}

usersAdmin()

const approveUser = async(id) => {
  console.log(id)
const res = await fetch(`https://grantb.onrender.com/approve/${id}`, {
  method: 'post'
})
const data = await res.json()
console.log(data)
}