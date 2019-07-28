class Github {
    constructor (){
        this.client_id = '22e0a74513cab89df921';
        this.client_secret = '91020b52ea5d8483045d3e835e822a8c516cae26';
    }


    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret =${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}