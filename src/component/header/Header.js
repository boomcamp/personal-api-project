import React, { Component} from 'react'  
import { HashRouter, Link } from 'react-router-dom';


class Header extends Component {
  render(){
      return(
        <HashRouter> 
        <div className="banner">
                    <div className="inner-banner">
                        <header className="masthead">
                             
                              <div className="inner">
                                  <h3 className="masthead-brand">  <a href="index.html">PIX<small>ABAY</small></a></h3>
                                  <nav className="nav nav-masthead justify-content-center">
                                  <Link className="nav-link" to="/">PHOTOGRAPHY</Link>
                                  <Link className="nav-link" to="/">VIDEOS</Link>
                                  <Link className="nav-link" to="/">ILLUSTRATOR</Link>
                                  </nav>
                               </div>
                          </header>
                        <div className="bg-color" id="banner">
                            <div class="inner">
                                <header>
                                  <h1>This is Photography</h1>
                                  <p>Great photography is about depth of feeling, not depth of field.</p>
                                  <p>- Peter Adams</p>
                                 
                                  
                                </header>
                              </div>
                          
                        </div>

                      </div>
                </div>
           
        </HashRouter>
)
}

}

export default Header;