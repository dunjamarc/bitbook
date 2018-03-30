import React from 'react'
import User from '../entities/User'
import UserDetail from '../entities/UserDetail'

class userServices {
    getUsers() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            return new User(response)
        })
    }

    getProfile() {
        return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            return new UserDetail(response)
        })
    }

    getUserDetail(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            return new UserDetail(response)
        })
    }

    updateProfile(url, data) { // image/name/description
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
        })
    }
}

const userService = new userServices()
export default userService