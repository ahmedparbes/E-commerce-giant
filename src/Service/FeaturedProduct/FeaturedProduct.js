import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './FeaturedProduct.css'

const FeaturedProduct = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/featured.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <Container>
            <h2 style={{ marginTop: '40px', marginBottom: '30px' }} className="font">Featured Products
            </h2>
            <hr />
            <div className="font featured-products-all">
                {
                    data.map(d => <div className="featured-products-single" style={{ display: 'flex' }}>
                        <div>
                            <img src={d.img} alt="" />
                        </div>
                        <div className="featured-text">
                            <h6>{d.name}</h6>
                            <p>{d.Price}</p>
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default FeaturedProduct;