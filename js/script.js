const search = document.querySelector('#search')
const results = document.querySelector('#results')

// initialize the Github class
const github = new Github; 

search.addEventListener('keyup', (e) => {
   const inputText = e.target.value

   if (inputText !== '') {
      
      github.getUser(inputText)
      .then (data => {
         console.clear()

         if (data.userData.message == 'Not Found'){
            console.log("user does not exist")

         } else {
            console.log(inputText)
            console.log(data)
         }
      })

   } else {
      
   }
})