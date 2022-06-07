class Github {
   constructor (){
      this.id = '7c35adb820fdab423789'
      this.secret = '8d6c06267474f1d73062f16ab83bc64457016af0'
   }

   async getUser (user){
      const userRequest = await fetch(`https://api.github.com/users/${user}?client_secret=${this.secret}`);

      const userData = await userRequest.json();

      return {userData};
   }
}