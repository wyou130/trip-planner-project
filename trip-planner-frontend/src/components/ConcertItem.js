import React from 'react';

function ConcertItem({ attraction, handleDelete }) {
    return (
        <div className="card-deck col-sm-3 my-3">
            <div className="card" style={{height: '300px'}}>
                <div className="card-body">
                    <h4 className='card-title'>Date: {attraction.date}</h4>
                    <div className='card-text'>
                        {attraction.band ? 
                            <>
                                <p>Who's Playing: {attraction.band.name}</p>
                                <p>Genre: {attraction.band.genre}</p>
                            </> 
                            : 
                            null
                        }
                        <p>Venue: {attraction.venue_name}</p>
                        <p>Venue Type: {attraction.venue_type}</p>
                        <button 
                            className='btn btn-danger' 
                            onClick={() => handleDelete(attraction)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConcertItem