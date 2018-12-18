import React from "react"
import './Header.css';
 class Header extends React.Component {
    render() {
        return (
            <div className="header">
              <div className="tophead">
                <h1 id="result" className="resulttxt">Click a Nick to play!</h1>
                <p className="score">Score:<span id="s">0</span></p>
                <p className="tscore">Top Score:<span id="ts">0</span></p>
              </div>
              <div className="bottomhead">
                <h1 className="btitle">Clicky Game</h1>
                <h1 className="binstruct">Click an image to begin!</h1>
                <p className="binstruct">Dont click an image more than once!</p>
               </div>
             </div>
         )
     }
 }
 
 export default Header