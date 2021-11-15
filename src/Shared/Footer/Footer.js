import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <div className="font all-footer-info">
                <div className="bigger-footer">
                    <img src="https://i.ibb.co/s2VDVJZ/logo-white.png" alt="" />
                    <p> We are a team of designers and developers that create <br /> high quality WordPress, Magento, Prestashop, Opencart.</p>
                    <p><span style={{ color: 'blue' }}>Address:</span> The Barn, Ullenhall, Henley in Arden B578 5C, England.</p>
                    <p><span style={{ color: 'blue' }}>Mobile:</span> +123.456.789 – +123.456.678</p>
                </div>
                <div>
                    <h4>Information</h4>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Customer Service</li>
                    <li>Return Policy</li>
                </div>
                <div>
                    <h4>My Account</h4>
                    <li>My account</li>
                    <li>Order History</li>
                    <li>Wishlist</li>
                    <li>Newsletter</li>
                    <li>Order History</li>
                    <li>International Orders</li>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <li>Special Offers</li>
                    <li>Gift Cards</li>
                    <li>Privacy Policy</li>
                    <li>Teams of Use</li>
                    <li>Portfolio</li>
                    <li>FAQs</li>
                </div>
            </div>

            <div className="font">
                <p>© Copyright 2021 Junko - All Rights Reserved - Powered by Ahmed.</p>
            </div>
        </Container>
    );
};

export default Footer;