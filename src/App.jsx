import React from 'react'
import Footer from "../src/Components/Footer"
import Navbar from "../src/Components/Navbar"
import Calculator from "../src/Components/Calculator"

function Cont() {
    return (
        <>
            <div className='navbar'>
                <Navbar/>
            </div>
                <Calculator/>
            <div className='footer'>
                <Footer/>
            </div>
        </>
    )
}
export default Cont