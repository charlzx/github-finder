class UI {
   constructor (){
      this.profile = document.querySelector('#profile')
   }

   ShowProfile (user){
      console.log(user)

 
    
      this.profile.innerHTML = `
         <div class="profile_id">
            <img src="${user.avatar_url}" alt="image of ${user.login}">
            <a href="${user.html_url}" target="blank_">View Profile</a>
         </div>

         <div class="profile_details">
            <h1>${user.name}</h1>

            <div class="other_details">
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
}