import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const BookEvent = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [attendeesList, setattendeesList] = useState([
    {
      id: 1,
      name: "",
    },
  ]);
  console.log("attendeesList", attendeesList);
  let { tickets, name, date, id } = location.state;
  useEffect(()=>{

  },[attendeesList])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/confirm", {
      state: { id: id, name: name, tickets: tickets, date: date ,attendeesList:attendeesList.length},
    });
  };
  const handleAttendeelist = () => {
    if(tickets>5 && attendeesList.length<6){
    setattendeesList([
      ...attendeesList,
      { id: attendeesList.length + 1, name: "" },
    ]);
}
 else   if(attendeesList.length<tickets &&attendeesList.length<6){
    setattendeesList([
        ...attendeesList,
        { id: attendeesList.length + 1, name: "" },
      ]);
    }
    else
     alert('YOU CAN ONLY BOOK MAXIMUM OF SIX ATTENDEES')
  };
  return (
 
      <form className="event-main" onSubmit={handleSubmit(onSubmit)}>
        <h1>{name}</h1>
        <h2>{date}</h2>
        <div className="event-tickets-name">
          <h2>Tickets Available:</h2>
          <h3>{tickets}</h3>
        </div>

        <hr />
        <div className="event-input">
          <label>Name</label>
          
          <input
            type="text"
            placeholder="First name Last Name
"
            {...register("firstName", { required: true, minLength: 10 })}
          />
          <p>
          {errors.firstName && (
            <p className="form-error">Please enter your name</p>
          )}</p>
          <label>Email</label>
          <input
            type="email"
            placeholder="username@domain.com
"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <p> {errors.email && <p className="form-error">Please enter your email</p>}</p>
          <label>Mobile</label>
          <input
            type="tel"
            placeholder="+91 XXX XXX XXXX

"
            {...register("tel", {
              required: true,
              pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            })}
          />
         <p> {errors.tel && (
            <p className="form-error">
              Please check the Mobile number('+91 XXX XXX XXXX')
            </p>
          )}</p>
          <label>Attendees</label>
          {attendeesList.map((attendee,index) => {
            return (
              <div className="form-attendee">
                {" "}
              <div className="form-label"> <label>{index +1}</label></div> 
                <div className="form-attendee-input">

                <input
                  type="text" className="test"
                  placeholder="First name Last Name
        "
                  {...register("name", { required: true, minLength: 10 })}
                />
                <p>{errors.name && (
                  <p className="form-error">Please enter your name</p>
                )}</p>
                </div>
                
              </div>
            );
          })}
          <button
            onClick={() => handleAttendeelist()}
            className="event-button-add"
            type="button"
          >
            + Add an Attendee
          </button>
          <div></div>
        </div>
        <hr />

        <div className="event-tickets-button">
          {" "}
          <button
            className="card-button"
            style={{ backgroundColor: "#FC732F", color: "white" }}
            type="submit"
          >
            Book Tickets
          </button>{" "}
          <button className="card-button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
  
  );
};

export default BookEvent;
