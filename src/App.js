import React from "react";
import './App.css';
import refreshIcon from "./arrows-rotate-solid.svg";

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      quotes: {}
    }
  }

  fetchAPI = () => {
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
  refresh = () => {
    this.fetchAPI()
  }
  componentDidMount() {
    this.fetchAPI()
  }
  render() {
    const {quote, author} = this.state.quotes
    return (
      <div className="App">
        <header className="App-header">
  
          <p>
            " {quote} " <br></br>
            - {author}
          </p>
          <button className="refreshButton"  onClick={() => this.refresh()}><img className="refreshButton__icon" alt="refresh icon" src={refreshIcon}></img></button>
        </header>
      </div>
    );
  }
  
}

export default App;
