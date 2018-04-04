import User from '../entities/User'
import UserDetail from '../entities/UserDetail'

class userServices {

    generateHeaders() {
        return {
            'Content-Type': 'application/json',
            'Key': 'C863071',
            'SessionId': JSON.parse(sessionStorage.getItem('loginData'))
            ? JSON.parse(sessionStorage.getItem('loginData')).sessionId
            : ''
        }
    }

    getUsers() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users`, {
            headers: this.generateHeaders(),
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response.map((el) => {
                    return new User(el)
                })
            })
    }

    getProfile() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
            headers: this.generateHeaders(),
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return new UserDetail(response)
            })
    }

    getUserDetail(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
            headers: this.generateHeaders(),
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return new UserDetail(response)
            })
    }

    updateProfile(url, data) { // image/name/description
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: this.generateHeaders(),
        })
    }

}

const userService = new userServices();
export default userService;