import React from 'react';
import img from '../../../images/bikess.jpg'

const About = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center my-5"><strong>WHAT</strong> WE DO</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-5">
                        <h5> Service</h5>
                        <p>What We Do</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime fugit itaque excepturi autem quibusdam earum expedita debitis eveniet. Eaque!</p>
                    </div>
                    <div className="mt-5">
                        <h5>Auto Detailing</h5>
                        <p>What We Do</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam officiis? Quibusdam placeat, itaque molestiae quas magni aut maiores, officiis, unde odio suscipit dignissimos?</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="mt-5">
                        <h5>Warranty Information</h5>
                        <p>What We Do</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, consequatur! </p>
                    </div>
                    <div className="mt-5">
                        <h5>Service Specials</h5>
                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates optio quasi inventore vel at mollitia assumenda, voluptas incidunt dolor molestiae delectus aspernatur aperiam adipisci?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;