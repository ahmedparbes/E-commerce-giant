import React from 'react';
import { Container } from 'react-bootstrap';
import './TopFeatures.css'

const TopFeatures = () => {
    return (
        <Container>
            <div className="font all-features">
                <div className="features-div">
                    <img src="https://i.ibb.co/2syvgM1/policy1.png" alt="" />
                    <div className="info">
                        <h6>FREE DELIVERY
                        </h6>
                        <small>
                            For all oders over $120
                        </small>
                    </div>
                </div>
                <div className="features-div">
                    <img src="
        https://i.ibb.co/hXnC0HC/policy2.png" alt="" />
                    <div className="info">
                        <h6>FREE DELIVERY
                        </h6>
                        <small>
                            For all oders over $120
                        </small>
                    </div>
                </div>
                <div className="features-div">
                    <img src="
        https://i.ibb.co/1m78yFn/policy3.png" alt="" />
                    <div className="info">
                        <h6>FREE DELIVERY
                        </h6>
                        <small>
                            For all oders over $120
                        </small>
                    </div>
                </div>
                <div className="features-div">
                    <img src="
        https://i.ibb.co/Srm0b9S/policy4.png" alt="" />
                    <div className="info">
                        <h6>FREE DELIVERY
                        </h6>
                        <small>
                            For all oders over $120
                        </small>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TopFeatures;