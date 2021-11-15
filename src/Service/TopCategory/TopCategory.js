import React from 'react';
import { Container } from 'react-bootstrap'
import './TopCategory.css'

const TopCategory = () => {
    return (
        <Container>
            <div className="font top-category">
                <div>
                    <h5>Top Categories This Week</h5>
                    <p style={{ textAlign: 'left', fontSize: '15px' }}>Aliquam eget consectetuer habitasse interdum.</p>
                    <button style={{ padding: '5px, 20px' }} className="btn-primary">Buy Now</button>
                </div>
                <div className="single-top-category">
                    <img src="https://i.ibb.co/TrSzs1j/category-slider-1.jpg" alt="" />
                    <h6>TV AND AUDIO</h6>
                </div>
                <div className="single-top-category">
                    <img src="
            https://i.ibb.co/sFpcHwX/category-slider-2.jpg" alt="" />
                    <h6>Games & Consoles</h6>
                </div>
                <div className="single-top-category">
                    <img src="
            https://i.ibb.co/kgnVWMt/category-slider-3.jpg" alt="" />
                    <h6>Furnitures & Decor</h6>
                </div>
                <div className="single-top-category">
                    <img src="
            https://i.ibb.co/hHdXJGw/category-slider-4.jpg" alt="" />
                    <h6>Fashion & Clothing</h6>
                </div>
                <div className="single-top-category">
                    <img src="
            https://i.ibb.co/jHw67ZN/category-slider-5.jpg" alt="" />
                    <h6>Computer & Laptop</h6>
                </div>
            </div>
        </Container>
    );
};

export default TopCategory;