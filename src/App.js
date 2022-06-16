import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HotelInfo from './components/Main/HotelInfo';
import Welcome from './components/Main/Welcome';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />    

        <main id="wrapper">
        <Welcome/>
        <HotelInfo />
        </main>      

        <Footer />
      </div>
    );
  }
}
export default App;
