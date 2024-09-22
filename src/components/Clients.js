import React from 'react';
import kws from '../images/clients/metabullai.png';
import geps from '../images/clients/starter.svg';
import protergia from '../images/clients/koreafalcon.png';
import tires4u from '../images/clients/tires4u.png';

const clientImage = {
    height: '5rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-300">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out w-1/6">
                            <img src={kws} alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out">
                            <img src={protergia} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out">
                            <img src={geps} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out">
                            <img src={tires4u} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;