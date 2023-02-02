import React from 'react';
import Button from './Button';
const Card = ({ name, ticketsAvailable, date, imageUrl, id }) => {
  return (
    <div className="card-container">
      <img src={imageUrl} alt="" className="card-img" />
      <div className="card-main">
        <h1 className="card-title">{name}</h1>
      </div>
      <div className="card-body-container">
        <div className="card-info">
          <span className="card-date">{date}</span>
          <div className="card-tickets">
            {' '}
            Tickets Available:<span>&nbsp;</span>
            {ticketsAvailable > 0 ? (
              <span className="card-ticket-available">{ticketsAvailable}</span>
            ) : (
              <span className="card-ticket-notavailable">N/A</span>
            )}
          </div>
        </div>
        {ticketsAvailable > 0 ? (
          <Button
            name={name}
            ticketsAvailable={ticketsAvailable}
            date={date}
            status={false}
            id={id}
          />
        ) : (
          <Button
            name={name}
            ticketsAvailable={ticketsAvailable}
            date={date}
            status={true}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
