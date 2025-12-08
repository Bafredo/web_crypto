import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/launchpad.css';

function Launchpad() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [displayedWallets, setDisplayedWallets] = useState([]);
  const location = useLocation();

  const wallets = [
    { name: 'Exodus', image: 'https://cryptosweb3networks.com/img/exodus.png' },
    { name: 'Trust', image: 'https://cryptosweb3networks.com/web3bridge.io/img/trust-wallet.png' },
    { name: 'Wallet connect', image: 'https://cryptosweb3networks.com/web3bridge.io/img/walletconnect.png' },
    { name: 'Nano x plus', image: 'https://cryptosweb3networks.com/web3bridge.io/img/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png' },
    { name: 'Tangem', image: 'https://cryptosweb3networks.com/web3bridge.io/img/tangem.png' },
    { name: 'Arculus', image: 'https://cryptosweb3networks.com/web3bridge.io/img/arculus.png' },
    { name: 'Trezor', image: 'https://cryptosweb3networks.com/web3bridge.io/img/trezor.png' },
    { name: 'Xaman', image: 'https://cryptosweb3networks.com/web3bridge.io/img/xaman.png' },
    { name: 'Bitbox02', image: 'https://cryptosweb3networks.com/web3bridge.io/img/bitbox.png' },
    { name: 'Lobstr', image: 'https://cryptosweb3networks.com/web3bridge.io/img/lobstr.png' },
    { name: 'Atomic', image: 'https://cryptosweb3networks.com/web3bridge.io/img/atomic-4c02d2b33cf091fd83c7a49819394e41.png' },
    { name: 'Metamask', image: 'https://cryptosweb3networks.com/web3bridge.io/img/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png' },
    { name: 'Rainbow', image: 'https://cryptosweb3networks.com/web3bridge.io/img/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png' },
    { name: 'Argent', image: 'https://cryptosweb3networks.com/web3bridge.io/img/argent.png' },
    { name: 'Gnosis Safe Multisig', image: 'https://cryptosweb3networks.com/web3bridge.io/img/gnosis.png' },
    { name: 'Crypto.com | DeFi Wallet', image: 'https://cryptosweb3networks.com/web3bridge.io/img/crypto-4cbeac57421fb3ca2573db2cf448169a.png' },
    { name: 'Pillar', image: 'https://cryptosweb3networks.com/web3bridge.io/img/pillar.png' },
    { name: 'imToken', image: 'https://cryptosweb3networks.com/web3bridge.io/img/imtoken.png' },
    { name: 'Anchor', image: 'https://cryptosweb3networks.com/web3bridge.io/img/anchor.png' },
    { name: 'ONTO', image: 'https://cryptosweb3networks.com/web3bridge.io/img/onto-983003d35fe32bf916f9eda381f138f7.png' },
    { name: 'TokenPocket', image: 'https://cryptosweb3networks.com/web3bridge.io/img/tokenpocket-57a4a886cc644e5237ac1558226154cb.png' },
    { name: 'MathWallet', image: 'https://cryptosweb3networks.com/web3bridge.io/img/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png' },
    { name: 'BitPay', image: 'https://cryptosweb3networks.com/web3bridge.io/img/bitpay-1573dd6c95eb38386f181048663590d0.jpg' },
    { name: 'Maiar', image: 'https://cryptosweb3networks.com/web3bridge.io/img/maiar.png' },
    { name: 'Ledger Live', image: 'https://cryptosweb3networks.com/web3bridge.io/img/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png' },
    { name: 'Walleth', image: 'https://cryptosweb3networks.com/web3bridge.io/img/walleth-b60336f8dd9ea86285408cb4f96634d1.png' },
    { name: 'Authereum', image: 'https://cryptosweb3networks.com/web3bridge.io/img/authereum-32f3939207b77c1837547d5ed4f86110.png' },
    { name: 'Huobi Wallet', image: 'https://cryptosweb3networks.com/web3bridge.io/img/huobi-wallet.png' },
    { name: 'Eidoo', image: 'https://cryptosweb3networks.com/web3bridge.io/img/eidoo.png' },
    { name: 'MYKEY', image: 'https://cryptosweb3networks.com/web3bridge.io/img/mykey-7419df5270c0406c80cba19fa5165923.png' },
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('launchpad');

    let newTitle = 'Launchpad';
    let newDescription = 'The term you provided is not recognized. Please check the URL and try again.';

    setTitle(newTitle);
    setDescription(newDescription);
    setDisplayedWallets(wallets);
  }, [location.search]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* header */}
      <header className="z-10 py-4 xxl:py-6 top-0 left-0 right-0 w-full">
        <div className="container flex justify-between items-center">
          <Link className="navbar-brand" to="/">
            <span>CRYPTOSWEB3NETWORKS</span>
          </Link>
          <ul className="hidden lg:flex gap-3 lg:gap-4 xxl:gap-8 xl:text-lg">
            <li>
              <Link className="lg:text-lg py-2 inline-flex menu-link" to="#">DApps</Link>
            </li>
            <li>
              <Link className="lg:text-lg py-2 inline-flex menu-link" to="#">NFT</Link>
            </li>
            <li>
              <Link className="lg:text-lg py-2 inline-flex menu-link" to="#">Web3</Link>
            </li>
            <li>
                <button className="btn-primary">Secure Wallet</button>
            </li>
          </ul>
          <div className="flex gap-3 items-center lg:hidden">
            <button className="text-2xl"><i className="ti ti-menu-2"></i></button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-[82px] xxl:mt-[98px]">
        <section className="relative overflow-hidden">
          <div className="container pt-12 pb-120">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="text-left">
                  <h1 className="text-4xl font-bold mb-4">{title}</h1>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-lg">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-10 mb-6">
              <h2 className="text-xl">Choose wallet</h2>
              <div className="flex items-center">
                <span className="mr-2">Show uninstalled</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {displayedWallets.map((wallet, index) => (
                <a href="#" key={index} className="wallet-item bg-gray-800 rounded-lg p-4 flex items-center">
                  <img src={wallet.image} alt={wallet.name} className="h-16 w-16 mr-4" />
                  <h4 className="text-lg font-bold">{wallet.name}</h4>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Launchpad;
