import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleKeys = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange= {this.handleKeys} value= {this.state.message}/>
        <p>{charNum}</p>
      </div>
    );
  }
}

export default TwitterMessage;
