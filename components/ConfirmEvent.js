import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { buyEvent } from '../store/eventReducer';
import { useDispatch } from 'react-redux';
const ConfirmEvent = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { name, date, id, attendeesList } = location.state;
  const handleSubmit = () => {
    dispatch(buyEvent({ id: id, attendeesList: attendeesList }));
    navigate('/');
  };
  return (
    <div className="confirm-event">
      <div className="confirm-event-container">
        <div className="confirm-event-top">
          <h3>You have booked </h3>
          <h1 className="confirm-event-attendeelist">{attendeesList}</h1>
          <h4>
            {' '}
            <strong> tickets</strong>{' '}
          </h4>
          <h3>for</h3>
        </div>

        <hr />
        <h1>{name}</h1>
        <h2>{date}</h2>
        <div className="event-tickets-button">
          {' '}
          <button
            className="card-button"
            style={{ backgroundColor: '#FC732F', color: 'white' }}
            type="submit"
            onClick={() => handleSubmit()}
          >
            Make Payment
          </button>{' '}
          <button className="card-button" onClick={() => navigate(-1)}>
            Back To Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEvent;
