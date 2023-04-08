import React from 'react';
import StepCard from './StepCard';

class Preloader extends React.Component {
  componentDidMount() {
    this.id = setTimeout(() => window.location.href = this.props.to, 8000);
  }
  componentWillUnmount() {
    clearTimeout(this.id);
  }
  render() {
    return (
      <div className="preloader">
        <h1>Loading...</h1>
        <StepCard />
      </div>
    );
  }
}

export default Preloader;
