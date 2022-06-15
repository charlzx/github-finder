class UI {
   constructor (){
      this.profile = document.querySelector('#profile')
   }

   ShowProfile (user){

      // remove the time, display only the date the account was created
      let split = user.created_at.split('T')
      user.created_at = split[0]

      // remove https:// from blog.website link
      if (user.blog.includes('https://')) {
         let removeHttps = user.blog.split('https://')
         user.blog = removeHttps[1]
      }

      // remove http:// from blog.website link
      if (user.blog.includes('http://')) {
         let removeHttp = user.blog.split('http://')
         user.blog = removeHttp[1]
      }
      
      // set github handle as username if there isn't a username
      if (user.name === null){
         user.name = user.login
      }
      
      this.profile.style.border = "1px solid rgba(245, 245, 245, 0.35)"
   
      this.profile.innerHTML = `
         <div class="profile_id">
            <img src="${user.avatar_url}" alt="image of ${user.login}">
            <a href="${user.html_url}" target="blank_">View Profile</a>
         </div>

         <div class="profile_details">
            <h1 class="name">${user.name}</h1>

            <div class="other_details">
               <p>Username: ${user.login}</p>
               <p>Member Since: ${user.created_at}</p>
               <p class="location">Location: ${user.location}</p>
               <p class="blog">Website/Blog: <a href="https://${user.blog}" target="blank_">${user.blog}</a></p>
               <p class="twitter">Twitter Handle: <a href="https://twitter.com/${user.twitter_username}" target="blank_">${user.twitter_username}</a></p>
               <p>Following: ${user.following}</p>
               <p>Followers: ${user.followers}</p>
               <p>Public Repos: ${user.public_repos}</p>
               <p>Public Gists: ${user.public_gists}</p>
            </div>
         </div>
      `

      if (user.blog === ""){
         document.querySelector(".blog").style.display = "none"
      }
      if (user.twitter_username === null){
         document.querySelector(".twitter").style.display = "none"
      }
      if (user.location === null){
         document.querySelector(".location").style.display = "none"
      }

   }

   clearProfile (){
      this.profile.innerHTML = ""
   }

   showError (errorMessage, milliSeconds){
      this.clearError()

      let input = document.querySelector('#inputs')

      let errorDiv = document.createElement('div')
      errorDiv.className = "error"
      errorDiv.innerHTML = errorMessage

      input.style.marginTop = "20px";

      document.body.insertBefore(errorDiv, input)

      setTimeout(() => {
         this.clearError()

         input.style.marginTop = "10vh";

      }, milliSeconds)

   }

   clearError (){
      let errorAlert = document.querySelector('.error')

      if (errorAlert){
         errorAlert.remove()
      }
   }

   ShowRepos (repos){
      let repos_div = document.querySelector('#repos')
      let repos_list = `
         <h1>Latest Repositories</h1>
      `
      repos.forEach((repo) => {
         // console.log(repo)

         repos_list += `
            <div>
               <a href="${repo.html_url}" target="blank_"><p>${repo.name}</p></a>
            </div>
         `
      })

      
      if (repos == ""){
         repos_div.innerHTML = ""
      } else {
         repos_div.innerHTML = repos_list
      }
   }

   clearRepos (){
      let repos_div = document.querySelector('#repos')
      repos_div.innerHTML = ""
   }
}