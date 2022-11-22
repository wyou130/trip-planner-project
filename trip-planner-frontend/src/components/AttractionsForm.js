import React from 'react';
import {useState} from 'react'

function AttractionsForm({ attractionType, onPost, onUpdateCities }) {
    const [cityNameForm, setCityNameForm] = useState("")
    const [stateNameForm, setStateNameForm] = useState("")
    const [concertDate, setConcertDate] = useState("")
    const [venueName, setVenueName] = useState("")
    const [venueType, setVenueType] = useState("")
    const [bandName, setBandName] = useState("")
    const [genre, setGenre] = useState("")
    const [eateryName, setEateryName] = useState("")
    const [downtown, setDowntown] = useState("")
    const [cuisineType, setCuisineType] = useState("")
    const [address,setAddress] = useState("")  
    
    function submitNewCity(e){
        e.preventDefault()
        
        if (attractionType === "concerts") {
            const newCity = {
                    name: cityNameForm,
                    state: stateNameForm,
            }
            onUpdateCities(newCity)
            const newBand = {
                    name: bandName,
                    genre: genre
            }
            const newConcert = {
                    date: concertDate,
                    venue_name: venueName,
                    venue_type: venueType,
                    band_id: newBand.id,
                    city_id: newCity.id
            } 
            fetch("http://localhost:9292/concerts",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newConcert, newBand, newCity})
            })
                .then(res=> res.json()) 
                .then(newConcertObj => {
                    onPost(newConcertObj)
                    onUpdateCities(newConcertObj.city)
                })
            setCityNameForm("")
            setStateNameForm("")
            setConcertDate("")
            setVenueName("")
            setVenueType("")
            setBandName("")
            setGenre("")
        }
            
        else {
            const newCity = {
                name: cityNameForm,
                state: stateNameForm,
            }
            onUpdateCities(newCity)
            const newEatery = {
                name: eateryName,
                cuisine_type: cuisineType,
                "downtown?": downtown,
                address: address,
                rating: 0,
                city_id: newCity.id
            }
            fetch("http://localhost:9292/eateries", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newEatery, newCity})
            })
            .then(res=> res.json())
            .then(newEateryObj => {
                onPost(newEateryObj)
                onUpdateCities(newEateryObj.city)
            }
        )}
        setCityNameForm("")
        setStateNameForm("")
        setEateryName("")
        setDowntown("")
        setCuisineType("")
        setAddress("")
    }
    
    return (
        <div>
            {attractionType === "concerts" ?
                <>
                    <h3>Add A Concert</h3>
                    <form onSubmit={submitNewCity}>
                        <div className='form-group row'>
                            <label className='col-sm-2 col-form-label'>City</label>
                            <div className='col-sm-3'>
                                <input placeholder="City Name" type="text" name="city" onChange={(e)=>setCityNameForm(e.target.value)} value={cityNameForm} className='form-control'/>
                            </div>
                            <label className='col-sm-1 col-form-label'>State</label>
                            <div className='col-sm-2'>
                                <input placeholder="State Initial" type="text" name="state" onChange={(e)=>setStateNameForm(e.target.value)}value={stateNameForm} className='form-control'/>
                            </div>
                            <label className='col-sm-1 col-form-label'>Date</label>
                            <div className='col-sm-2'>
                                <input placeholder="Date" type="text" name="Date" onChange={(e) => setConcertDate(e.target.value)} value={concertDate} className='form-control'/>
                            </div>
                        </div>
                        <br/>
                        <div className='form-group row'>
                            <label className='col-sm-2 col-form-label'>Venue</label>
                            <div className='col-sm-4'>
                                <input placeholder="Venue Name" type="text" name="Venue" onChange={(e)=>setVenueName(e.target.value)} value={venueName} className='form-control'/>
                            </div>
                            <label className='col-sm-2 col-form-label'>Venue Type</label>
                            <div className='col-sm-3'>
                                <input placeholder="Arena, Medium, Local?" type="text" name="Venue Type"onChange={(e)=>setVenueType(e.target.value)} value={venueType} className='form-control'/>
                            </div>
                        </div>
                        <br/>
                        <div className='form-group row'>
                            <label className='col-sm-2 col-form-label'>Band Name</label>
                            <div className='col-sm-4'>
                                <input placeholder="Band/Artist Name" type="text" name="name"onChange={(e)=>setBandName(e.target.value)} value={bandName} className='form-control'/>
                            </div>
                            <label className='col-sm-1 col-form-label'>Genre</label>
                            <div className='col-sm-4'>
                                <input placeholder="Genre" type="text" name="genre"onChange={(e)=>setGenre(e.target.value)} value={genre} className='form-control'/>
                            </div>
                        </div>
                        <br/>
                        <input type="submit" className='btn btn-primary'/>
                    </form>
                </>
                :
                <>
                    <h3>Add An Eatery</h3>
                    <form onSubmit={submitNewCity}>
                        <div className='form-group row'>
                            <label className='col-sm-2 col-form-label'>City</label>
                            <div className='col-sm-3'>
                                <input placeholder="City Name" type="text" name="city" onChange={(e)=>setCityNameForm(e.target.value)} value={cityNameForm} className='form-control'/>
                            </div>
                            <label className='col-sm-1 col-form-label'>State</label>
                            <div className='col-sm-2'>
                                <input placeholder="State Initial" type="text" name="state" onChange={(e)=>setStateNameForm(e.target.value)} value={stateNameForm} className='form-control'/>
                            </div>
                            <label className='col-sm-1 col-form-label'>Downtown?</label>
                            <div className='col-sm-2'>
                                <input placeholder="true or false" type="text" name="downtown?"onChange={(e)=>setDowntown(e.target.value)} value={downtown} className='form-control'/>
                            </div>
                        </div>
                        <br/>
                        <div className='form-group row'>
                            <label className='col-sm-2 col-form-label'>Address</label>
                            <div className='col-sm-9'>
                                <input placeholder="Address" type="text" name="Address"onChange={(e)=>setAddress(e.target.value)} value={address} className='form-control'/>
                            </div>
                        </div>
                        <br/>
                        <div className='form-group row'>
                            <label className='col-sm-2 col-form-label'>Name</label>
                            <div className='col-sm-4'>
                                <input placeholder="Eatery Name" type="text" name="Name"onChange={(e)=>setEateryName(e.target.value)} value={eateryName} className='form-control'/>
                            </div>
                            <label className='col-sm-2 col-form-label'>Cuisine Type</label>
                            <div className='col-sm-3'>
                                <input placeholder="Cuisine Type" type="text" name="cuisine type"onChange={(e)=>setCuisineType(e.target.value)} value={cuisineType} className='form-control'/>
                            </div>
                        </div>
                        <br/>
                        <input type="submit" className='btn btn-primary'/>
                    </form>
                </>
            }
        </div>
    )
}

export default AttractionsForm
