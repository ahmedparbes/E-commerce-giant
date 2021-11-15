import React from 'react';
import { Container } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <Container>
            <div className="font subscribe">
                <div className="single-sub">
                    <h4>Newsletter Sign Up</h4>
                    <p style={{ textAlign: 'left', fontSize: '16px' }}>(Get 30% OFF coupon today subscibers)</p>
                </div>
                <div className="single-sub">
                    <p style={{ textAlign: 'left', fontSize: '16px' }}> Join 226.000+ subscribers and get a new discount  <br /> coupon on every Monday.</p>
                </div>
                <div className="single-sub">
                    <input style={{ height: '40px' }} type="text" name="" id="" placeHolder='Enter Your Email' />
                    <button style={{ backgroundColor: 'blue', color: 'white', padding: '2px 12px', borderRadius: '6px', marginTop: '5px' }}>Subscribe</button>
                </div>
            </div>
        </Container>
    );
};

export default NewsLetter;