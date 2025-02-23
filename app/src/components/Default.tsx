import React, { Component } from 'react';

type TextDisplayProps = {
  text: string;
  component : string;
};

type TextDisplayState = {
  text: string;
  component : string;
};

class Default extends Component<TextDisplayProps, TextDisplayState> {
  constructor(props: TextDisplayProps) {
    super(props);
    this.state = { 
        text: props.text,
        component : props.component
    };
  }

  render() {
    return <div className='p-6 text-xl font-bold'>missing component: {this.state.component}</div>;
  }
}

export default Default;