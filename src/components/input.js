import React from 'react';

class Input extends React.Component {
    state = {
        word: ''
    }

    handleChange = (event) => {
        this.setState({ word: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.word.trim() !== '') {
            this.props.addWord(this.state.word);
            this.setState({ word: '' });
        }
    }

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Type here"
                        value={this.state.word}
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleSubmit}>
                        &#10003;
                    </button>
                </form>
            </>
        )
    }  
}

export default Input;