import React, { Component } from 'react'

class Skills extends Component {

  render () {
    return (
      <div>
        <div className='bio'>
          <p>{this.props.bio}</p>
          <img className='avatar_url' src={this.props.avatar_url} alt="Caleb's avatar" />
        </div>
        <div className='skills section-header' id='skills'>
          <h1>Skills</h1>
          <div className='words'>
            <blockquote className='quote' cite='https://en.wikipedia.org/wiki/Carl_Rogers'>
              <q>The only person who is educated is the one who has learned how to learn and change.</q><br /><span> - Carl Rogers</span>
            </blockquote>
            <p>I'm a creative, a learner, and a digital craftsman. I'd rather figure out how to make something for myself than buy it off the shelf.</p>
            <p>I love a challenge and especially when I get to use my skills to create beautiful and useful things. In the past I've done that with music, film, and visual media. While I still enjoy those things, my focus has shifted to web design and software development. Here are some of the creative tools I am currently investing in.</p>
            <p>More on the way.</p>
            {/* <p>HTML5, CSS, Sass, Javascript (ES2015), React</p> */}
          </div>
          <ul className='skill-icons'>
            <li>&#xe636;</li>
            <li>&#xe649;</li>
            <li>&#xe64b;</li>
            <li>&#xe681;</li>
            <li>&#xe6ba;</li>
          </ul>
        </div>
      </div>
    )
  }
}

// http://vorillaz.github.io/devicons/#/cheat
export default Skills
