import React from "react";
import './NickPic.css';
 const NickPic = props => (
  <img onClick={() => props.shuffleNicks(props.id)} className="nickpics" alt={props.name} src={props.image} />
);
 export default NickPic;