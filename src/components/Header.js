import React, { Component } from 'react'
// import styles from '../styles/screen.scss'

class Header extends Component {

  render () {
    return (
      <div>
        <header className='top' id='top'>
          <h1>{this.props.name}</h1>
          {/* <h2>Front End Developer<br />& Web Designer </h2> */}
          <a
            className='resumeLink'
            href='https://indd.adobe.com/view/ecf2f5d6-efe4-4394-8d59-ddc0a6aedd7f'
            target='_blank'
            rel='noopener noreferrer'
            ><button>VIEW RÉSUMÉ</button></a>
          {/* with modal link to my resume https://www.linkedin.com/in/calebsanderson */}
          {/* <div className='bio'>
            <h4>{this.props.bio}</h4>
            <img className='avatar_url' src={this.props.avatar_url} />
          </div> */}
        </header>
      </div>
    )
  }
}

export default Header
