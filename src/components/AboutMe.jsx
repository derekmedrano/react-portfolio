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
                    <div className='bio'>
                        <h2>About Me</h2>
                        <p> I'm a Jr Fullstack Developer with a knack for sleek and efficient <strong>UX/UI</strong>. I know how important clean design is and I put all my passion
                            creating beautiful, MOBILE-FIRST, applications. </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe