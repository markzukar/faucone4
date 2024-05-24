import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import india_map from '../../../img/india_map.PNG'
import gobal_map from '../../../img/gobal_map.PNG'
import map from '../../../img/map.png'


const Map = () => {
    return (
        <>
            <section className='tw-flex tw-items-center tw-justify-center tw-mt-10 tw-ml-20 tw-mr-20 tw-font-PuviMedium tw-rounded-3xl tw-border-solid tw-border-2 tw-border-gray-600 '>
                <img src={map} alt="" className='tw-w-full tw-p-6' />
            </section>

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