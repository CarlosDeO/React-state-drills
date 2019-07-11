import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word : ''
        }
    }
    handleWorldClick = () => {
        this.setState({word: 'World!'})
    }
    handleFriendClick = () => {
        this.setState({word: 'Friend!'})
    }
    handleReactClick = () => {
        this.setState({word: 'React!'})
    }
    render() {
        console.log('render')
        return (
        <div>
           <p> hello, {this.state.word} </p>
           <button onClick={this.handleWorldClick} id='world'>World</button>
           <button  onClick={this.handleFriendClick} id='friend'>Friend</button>
           <button onClick={this.handleReactClick}  id='friend'>React</button>
        </div>
        )
      }
}

export default HelloWorld;