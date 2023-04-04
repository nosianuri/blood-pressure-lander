// import React from 'react';
// import { Redirect } from 'react-router-dom';

// class Preloader extends React.Component {
//   state = {
//     redirect: false
//   };

//   componentDidMount() {
//     this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
//   }

//   componentWillUnmount() {
//     clearTimeout(this.id);
//   }

//   render() {
//     return this.state.redirect ? (
//       <Redirect to={this.props.to} />
//     ) : (
//       <div className="preloader">
//         <h1>Loading...</h1>
//       </div>
//     );
//   }
// }

// export default Preloader;


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
