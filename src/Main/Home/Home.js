import React from 'react';
import { Container } from 'react-bootstrap';
import FeaturesSimple from '../../Features/FeaturesSimple/FeaturesSimple';
import SecondFeatures from '../../Features/SecondFeatures/SecondFeatures';
import TopFeatures from '../../Features/TopFeatures/TopFeatures';
import HotDeals from '../../Service/HotDeals/HotDeals';
import MainNav from '../../Shared/MainNav/MainNav';
import Nav from '../../Shared/Nav/Nav';

const Home = () => {
    return (

        <div>
            <Nav></Nav>
            <MainNav></MainNav>
            <TopFeatures></TopFeatures>
            <SecondFeatures></SecondFeatures>
            <HotDeals></HotDeals>
            <FeaturesSimple></FeaturesSimple>

        </div>

    );
};

export default Home;