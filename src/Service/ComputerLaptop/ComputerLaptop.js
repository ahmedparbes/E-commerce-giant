import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ComputerLaptop.css'

const ComputerLaptop = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/computer.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <Container>
            <h2 className="font" style={{}}>Computer & Laptop</h2>
            <hr />
            <div className="font all-computer-laptop">
                {
                    data.map(d => <div className="single-computer-laptop">
                        <img src={d.img} alt="" />
                        <h6>{d.name}</h6>
                        <p style={{ fontSize: '20px', color: 'blue', fontWeight: '700' }}>{d.Price}</p>
                        <button className="btn-primary btn-btn">Buy Now</button>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default ComputerLaptop;