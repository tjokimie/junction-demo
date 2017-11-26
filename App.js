import React from 'react';
import Main from './app/App';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      speed: 'slow'
    };
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 12000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 16000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 20000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 26000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 32000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 40000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 50000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 57000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 68000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 75000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 87000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 95000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 110000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 120000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 134000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 140000);
    setTimeout(() => {
      this.setState({ speed: 'fast' });
    }, 150000);
    setTimeout(() => {
      this.setState({ speed: 'slow' });
    }, 160000);
  }

  render() {
    const { speed } = this.state;
    return <Main speed={speed} />;
  }
}
