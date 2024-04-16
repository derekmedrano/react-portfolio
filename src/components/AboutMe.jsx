import React from 'react'

import '../utils/AboutMe.css'
import DerekMedranoResume from '../utils/DerekMedranoResume.pdf'

import selfie from '../../public/assets/selfie.jpg'

function AboutMe() {
    return (

        <div class='container'>
            <div class='row'>
                <div class='col-lg-6'>
                    <img className='aboutme-photo' src={selfie} alt='profile picture' />
                </div>
                <div class='col-lg-6'>
                    <h2 className='title'>About Me</h2>
                    <div className='bio'>
                        <p> I'm a Jr Fullstack Developer with a knack for sleek and efficient <strong>UX/UI</strong>. I know how important clean design is and I put all my passion
                            creating beautiful, MOBILE-FIRST, applications. </p>

                        <br></br>

                        <p>Here you'll be able to view some of my previous projects. Take a look around and feel 
                            free to reach out if you have any questions (or just want to say hi)!
                        </p>

                        <br></br>

                        <p>Below are links to my Github and LinkedIn profiles.</p>

                        <a
                            href={DerekMedranoResume}
                            download="DerekMedranoResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
>
  Click HERE to download my resume!
</a>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe