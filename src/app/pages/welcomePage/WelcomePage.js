import React, { Component } from "react";



const WelcomePage = (props) => {


    return (
        <div className='container'>
            <div class="col-md-6">
                <h1>BitBook Login</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lorem pharetra sapien finibus faucibus. Sed sollicitudin ex et diam feugiat, ac facilisis tortor ultricies. Pellentesque purus dolor, gravida eget nisl in, faucibus gravida massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nec enim tempor massa ultricies fermentum. Integer ut scelerisque quam. Mauris eu tempus diam. Nulla euismod mattis purus, nec tempor dolor luctus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, nisi tempor aliquam tempor, eros felis eleifend tortor, nec convallis neque metus et libero. Sed nec magna gravida, tempor augue non, dapibus purus.</p>
            </div>
            <div class="col-md-6">
                <button className="tablinks">Login</button>
                <button className="tablinks">Register</button>
                

            </div>

        </div>
    )

}

export default WelcomePage;