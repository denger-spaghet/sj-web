import React, { Component } from 'react';

type TextDisplayProps = {
  text: string;
};

type TextDisplayState = {
  text: string;
};

class PlainText extends Component<TextDisplayProps, TextDisplayState> {
  constructor(props: TextDisplayProps) {
    super(props);
    this.state = { text: props.text };
  }

  render() {
    return <div className='p-6 text-xl font-bold'>{this.state.text}</div>;
  }
}

export default PlainText;
