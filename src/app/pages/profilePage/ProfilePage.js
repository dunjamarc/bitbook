import React, { Component } from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const ProfilePage = props => {
    return (
        <React.Fragment>
        <Header />
        <div className='container'>
            <img src='https://www.facebook.com/ProfilePictures/' />
            
            <h2>Name Surname</h2>
            <p className='user-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae omnis quod, similique dolor vitae iste quae quisquam, expedita dolorem quo laborum ad unde odio sint nam harum, sed corporis possimus iusto! Explicabo illum eius sed veritatis reprehenderit architecto aperiam, fugiat quisquam odit perspiciatis velit ducimus at voluptates labore numquam earum?</p>
            <div class="chip">
                <img src="images/yuna.jpg" alt="Contact Person" />
                Comments
            </div>
            <div class="chip">
                <img src="images/yuna.jpg" alt="Contact Person" />
                Posts
            </div>
        </div>
        <Footer />
        </React.Fragment>
    )

}

export default ProfilePage;