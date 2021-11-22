import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {

  state = {
    kanye: ''
  }

  componentDidMount() {
    let kanyeRest = 'https://api.kanye.rest/';
    // fetch a poem
    axios.get(kanyeRest).then( response => {
      // set state
      this.setState({kanye: response.data.quote})
    }).catch(err => console.log(err))
  }

  render() {
    let quote = this.state.kanye;
  if (this.state.kanye){
    return (
      <div>
        <h1>My favorite Kanye quote:</h1>
        {quote}
      </div>
    )
  }
  return (
    <div>
      <h1>My favorite Kanye quote:</h1>
      Loading...
    </div>
  )
}

  
}

export default Home