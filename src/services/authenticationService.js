class AuthenticationService {


    sendRegistrationData(data) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'C863071'
            }
        })
    }

    sendLoginData(data) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'C863071',
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