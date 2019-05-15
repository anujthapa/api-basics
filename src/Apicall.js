import React, { Component } from "react"
import axios from "axios"

class Apicall extends Component {
  state = {
    posts: [],
    subredit: "space"
  }

  getRedit = () => {
    axios
      .get(`https://www.reddit.com/r/${this.state.subredit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(item => item.data)
        this.setState({ posts })
        console.log(this.state.posts)
      })
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.getRedit()
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.state.subredit}`}</h1>
        <ul>
          {this.state.posts.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Apicall
