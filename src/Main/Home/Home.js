import React from 'react';
import FeaturesSimple from '../../Features/FeaturesSimple/FeaturesSimple';
import SecondFeatures from '../../Features/SecondFeatures/SecondFeatures';
import TopFeatures from '../../Features/TopFeatures/TopFeatures';
import ComputerLaptop from '../../Service/ComputerLaptop/ComputerLaptop';
import DisCountImage from '../../Service/DisCountImage/DisCountImage';
import FeaturedProduct from '../../Service/FeaturedProduct/FeaturedProduct';
import HotDeals from '../../Service/HotDeals/HotDeals';
import TopCategory from '../../Service/TopCategory/TopCategory';
import Footer from '../../Shared/Footer/Footer';
import MainNav from '../../Shared/MainNav/MainNav';
import Nav from '../../Shared/Nav/Nav';
import NewsLetter from '../../Shared/NewsLetter/NewsLetter';

const Home = () => {
    return (

        <div>
            <Nav></Nav>
            <MainNav></MainNav>
            <TopFeatures></TopFeatures>
            <SecondFeatures></SecondFeatures>
            <HotDeals></HotDeals>
            <FeaturesSimple></FeaturesSimple>
            <TopCategory></TopCategory>
            <FeaturedProduct></FeaturedProduct>
            <ComputerLaptop></ComputerLaptop>
            <DisCountImage></DisCountImage>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>

    );
};

export default Home;