import React, { Component } from 'react'
// import styles from '../styles/screen.scss'
import ScrollAnim from 'rc-scroll-anim'

export default class Navbar extends Component {

  static PropTypes = {
  }

  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const ScrollAnimLink = ScrollAnim.Link

    return (
      <div className='navBar'>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul className='homeNavUl'>
            <li>
              <button className='menu' onClick={() => this.toggle()}>
                <i className='fa fa-times' aria-hidden='true' />
              </button>
            </li>
            <li>
              <ScrollAnimLink to='top' onClick={() => this.toggle()}>Top
                <i className='fa fa-chevron-up' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='skills' onClick={() => this.toggle()}>Skills
                <i className='fa fa-cogs' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='projects' onClick={() => this.toggle()}>Projects
                <i className='fa fa-wrench' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='blog' onClick={() => this.toggle()}>Blog
                <i className='fa fa-medium' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='social' onClick={() => this.toggle()}>Socials
                <i className='fa fa-users' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            {/* <li>
              <ScrollAnimLink to='track' onClick={() => this.toggle()}>Track
                <i className='fa fa-line-chart' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='ready' onClick={() => this.toggle()}>Get Started
                <i className='fa fa-play' aria-hidden='true' />
              </ScrollAnimLink>
            </li> */}
          </ul>
        </nav>
      </div>
    )
  }
}
