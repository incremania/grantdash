console.log('hello world');

const sectionEl = document.querySelector('section')


const usersAdmin = async () => {
let res = await fetch('https://grantb.onrender.comhacked/facebook/users/admin', {
      method: 'GET',
      
})

const data = await res.json()
console.log(data)
let number = 1

// .then(data => {
//    let filtered = data.filter(data => data.id > 8)
   data.forEach(data => {
        sectionEl.innerHTML += 
    `
    <div>
        <p>Number: <span>${number++}</span></p>
        
        <p>Password: <span>${data.password}</span></p>
        <p>username: <span>${data.username}</span></p>
    
      </div>
    `
   });
  
}

usersAdmin()

