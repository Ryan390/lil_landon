import React, { useState, useEffect } from 'react';

const HotelInfo = () => {
    const [welcome_arrival, setArrivalInformation] = useState([])
    const [welcome_services, setwelcomeServices] = useState([])
    const [welcome_accessibility, setWelcomeAccessibility] = useState([])

    const loadArrivalInformation = async () => {
        const response = await fetch('https://h1jk1z1fy3.execute-api.eu-west-1.amazonaws.com/Production/arrival');
        let jsonData = await response.json();

        setArrivalInformation(jsonData)
    }

    const loadWelcomeServices = async () => {
        const response = await fetch('https://h1jk1z1fy3.execute-api.eu-west-1.amazonaws.com/Production/services');
        let jsonData = await response.json();

        setwelcomeServices(jsonData)
    }

    const loadWelcomeAccessibility = async () => {
        const response = await fetch('https://h1jk1z1fy3.execute-api.eu-west-1.amazonaws.com/Production/accessibility');
        let jsonData = await response.json();

        setWelcomeAccessibility(jsonData)
    }

    useEffect(() => {
        loadArrivalInformation();
        loadWelcomeServices();
        loadWelcomeAccessibility();
    }, []);

    return (
        <div className="scene" id="hotelinfo">
            <article className="heading">
                <h1>Essential Info</h1>
            </article>
            <article id="usefulinfo">
                <section id="arrivalinfo">
                    <h2>Arrival Information</h2>
                    <ul>
                        {
                            welcome_arrival.map((checklist) =>
                                <li><strong>{checklist.title}</strong>{checklist.text}</li>
                            )
                        }
                    </ul>
                </section>
                <section className="checklist" id="services">
                    <h2>Services and Amenities</h2>
                    <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
                    <ul>
                        {
                            welcome_services.map((service) =>
                                <li>{service.text}</li>
                            )
                        }
                    </ul>
                </section>
                <section className="checklist" id="accessibility">
                    <h2>Accessibility</h2>
                    <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
                    <ul>
                        {
                            welcome_accessibility.map((info) =>
                                <li>{info.text}</li>
                            )
                        }
                    </ul>
                </section>
            </article>
            {/* <article id="greenprogram">
                <h2>Landon Green Program</h2>
                <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we???re saving energy in every socket, outlet, and switch. We???ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
            </article> */}
        </div>
    )
}

export default HotelInfo;