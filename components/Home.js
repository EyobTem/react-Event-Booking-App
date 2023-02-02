import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
const Home = () => {
  const [search, setSearch] = useState('');
  var data = useSelector((state) => state.event);
  useEffect(() => {}, [search]);

  return (
    <div className="home-container">
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search By Event Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <span className="search-icon"></span>
      </div>
      <h1 className="home-text-main">
        EVENTS (
        {
          data.filter((event) =>
            event.name.toLowerCase().includes(search.toLowerCase())
          ).length
        }
        )
      </h1>
      <div className="App">
        {data.filter((event) =>
          event.name.toLowerCase().includes(search.toLowerCase())
        ).length > 0 ? (
          data
            .filter((event) =>
              event.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((event, index) => {
              return data.length > 0 ? (
                <div key={index} className={'block-' + index}>
                  <Card {...event} />
                  <hr />
                </div>
              ) : (
                <div>No Events</div>
              );
            })
        ) : (
          <div className="no-sow">
            <h1>No results found!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
