import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './component/header/Header'; 
import Search from './component/search/Search';

import ImagesFooter from './component/imagesFooter/ImagesFooter';

import './index.css';
import './App';


class App extends Component {
  render () {
    return (
        <MuiThemeProvider>
          <div>
            <Header />
            <Search />
            <ImagesFooter />
            
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
