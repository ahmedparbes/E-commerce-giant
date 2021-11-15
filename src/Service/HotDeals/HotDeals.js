import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './HotDeals.css'

const HotDeals = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <Container>
                <h2 className='font' style={{ borderBottom: '2px solid blue', marginTop: '60px' }}>Hot Deals Products</h2>
                <div className='font all-gadget'>

                    {
                        data.map(d => <Container>
                            <div className="single-gadget">
                                <img src={d.img} alt="" />
                                <h6>{d.name}</h6>
                                <p style={{ color: 'blue', fontWeight: '600' }}>{d.Price}</p>
                                <button className="btn-primary">Buy Now</button>
                            </div>
                        </Container>)
                    }
                </div>
            </Container>
        </>
    );
};

export default HotDeals;