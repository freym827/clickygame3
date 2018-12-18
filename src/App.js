import React from "react"
import Header from "./components/Header"
import NickPic from "./components/NickPic"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import nicks from "./nicks.json";

 class App extends React.Component {
 
   state = {
    nicks
  };
   shuffleNicks = id => {
    const nicks = this.state.nicks
    const reclick = document.getElementById("result")
    let score = Number(document.getElementById("s").innerHTML)
    
    for(let i=0;i<nicks.length;i++) {
      if(nicks[i].id === id) {
        nicks[i].count +=1
        if(nicks[i].count === 2) {
          reclick.innerHTML = "You Guessed WRONG. Start Over"
          this.endgame()
          return
        }
      }
    }
    reclick.innerHTML = "You Guessed Correctly"
    score +=1
    document.getElementById("s").innerHTML = score
    let currentIndex = nicks.length, temp, rand;
     while (0 !== currentIndex) {
      rand = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temp = nicks[currentIndex];
      nicks[currentIndex] = nicks[rand];
      nicks[rand] = temp;
    }
     this.setState({ nicks });
  };
   endgame = () => {
    let score = Number(document.getElementById("s").innerHTML)
    let tscore = Number(document.getElementById("ts").innerHTML)
    if(score>tscore) {
      document.getElementById("ts").innerHTML = score
    }
    document.getElementById("s").innerHTML = 0
    const nicks = this.state.nicks
    for(let i=0;i<nicks.length;i++) {
        nicks[i].count =0
    }
    this.setState({ nicks });
  }

  render() {
    return (
       <div>
         <Header />
        <Wrapper>
          {this.state.nicks.map(nicks => (
            <NickPic
              shuffleNicks={this.shuffleNicks}
              id={nicks.id}
              key={nicks.id}
              name={nicks.name}
              image={nicks.image}
              count={nicks.count}
            />
          ))}
        </Wrapper>
         <Footer />
 
       </div>
     )
   }
 }
 
 export default App