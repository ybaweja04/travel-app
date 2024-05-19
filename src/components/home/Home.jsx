import React from 'react'
import "./home.css"
import { IoLocationSharp } from "react-icons/io5";

const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'></div>
            <div className='homeContent container'>

                <div className='textDiv'>
                    <div className='homeTitle'>
                        <h1>Search Your Holiday</h1>
                    </div>
                </div>

                <div className='card grid'>
                    <div className='destination'>
                        <label htmlFor='city'>Search your destination:</label>
                        <div className="input flex">
                            <input type='text' placeholder='Search...'></input>
                            <IoLocationSharp className='icon'/>
                        </div>
                    </div>

                    <div className='selectDate'>
                        <label htmlFor='date'>Select your date:</label>
                        <div className="input flex">
                            <input type='date' ></input>
                        </div>
                    </div>

                    <div className='maxPrice'>
                        <div className="label_total flex">
                            <label htmlFor='price'>Max price:</label>
                            <h3 className='total'>₹100000</h3>
                        </div>
                        <div className="input flex">
                            <input type='range' max= "10000" min= "5000" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
