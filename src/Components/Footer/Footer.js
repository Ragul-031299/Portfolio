import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <div className='Section_Footer bg-clr px-5 py-5'>
        <div className='footer_content'>
            <p>Copyright © 2022 All rights reserved | This site made by ❤️ by Rahul jay</p>
        <div className='footer_SocialMedia  '>
            <a href="https://www.facebook.com/ragul.kumar.35762?mibextid=ZbWKwL" target='_blank'><FacebookIcon/></a>
            <a href="https://instagram.com/_rahul_jay?igshid=OTk0YzhjMDVlZA== "target='_blank'><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/ragul-g-696957208" target='_blank'><LinkedInIcon/></a>

        </div>
        </div>

    </div>
  )
}

export default Footer
