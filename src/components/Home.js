
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class Home extends Component {
  render() {
    const mainName = {
      color: '#FFF',
      fontSize: '5vw',
      fontWeight: 700,
      lineHeight: 'normal',
    };

    const mainNum = {
      color: '#5E191A',
      fontSize: '5vw',
      fontWeight: 700,
      lineHeight: 'normal',
    };

    const mainDateTime = {
      color: '#FFF',
      fontSize: '2vw',
      fontWeight: 700,
      lineHeight: 'normal',
    };

    const mainLocation = {
      color: '#FFF',
      fontSize: '2vw',
      fontWeight: 700,
      lineHeight: 'normal',
    };

    const apply = {
      color: '#FFF',
      backgroundColor: '#702122',
      fontSize: '2vw',
      fontWeight: 500,
      lineHeight: 'normal',
      textDecoration: 'none',
      border: '1px',
    };

    const containerStyle = {
        display: 'flex',
        margin: '5vw auto', // Adjust the margin
        justifyContent: 'space-evenly',
        backgroundColor: '#853536',
      };
  
      const leftStyle = {
        flex: '2',
        textAlign: 'left',
        marginLeft: '12vw', // Adjust the margin
      };
  
      const rightStyle = {
        flex: '1',
        textAlign: 'right',
        marginRight: '12vw', // Adjust the margin
      };

    return (
      <div id="home" style={containerStyle}>
        <div id="Main-left" style={leftStyle}>
          <h1 style={mainName}>
            ElleHacks <span style={mainNum}>2024</span>
          </h1>
          <div style={mainDateTime} id="Main-Text">
            <p style={mainDateTime}>Febuary 16-18, 2024 </p>
            <p style={mainLocation}>York University, Toronto, ON </p>
          </div>
          <Button variant="link" href="" style={apply}>Applications are closed</Button>
        </div>

        <div id="Main-right" style={rightStyle}>
          <Image
            src={require('../assets/Simplification.png')}
            alt="ElleHacks Logo"
            fluid
            style={{ maxHeight: '150vw', marginRight: '10px' }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
