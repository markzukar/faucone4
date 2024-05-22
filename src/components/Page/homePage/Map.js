import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import india_map from '../../../img/india_map.PNG'
import gobal_map from '../../../img/gobal_map.PNG'
import map from '../../../img/map.png'


const Map = () => {
    return (
        <>
            <img src={map} alt="" className='tw-w-full tw-mt-20' />

            {/* old code */}
            <section hidden className=' lg:tw-w-[70%] tw-mx-auto lg:border tw-mt-10 lg:tw-rounded-lg lg:tw-shadow-md'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="tw-mb-3 "
                >
                    <Tab eventKey="home" title="India">
                        <img src={india_map} alt="" className='tw-mx-auto tw-mt-10' />
                    </Tab>
                    <Tab eventKey="profile" title="Gobal">
                        <img src={gobal_map} alt="" className='tw-mx-auto tw-mt-10' />
                    </Tab>

                </Tabs>
            </section>
        </>
    )
}

export default Map