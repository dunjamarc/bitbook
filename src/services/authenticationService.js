class AuthenticationService {


    sendRegistrationData(data) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook'
            }
        })
    }

    sendLoginData(data) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
            }
        })
        .then(response => {
            return response.json();
        })
        
    }

    logout(){
        
    }
}

const autoService = new AuthenticationService();
export default autoService;