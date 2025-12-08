import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/launchpad.css';
import Connect from '../components/Connect';

const walletIcons = import.meta.glob('../assets/launchpad/*.{png,jpg,jpeg,svg}');

function Launchpad() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [wallets, setWallets] = useState([]);
  const location = useLocation();
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const openConnectModal = (wallet) => {
    setSelectedWallet(wallet);
    setIsConnectModalOpen(true);
  };

  const closeConnectModal = () => {
    setIsConnectModalOpen(false);
    setSelectedWallet(null);
  };

  const handleConnect = () => {
    // Implement connect logic here
    closeConnectModal();
  };

  useEffect(() => {
    const loadWallets = async () => {
      const walletData = await Promise.all(
        Object.entries(walletIcons).map(async ([path, importer]) => {
          const { default: image } = await importer();
          const filename = path.split('/').pop();
          const name = filename.split('.')[0].replace(/_/g, ' ');
          return { name, image };
        })
      );
      setWallets(walletData);
    };

    loadWallets();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('launchpad');

    let newTitle = 'Launchpad';
    let newDescription = 'The term you provided is not recognized. Please check the URL and try again.';

    setTitle(newTitle);
    setDescription(newDescription);
  }, [location.search]);

  return (
    <div className="launchpad-container">
      <header className="launchpad-header">
        <div className="container">
          <Link className="launchpad-navbar-brand" to="/">
            <span>CRYPTOSWEB3NETWORKS</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="#">DApps</Link></li>
              <li><Link to="#">NFT</Link></li>
              <li><Link to="#">Web3</Link></li>
              <li><button className="launchpad-btn-primary">Secure Wallet</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="launchpad-main">
        <div className="container">
          <h1>{title}</h1>
          <div className="notification">
            <p>{description}</p>
          </div>
          <div className="wallet-chooser">
            <h2>Choose wallet</h2>
            <div className="show-uninstalled">
              <span>Show uninstalled</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="wallet-list">
            {wallets.map((wallet, index) => (
              <button key={index} className="wallet-item" onClick={() => openConnectModal(wallet)}>
                <img src={wallet.image} alt={wallet.name} className="wallet-icon" />
                <span>{wallet.name}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {isConnectModalOpen && selectedWallet && (
        <Connect wallet={selectedWallet} onClose={closeConnectModal} onConnect={handleConnect} />
      )}
    </div>
  );
}

export default Launchpad;
