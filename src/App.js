import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }


  render() {
    // let sideDrawer;

    //     if (this.state.sideDrawerOpen) {
    //         sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
    //     }
    return (
      <div className="App">
        <Navbar hamburgerHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen }/>
        <Header />
      </div>
    );
  }
  
}

export default App;
