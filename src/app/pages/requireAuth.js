import React, { Component } from 'react'

export const  requireAuth = (ComposedComponent) => {
    class AuthComponent extends Component {

        componentDidMount() {
            if (!JSON.parse(sessionStorage.getItem('loginData'))) {
                this.props.history.push('/login')
                
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    return AuthComponent
}
