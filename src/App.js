import React from 'react';

import Input from './components/input';
import Score from './components/score';

import './App.scss';

class App extends React.Component {
  state = {
    errorMessage: '',
    error: '',
    words: [],
    score :0,
    suffix: 'tion'
  }

  addWord = (word) => {
    if(!word.toLowerCase().endsWith(this.state.suffix)) {
      this.setState({ error: true, errorMessage: `Word does not end with 'tion'`});
    }
    else if(this.state.words.includes(word)) {
      this.setState({ error: true, errorMessage: `You have already entered that.`});
    }
    else {
      this.setState({ error: false, score: this.state.score+1, words: [...this.state.words, word]});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          Word Play
        </div>
        <div className="subtitle">
          Enter words ending with 'tion'
        </div>
        <Input addWord={this.addWord} />
        <div className="errorMessage">
          {
            this.state.error &&
            this.state.errorMessage
          }
         </div>
        <Score score={this.state.score} />
      </div>
    );
  }
}

export default App;
