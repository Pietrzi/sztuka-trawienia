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
    console.log("bla");
  }


  render() {
    let sideDrawer;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
        }
    return (
      <div className="App">
        <Navbar hamburgerHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        <Header />
      </div>
    );
  }
  
}

export default App;
