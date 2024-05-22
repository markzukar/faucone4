import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import './carousal.css'
import './home.css'

// import Header from '../layout/Header'
import PoweringBrands from './homePage/PoweringBrands'
import FivePoints from './homePage/FivePoints'
import ContributeToTheSocity from './homePage/ContributeToTheSocity'
import OurBrandServices from './homePage/OurBrandServices'
// import IndustriesWeServe from './homePage/IndustriesWeServe'
// import Globe from './homePage/Globe'
// import Awards from './homePage/Awards'
import Map from './homePage/Map'
import Footer from '../layout/Footer'
import BlueBg from './homePage/BlueBg';
import Faucone4Startup from './homePage/Faucone4Startup';
import CustomerSupport from './homePage/CustomerSupport';
import NewHeader from '../layout/NewHeader';


const Home = () => {






    return (
        <>
            {/* <Header /> */}
            <NewHeader />

            <PoweringBrands />





            <ContributeToTheSocity />
            <FivePoints />
            <Faucone4Startup />
            <BlueBg />
            <OurBrandServices />

            <CustomerSupport />




            {/* <IndustriesWeServe /> */}

            {/* <Globe /> */}

            {/* <Awards /> */}

            <Map />

            <Footer />


        </>
    )

}

export default Home