import React, { Component } from 'react'

// import styles from '../styles/screen.scss'

class Footer extends Component {

  render () {
    return (
      <div className='footer' id='social'>
        <footer>
          <h2>Stay connected</h2>
          <ul className='socials'>
            <li><a href='https://twitter.com/cfsanderson' target='_blank' rel='noopener noreferrer' alt='twitter logo'><i className='fa fa-twitter' /></a></li>
            <li><a href='https://www.facebook.com/caleb.f.sanderson' target='_blank' rel='noopener noreferrer'><i className='fa fa-facebook' /></a></li>
            <li><a href='https://www.instagram.com/cfsanderson/' target='_blank' rel='noopener noreferrer'><i className='fa fa-instagram' /></a></li>
            <li><a href='https://www.linkedin.com/in/calebsanderson' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin' /></a></li>
            <li><a href='https://github.com/cfsanderson' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'/></a></li>
          </ul>
          <h5>Copyright &copy; 2017 Caleb Frost Sanderson.</h5>
        </footer>
      </div>
    )
  }
}

export default Footer
