import React from 'react';
import { useNavigate } from 'react-router-dom';
const Button = ({ status ,id,ticketsAvailable,name,date}) => {
  let navigate=useNavigate()
  
  var str = "";
  var url = "";
  if (status) {
    str = "Sold Out";
    url =
      "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/sold-out.png";
  } else {
    str = "Book Event";
    url =
      "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/book.png";
  }
  return (
    <button disabled={status} className="card-button" onClick={()=>navigate(`/event/${id}`,{state:{id:id,name:name,tickets:ticketsAvailable,date:date}})}>
      <img src={url} alt="" className="button-img" />
    <span className="card-button-text">{str}</span>  
    </button>
  );
};

export default Button;
