import React from 'react';

import Input from './components/input';
import Score from './components/score';

import './App.scss';

class App extends React.Component {
  state = {
    errorMessage: '',
    error: false,
    words: [],
    score :0,
    suffix: 'tion',
    suffixes: [
      'tion',
      'sion',
      'ous',
      'er',
      'ment',
    ],
    startTime: new Date(),
    speed: 0
  }

  resetState = () => {
    this.setState({
      score: 0,
      speed: 0,
      words: [],
      error: false,
      errorMessage: ''
    });
  }
  changeSuffix = (value) => {
    this.setState({ suffix: value });
    this.resetState();
  }

  addWord = (word) => {
    if(!word.toLowerCase().endsWith(this.state.suffix)) {
      this.setState({ error: true, errorMessage: `Word does not end with ${this.state.suffix}`});
    }
    else if(this.state.words.includes(word)) {
      this.setState({ error: true, errorMessage: `You have already entered that.`});
    }
    else {
      if(this.state.score === 0)
        this.startTimer();
      else
        this.endTimer();
      this.setState({ error: false, score: this.state.score+1, words: [...this.state.words, word]});
    }
  }

  startTimer = () => {
    this.setState({ startTime: new Date() });
  };
  
  endTimer = () => {
    if(this.state.score === 0)
      return; 
    let endTime = new Date();
    var timeDiff = endTime - this.state.startTime; //in ms
    //Strip the ms, convert to minutes.
    timeDiff /= 1000*60;
    let speed = Math.round(this.state.score/timeDiff, 3);
    //console.log(speed);
    this.setState({ speed });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          Word Play
        </div>
        <div className="subtitle">
          Enter words ending with&nbsp;
          <div className="suffix">
            {
              this.state.suffixes.map((item, index) => {
                return (
                <span key={index}>
                  <input
                    type="radio"
                    name="suffix"
                    checked={this.state.suffix==item}
                    onChange={()=>this.changeSuffix(item)}
                  />
                  {item}
                </span>
              )})
            }

          </div>
        </div>
        <button onClick={this.resetState}>
          Reset
        </button>
        <Input addWord={this.addWord} />
        <div className="errorMessage">
          {
            this.state.error &&
            this.state.errorMessage
          }
         </div>
        <Score
          score={this.state.score}
          speed={this.state.speed}
        />
      </div>
    );
  }
}

export default App;
