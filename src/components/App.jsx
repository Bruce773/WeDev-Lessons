import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HomePage from './HomePage.jsx';
import LessonList from './LessonList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classType: null,
    };
  }

  _renderClass(classType) {
    this.setState({
      classType: classType,
    });
  }

  render() {
    return (
      <div className='main'>
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    );
  }
}