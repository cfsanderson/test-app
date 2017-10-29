import React, { Component } from 'react'
// import styles from '../styles/screen.scss'

import D4C from '../images/D4C-example.gif'
import crabTacToe from '../images/crab-tac-toe-01.gif'
import minesweeper from '../images/minesweeper-example.gif'

class Projects extends Component {

  render () {
    return (
      <div>
        <div className='skills section-header' id='projects'>
          <h1>Projects</h1>
          <div className='words'>
            <p>Here are some of the projects that I've built including <a href='http://dash-4-cash.cfsanderson.surge.sh/' target='_blank' rel='noopener noreferrer'>Dash 4 Cash</a> which was my final project for the Front-End Engineering course at The Iron Yard. Check out these and more on my
              <a href='https://github.com/cfsanderson' target='_blank' rel='noopener noreferrer'>GitHub.</a>
            </p>
          </div>
          <div className='gitHub'>
            <div className='gif-container'>
              <div className='testdiv'>
                <div className='hovereffect'>
                  <img src={crabTacToe} alt='Crab-Tac-Toe game animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='http://tic-tac-toe.cfsanderson.surge.sh/' target='_blank' rel='noopener noreferrer'>
                      <h2>Crab-Tac-Toe</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='testdiv'>
                <div className='hovereffect'>
                  <img src={minesweeper} alt='Minesweeper game animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='http://explosion-avoider.cfsanderson.surge.sh/' target='_blank' rel='noopener noreferrer'>
                      <h2>Minesweeper</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='testdiv'>
                <div className='hovereffect'>
                  {/* <img src='http://i.imgur.com/SoQJh1c.gif'alt='Snowman game animated GIF' width='323' height='200' /> */}
                  <img src={D4C} alt='Dash 4 Cash project animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='http://dash-4-cash.cfsanderson.surge.sh/' target='_blank' rel='noopener noreferrer'>
                      <h2>Dash 4 Cash</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href='https://github.com/cfsanderson' target='_blank' rel='noopener noreferrer'>
              <img className='gitHubChart' src='http://ghchart.rshah.org/39bfc6/cfsanderson' alt="Caleb's Github chart" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
