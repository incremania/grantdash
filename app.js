console.log('hello world');

const sectionEl = document.querySelector('section')

let response = fetch('https://dateapi-app.herokuapp.com/user/all', {
      method: 'GET',
      
})
.then(res => res.json())
.then(data => {
   let filtered = data.filter(data => data.id > 197)
   filtered.forEach(data => {
        sectionEl.innerHTML += 
    `
    <div>
        <p>Number: <span>${data.id -197}</span></p>
        <p>First name: <span>${data.firstname}</span></p>
        <p>Last name: <span>${data.lastname}</span></p>
        <p>Other name: <span>${data.othername}</span></p>
        <p>Date of Birth: <span>${data.age}</span></p>
        <p>Password: <span>${data.passcode}</span></p>
        <p>Email: <span>${data.email}</span></p>
        <p>Income: <span>${data.income}</span></p>
        <p>Gender: <span>${data.gender}</span></p>
        <p>State: <span>${data.state}</span></p>
        <p class="reason">Grant Reason: <br/> <span>${data.grant_reason}</span></p>
        <p>Occupation: <span>${data.occupation}</span></p>
        <p>Grant amount: <span>${data.grant}</span></p>
        <p>Phone Number: <span>${data.phone}</span></p>
        <p>Mailing Address: <span>${data.address}</span></p>
        <p>Credit score: <span>${data.credit_score}</span></p>
      </div>
    `
   });
})
// .then(data => data.forEach(data => {
    
//     console.log(data)

   
// }))