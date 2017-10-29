import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class Resume extends Component {

  render () {
    return (
      <div>
        <h1>Experience</h1>
        <button className='resume-button'><a href='https://drive.google.com/file/d/0BwvRMwAwXIPEYi1ScWFzSmM4amM/view?usp=sharing' target='_blank'>Download Résumé</a></button>
        <p>Below is a current resume of my skills, relevant employment history, recent projects that I've completed, and education. Please feel free to click the download button to download to your computer or hit the appropriate social links in the footer section.<br>Thanks!</br></p>
        <iframe src='https://drive.google.com/file/d/0BwvRMwAwXIPEY0ZITURweWp1RUU/view?usp=sharing' style='width:718px; height:700px;' frameBorder='0' />
      </div>
    )
  }
}

export default Resume
