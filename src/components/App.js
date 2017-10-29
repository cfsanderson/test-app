import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import BlogFeed from './BlogFeed'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      avatar_url: '',
      bio: '',
      location: '',
      blog: []
    }
  }

  componentDidMount () {
    const GitHubURL = 'https://api.github.com/users/cfsanderson'
    const MediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40cfsanderson'
    window.fetch(GitHubURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        location: data.location
      })
    })

    window.fetch(MediumURL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        blog: data.items
      })
    })
  }

  render () {
    return (
      <div>
        <Navbar name={this.state.name} />
        <Header name={this.state.name} />
        <Skills avatar_url={this.state.avatar_url} bio={this.state.bio} />
        <Projects />
        <BlogFeed items={this.state.blog} />
        <Footer />
      </div>
    )
  }
}

export default App
