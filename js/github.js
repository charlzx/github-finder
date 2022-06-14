class Github {
   constructor (){
      this.id = '7c35adb820fdab423789'
      this.secret = '3bede33569ed235a51ce4cf664973f51e117244d'

      this.repos_count = 10
      this.repos_sort = 'created: asc'
   }

   async getUser (user){
      const userRequest = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);
      const reposRequest = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.id}&client_secret=${this.secret}`);


      const userData = await userRequest.json();
      const reposData = await reposRequest.json();

      return {userData, reposData};
   }
}