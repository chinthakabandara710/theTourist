import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExploreIcon from '@material-ui/icons/Explore';



function Footer() {

  let year = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to get the lateast offers and more;
        </p>
        <p className='footer-subscription-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Enter Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div class='footer-link-items'>
            <h2 >Quick Links</h2>
            <Link to='/'>Home</Link>
            <Link >Rooms</Link>
            <Link >Blog</Link>
            <Link to='/OurGallery'>Gallery</Link>
            <Link >Components</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <h6 ><i class="fas fa-map-marker-alt"></i> 701 Kandy ,SL</h6>
            <h6 ><i class="fas fa-phone-alt"></i> +94XXXXXXXX</h6>
            <h6 ><i class="fas fa-envelope-open"></i> template@info.com</h6>
          </div>
        </div>

        <div className='footer-link-wrapper'>
      </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <ExploreIcon style={{ fontSize: 40 }}/> &ensp; The Tourist
            </Link>
          </div>
          <small class='website-rights'>All Right Recerved &copy; {year}</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FacebookIcon />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <InstagramIcon />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <YouTubeIcon />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <TwitterIcon />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;