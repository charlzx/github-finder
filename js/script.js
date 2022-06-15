const form = document.querySelector('form');
const search = document.querySelector('#search')
const results = document.querySelector('#results')
const input = document.querySelector('input[type="text"]')

// prevent page from reloading when form is submitted
// form.addEventListener('submit', (e) => {
//    e.preventDefault();
// })

// initialize the Github class
const github = new Github; 
// initialize the UI class
const ui = new UI;


// search.addEventListener('keyup', (e) => {
form.addEventListener('submit', (e) => {
   console.log(input.value)
   const inputText = input.value

   if (inputText !== '') {
      
      github.getUser(inputText)
      .then (data => {
         console.clear()

         if (data.userData.message == 'Not Found'){
            ui.showError("User doesn't exist", 3000)

         }  else if (data.userData.message){
            ui.showError("ERROR: You are being rate limited", 5000)

         }  else {
            // console.log(inputText)
            console.log(data)

            ui.ShowProfile(data.userData)
            ui.ShowRepos(data.reposData)
         }
      })

   } else {
      ui.clearProfile()
      ui.clearRepos()

      let profiles = document.querySelector('#profile')
      profiles.style.border = ""

   }

   // prevent page from reloading when form is submitted
   e.preventDefault();
})