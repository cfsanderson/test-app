import React, { Component } from 'react'

// import styles from '../styles/screen.scss'

class BlogFeed extends Component {

  render () {
    return (
      <div className='blog'>
        <div className='section-header' id='blog'>
          <h1>Blog</h1>
          <div className='words'>
            <blockquote className='quote' cite='https://en.wikipedia.org/wiki/Carl_Rogers'>
              <q>Writing is its own reward.</q><br /><span> – Henry Miller</span>
            </blockquote>
            <p>Maybe it's just a sanity check but the process of writing has always been cathartic for me.  I tried to take some time and document my journey to becoming a Front-End Developer at The Iron Yard.  You can check out all of my posts on
              <a href='https://medium.com/@cfsanderson' target='_blank' rel='noopener noreferrer'>Medium</a>
            but here are a few for starters.</p>
          </div>
        </div>
        <div className='blogposts'>
          <div>
            <article>
              <h1>FizzBuzzed: Why Javascript?</h1>
              <time>November 15, 2016</time>
              <p>Today is the first day of week 2 in my 12 week cohort at The Iron Yard. Last week was spent learning HTML and CSS which I’d had enough exposure to that I could recognize some of the syntax, but writing functional code was a struggle. I knew the pace of the course would be fast but I wasn’t expecting a panic attack on day 2.</p>
              <button><a className='keep-reading' href='https://medium.com/@cfsanderson/fizzbuzzed-why-javascript-43ad273aa989#.aeag0p9rj' target='_blank' rel='noopener noreferrer'>KEEP READING <i className='fa fa-medium' /></a></button>
            </article>
          </div>
          <div>
            <article>
              <h1>React: Looking Forward</h1>
              <time>December 6, 2016</time>
              <p>Today was the first day of my 4th week in the Front-End Engineering program at The Iron Yard. So far we have covered the basics of HTML, CSS, Sass, and Javascript. Today we started looking at React. The combination of these tools will be the bulk of what we will work on for the rest of the program. They say the course is “immersive”</p>
              <button><a className='keep-reading' href='https://medium.com/@cfsanderson/react-looking-forward-e1aba7829556#.3i7evdtne' target='_blank' rel='noopener noreferrer'>KEEP READING <i className='fa fa-medium' /></a></button>
            </article>
          </div>
          <div>
            <article>
              <h1>Halfway?!.</h1>
              <time>December 31, 2016</time>
              <p>My current fitness level is pretty disappointing considering that just a little less than a year ago I was in the best shape of my life. That was mostly due to training for and then running my first marathon. I may spend another article digressing into self-loathing over that loss, but for now I’ll focus on what I learned from it.</p>
              <button><a className='keep-reading' href='https://medium.com/@cfsanderson/halfway-6e8f07356b5d#.pyfshmxq6' target='_blank' rel='noopener noreferrer'>KEEP READING <i className='fa fa-medium' /></a></button>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogFeed
