import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop'

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }


  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    // let sideDrawer;

    //     if (this.state.sideDrawerOpen) {
    //         sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
    //     }
    return (
      <div className="App">
        <Navbar hamburgerHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen }/>
        {backdrop}
        <Header />
      </div>
    );
  }
  
}

export default App;
