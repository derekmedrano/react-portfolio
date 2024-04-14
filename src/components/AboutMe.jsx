import React from 'react'
import '../utils/AboutMe.css'

function AboutMe() {
    return (

        <div class='container'>
            <div class='row'>
                <div class='col-lg-6'>
                    <img className='aboutme-photo' src='../public/assets/selfie.jpg' alt='profile picture' />
                </div>
                <div class='col-lg-6'>
                    <h2>About Me</h2>
                    <p>I'm a Jr Fullstack Developer with a knack for sleek and efficient UX/UI. I know how important clean design is and I put all my passion
                        into each and every line of code. </p>
                </div>
            </div>
        </div>

    )
}

export default AboutMe