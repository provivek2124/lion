import React from 'react';
import Header from '../../components/header/header.component';
import VideoBanner from '../../components/video-banner/video-banner';
import GymnameConainer from '../../components/gymnameconainer/gymnameconainer';
import ImagesConainer from '../../components/images-conainer/images-conainer';
import Content from '../../components/content/content';
import Galler from '../../components/galler/galler';
import Footer from '../../components/footer/footer';

function HomePage() {
    return (
        <div>
            <Header/>
            <VideoBanner/>
            <GymnameConainer/>
            <ImagesConainer/>
            <Content/>
            <Galler/>
            <Footer/>
            </div>
    )
}

export default HomePage
