import React from 'react';
import { Container } from 'react-bootstrap';
import './DisCountImage.css'

const DisCountImage = () => {
    return (
        <Container>
            <div className="discount-image">
                <img style={{ marginRight: '20px' }} src="https://i.ibb.co/R4WSPXw/jk-banner-6.jpg" alt="" /><img src="
https://i.ibb.co/d61BDfX/jk-banner-7.jpg" alt="" />
            </div>
        </Container>
    );
};

export default DisCountImage;