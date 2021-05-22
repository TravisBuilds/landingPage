import React from 'react';
import HomeTop from '../components/HomeTop';
import HomeMiddle from '../components/HomeMiddle';
import HomeBottom from '../components/HomeBottom';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="landing">
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
      <Footer />
    </div>
  );
};

export default Home;
