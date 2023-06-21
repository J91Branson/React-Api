import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      quotes: {}
    }
  }
  componentDidMount() {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then(response => {
      if (!response.ok) { return false }
      return response.json()
    }).then(quotes => {
      // console.log(quotes[0])
      this.setState({
        quotes : quotes[0]
      })
    }).catch(e => console.log('error' + e))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
          <p>
            " {this.state.quotes.quote} " <br></br>
            - {this.state.quotes.author}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refresh
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
