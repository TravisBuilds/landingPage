import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useInjectedWeb3 from '../components/Hooks/useInjectedWeb3';
import useLoadinjectedEthersState from '../components/Hooks/useLoadInjectedEthersState';
import AvatarGenerator from '../components/AvatarGenerator';
import HomeTop from '../components/HomeTop';
import HomeMiddle from '../components/HomeMiddle';
import HomeBottom from '../components/HomeBottom';
import Footer from '../components/Footer';
import ProductProvider from '../contexts/ProductProvider';
import WalletProvider from '../contexts/WalletProvider';
import User from '../libs/user';

const Home = () => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };

  const wallet = useContext(WalletProvider.context);
  const { products } = useContext(ProductProvider.context);

  useInjectedWeb3();
  useLoadinjectedEthersState();

  const generateAvatar = () => {
    setShowAvatarModal(true);
    User.save({
      email,
      walletAddress: wallet.address
    });
  };

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
