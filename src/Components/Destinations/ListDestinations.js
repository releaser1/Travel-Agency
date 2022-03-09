import React, {useState} from 'react';
import {BiTimeFive} from 'react-icons/bi'
import destinationsData from './DestinationsData';
import {BrowserRouter as Router, Link} from 'react-router-dom'

import '../Destinations/listDestinations.css'

function ListDestinations(props) {
    /* Input state */
    const [firstInput, setFirstInput] = useState()
    const [secondInput, setSecondInput] = useState()

    /* category state */
    const [trip, setTrip] = useState([false, false])
    const [hike, setHike] = useState([false, false])
    const [mountains, setMountains] = useState([false, false])
    const [beach, setBeach] = useState([false, false])
    const [all, changeAll] = useState(false)
    const [price, changePrice] = useState(1600)


    console.log(600 <= firstInput && 2700 <= secondInput && secondInput > firstInput)
    console.log(secondInput > firstInput)
    console.log(600 <= firstInput)
    console.log(2700 <= secondInput)


    /* Category choosing functions */
    function changeTrip() {
        setTrip([false, true])
        setHike([false, false])
        setMountains([false, false])
        setBeach([false, false])
        changeAll(false)
        return
    }

    function changeHike() {
        setHike([false, true])
        setTrip([false, false])
        setMountains([false, false])
        setBeach([false, false])
        changeAll(false)
        return
    }

    function changeMountains() {
        setMountains([false, true])
        setHike([false, false])
        setTrip([false, false])
        setBeach([false, false])
        changeAll(false)
        return
    }

    function changeBeach() {
        setBeach([false, true])
        setMountains([false, false])
        setHike([false, false])
        setTrip([false, false])
        changeAll(false)
        return
    }


    function allCategory() {
        setBeach([true, false])
        setMountains([true, false])
        setHike([true, false])
        setTrip([true, false])
        changeAll(true)
        return
    }

    /* Input calculator functions */
    function inputOne (event) {
        setFirstInput(event.target.value)   
    }
    
    function inputTwo (event) {
        setSecondInput(event.target.value)
    
    }



    const liber = 'https://media.cntraveler.com/photos/57a2278b29716cb04b9387ac/master/pass/torres-del-paine-national-park-GettyImages-548748529.jpg'

    const style = { 
        backgroundImage: `url(${liber})`
    }

    const destinationsFilter = <div className="filter-cards" > {destinationsData.filter((item) => {
        if(hike[0] && mountains[0] && trip[0] && beach[0] && all || !hike[1] && !mountains[1] && !trip[1] && !beach[1] && !all) {
            if(item.price >= firstInput && secondInput >= firstInput && secondInput >= item.price || price <= 0 || firstInput === undefined && secondInput === undefined) {
                return item;                
                }            
        } 
        if(item.type === 'trip' && trip[1] && !all ) {
            if(item.price >= firstInput && secondInput >= firstInput && secondInput >= item.price || price <= 0 || firstInput === undefined && secondInput === undefined) {
                return item;                
                }           
        }
        if(item.type === 'beach' && beach[1] && !all ) {
            if(item.price >= firstInput && secondInput >= firstInput && secondInput >= item.price || price <= 0 || firstInput === undefined && secondInput === undefined) {
                return item;                
        }    
        }
        if(item.type === 'hiking' && hike[1] && !all ) {
            if(item.price >= firstInput && secondInput >= firstInput && secondInput >= item.price || price <= 0 || firstInput === undefined && secondInput === undefined) {
                return item;                
        }    
        }
        if(item.type === 'mountains' && mountains[1] && !all ) {
            if(item.price >= firstInput && secondInput >= firstInput && secondInput >= item.price || price <= 0 || firstInput === undefined && secondInput === undefined) {
                return item;                
        }    
        }
        }
    ).map((val) => 
        <div key={val.id} className="cards background-image-cards" style={{backgroundImage: `url(${val.image})`}}>
            <img src={val.image} alt={val.id} />
            <span className="price-card">${val.price}</span>
            <h1>{val.name}</h1>
            <span className="card-time"><BiTimeFive className="time-icon"/><span className="time-days">{val.time}</span></span>
            <span className="details-card">Details</span>
        </div>
    )} </div>





    return (
        
        <div className="list-destinations-container">
            <div className="filter-container">
                <div className="filter-child-1">
                    <button><Link to="/login">Login</Link></button>
                </div>
                <div className="filter-child-2" style={style}>
                        <span className="btn-filter-1 filter-btn" onClick={changeTrip}>Trip</span>
                        <span className="btn-filter-2 filter-btn" onClick={changeHike}>Hike</span>
                        <span className="btn-filter-3 filter-btn" onClick={changeMountains}>Mountains</span>
                        <span className="btn-filter-4 filter-btn" onClick={changeBeach}>Beach</span>
                        <span className="btn-filter-5 filter-btn" onClick={allCategory}>All</span>
            

                        <div className="filter-input">
                            <span className="input-element-1">Price Starting at :</span>
                            <input type="text" className="input-element-2" value={firstInput} onChange={inputOne}/>
                            <span className="input-element-3">to</span>
                            <input type="text" className="input-element-4" value={secondInput} onChange={inputTwo}/>
                            <span className="input-element-5">$</span>
                        </div>
                </div>
                <div>
                    {destinationsFilter}
 
                </div>
            </div>
        </div>
    );
}

export default ListDestinations;