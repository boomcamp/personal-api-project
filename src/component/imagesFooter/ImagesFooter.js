import React, { Component } from 'react'   
import { HashRouter} from 'react-router-dom';


class ImagesFooter extends Component {
  render(){
      return( 
        <HashRouter>
            <main role="main">
                 
                
                 <section id="galleries">
                          
                           </section>
                 <section id="one" className="wrapper post bg-img1" >
                     <div className="inner current">
                         <article className="box">
                           <header>
                             <h2>LIGHT TRAILS</h2>
                           </header>
                           <div className="content-milky-way">
                             <p>" If you do not expect the unexpected you will not find it, for it is not to be reached by search or trail. "
                                </p>
                           </div>
                           <footer>
                               <p>- Heraclitus </p>
                           </footer>
                         </article>
                       </div>
                  
                   </section>
                   <section id="one" className="wrapper post bg-img2" >
                       <div className="inner current">
                           <article className="box">
                             <header>
                               <h2>MILKY WAY</h2>
                               
                             </header>
                             <div className="content-milky-way">
                               <p>"Evolution can go to hell as far as I am concerned. What a mistake we are. We have mortally wounded this sweet life-supporting planet - the only one in the whole Milky Way - with a century of transportation whoopee."</p>
                             </div>
                             <footer>
                               <p>- Kurt Vonnegut</p>
                             </footer>
                           </article>
                         </div>
                    
                     </section>
   
                     <section id="one" className="wrapper post bg-img3" >
                         <div className="inner current">
                             <article className="box">
                               <header>
                                 <h2>SILKY WATER</h2>
                                 
                               </header>
                               <div className="content-silky-water">
                                 <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</p>
                               </div>
                               <footer>
                                 <p>- Aaron Siskind</p>
                               </footer>
                             </article>
                           </div>
                       </section>
              
                   </main> 
                </HashRouter>
)
  };

}

export default ImagesFooter ;