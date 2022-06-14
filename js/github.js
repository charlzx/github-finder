class Github {
   constructor (){
      this.id = '7c35adb820fdab423789'
      /* 
      old secret
      this.secret = '8d6c06267474f1d73062f16ab83bc64457016af0'  
      */
      this.secret = '3bede33569ed235a51ce4cf664973f51e117244d'
   }

   async getUser (user){
      const userRequest = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);

      const userData = await userRequest.json();

      return {userData};
   }
}