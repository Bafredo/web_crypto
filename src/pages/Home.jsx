import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/index.css';

function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* header */}
      <header
        className="z-10 py-4 xxl:py-6 border-b border-neutral4/15 fixed top-0 left-0 right-0 w-full"
        id="hedi"
      >
        <div className="container flex justify-between items-center">
          <Link className="navbar-brand" to="/">
            <span>c</span>
            <span>r</span>
            <span>yptosweb3networks</span>
          </Link>
          <ul className="hidden lg:flex gap-3 lg:gap-4 xxl:gap-8 xl:text-lg">
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                IGO
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                LAUNCHPAD
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                STAKING
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                FARMING
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                CRYPTO
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                DEFI
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                WEB3
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                IDO
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                TOKEN
              </Link>
            </li>
            <li>
              <Link
                className="lg:text-lg py-2 inline-flex menu-link"
                to="/wallet"
              >
                NFT
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <button
              className="btn-primary"
              onClick={() => {
                navigate("/wallet");
              }}
            >
              Connect Wallet
            </button>
            <button className="text-2xl lg:hidden">
              <i className="ti ti-menu-2"></i>
            </button>
          </div>
        </div>
      </header>

      {/* go to top */}
      <div className="fixed bottom-5 right-5 xl:right-7 xl:bottom-7 z-30">
        <button className="size-12 ease-bounce duration-500 f-center rounded-full bg-primary shadow-xl text-2xl">
          <i className="ti ti-arrow-up"></i>
        </button>
      </div>

      {/* Main Content */}
      <main className="mt-[82px] xxl:mt-[98px] ">
        {/* hero section */}
        <section className="relative overflow-hidden " id="sec">
          <img
            className="max-xxl:hidden absolute left-0 top-8"
            src="assets2/images/ellipse-1.png"
            alt=""
          />
          <img
            className="max-xl:hidden absolute right-0 bottom-16"
            src="assets2/images/ellipse-2.png"
            alt=""
          />
          <img
            className="max-xl:hidden rocket absolute left-10 bottom-8 z-[2]"
            src="assets2/images/rocket.png"
            alt=""
          />
          <img
            className="max-md:hidden absolute right-5 top-12 animate-slow-rotate"
            src="assets2/images/globe.png"
            alt=""
          />
          <img
            className="absolute left-[5%] bottom-[30%] animate-slow-rotate-reverse"
            src="assets2/images/bitcoin.png"
            alt=""
          />
          <img
            className="absolute right-[12%] top-[40%] animate-slow-rotate"
            src="assets2/images/coin-1.png"
            alt=""
          />
          <div className="max-lg:hidden w-[250px] h-[204px] xxl:w-[404px] xxl:h-[404px] absolute bottom-[-15%] blur-[85px] left-[-12%] bg-[rgba(240,185,11,0.50)]"></div>
          <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[6%] blur-[85px] left-[-12%] bg-primary/50"></div>
          <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
          <div className="container pt-120 pb-120 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-6 relative z-[2] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
              <h2 className="display-4 mb-4 fade_up_anim">
                Gateway to Encrypt, back up, and
                <span className="text-primary display-4 underline">secure</span>
                <span className="text-secondary display-4 underline">
                  {" "}
                  your assets
                </span>
              </h2>
              <p
                className="mb-8 xl:mb-10 max-w-md lg:text-lg fade_up_anim"
                data-delay="0.2"
              >
                The easiest, safest, and fastest way to secure &amp; back up
                crypto asset.
              </p>
              <div className="flex gap-6 fade_up_anim" data-delay="0.4">
                <button
                  className="btn-primary"
                  onClick={() => {
                    navigate("/wallet");
                  }}
                >
                  Connect Wallet
                </button>
                <button className="btn-accent6">Explore Now</button>
              </div>
            </div>
            <div
              className="col-span-12 lg:col-span-5 lg:col-start-8 relative max-lg:flex max-lg:justify-center fade_up_anim"
              data-delay=".5"
            >
              <img
                src="Web3-removebg-preview.png"
                className="relative z-[3]"
                alt=""
              />
              <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] absolute top-[6%] blur-[85px] left-0 bg-primary/50"></div>
            </div>
            <div className="col-span-12 gap-6 grid grid-cols-12 xl:divide-x divide-neutral4/60 pt-120 relative z-[2]">
              <div className="col-span-6 md:col-span-3">
                <h3 className="h3 mb-3">
                  <span id="country">200</span>+
                </h3>
                <p className="text-neutral1/80 lg:text-lg">Countries Covered</p>
              </div>
              <div className="col-span-6 md:col-span-3 xl:pl-8">
                <h3 className="h3 mb-3">
                  <span id="investor">30</span> Million
                </h3>
                <p className="text-neutral1/80 lg:text-lg">Global Investors</p>
              </div>
              <div className="col-span-6 md:col-span-3 xl:pl-8">
                <h3 className="h3 mb-3">
                  <span id="coin">700</span>+
                </h3>
                <p className="text-neutral1/80 lg:text-lg">Secured Wallet</p>
              </div>
              <div className="col-span-6 md:col-span-3 xl:pl-8">
                <h3 className="h3 mb-3">
                  $<span id="volume">1.36</span> Billion
                </h3>
                <p className="text-neutral1/80 lg:text-lg">Secured Volume</p>
              </div>
            </div>
          </div>
        </section>

        {/* find opportunities */}
        <section className="bg-accent2">
          <div className="container pt-120 pb-120">
            <div className="grid grid-cols-12 gap-4 mb-10 xl:mb-[60px]">
              <div className="col-span-12 md:col-span-12 xl:col-span-4">
                <h2 className="fade_up_anim">
                  Find & Secure
                  <span className="text-primary h2 underline">crypto</span>
                  Now!
                </h2>
              </div>
              <div className="col-span-12 md:col-span-12 xl:col-span-4 xl:col-start-9">
                <p
                  data-delay=".3"
                  className="text-xs md:text-base lg:text-lg fade_up_anim"
                >
                  Our comprehensive cybersecurity platform, driven by artificial
                  intelligence, not only safeguards your organization.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 grid-rows-2">
              <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 row-span-2 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8 flex-col flex justify-between">
                <div>
                  <h3 className="mb-1">Connect to Dapps</h3>
                  <p className="text-lg text-neutral1/70">
                    Connect decentralized apps to mobile wallets and enable
                    DAPP.
                  </p>
                </div>
                <img
                  src="assets2/images/globe-2.png"
                  className="lg:-ml-5"
                  alt=""
                />
              </div>
              <div
                data-delay=".15"
                className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8"
              >
                <h3 className="mb-1">Missing Funds</h3>
                <p className="lg:text-lg text-neutral1/70">
                  Lost access to funds or missing funds? Click here.
                </p>
                <div className="flex justify-end">
                  <img
                    src="assets2/images/trade.png"
                    className="lg:-mr-5 -mt-9"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-delay=".25"
                className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8"
              >
                <h3 className="mb-1">High Fee</h3>
                <p className="lg:text-lg text-neutral1/70">
                  Transaction fees too high? Click here.
                </p>
                <div className="flex justify-end">
                  <img
                    src="assets2/images/spot.png"
                    className="lg:-mr-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8">
                <h3 className="mb-1">24/7 Support</h3>
                <p className="lg:text-lg text-neutral1/70">
                  Count on us for round-the-clock support, help whenever you
                  need it.
                </p>
                <div className="flex justify-between items-end">
                  <img
                    src="assets2/images/bitcoin-2.png"
                    className="max-md:hidden"
                    alt=""
                  />
                  <img
                    src="assets2/images/support.png"
                    className="lg:-mr-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 !pb-0 xl:p-6 xxl:p-8">
                <h3 className="mb-1">Trusted &amp; Secure</h3>
                <p className="lg:text-lg text-neutral1/70">
                  Your assets2. On your terms. At your fingertips.
                </p>
                <div className="flex justify-between items-end">
                  <img
                    src="assets2/images/coins.png"
                    className="max-md:hidden"
                    alt=""
                  />
                  <img
                    src="assets2/images/trusted.png"
                    className="lg:-mr-5 -mt-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* explore crypto */}
        <section className="bg-accent5 relative overflow-hidden">
          <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-primary/50"></div>
          <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
          <img
            className="max-md:hidden absolute right-5 top-12 animate-slow-rotate"
            src="assets2/images/globe.png"
            alt=""
          />
          <img
            className="max-lg:hidden absolute left-[5%] top-[46%] animate-slow-rotate-reverse"
            src="assets2/images/bitcoin-3.png"
            alt=""
          />
          <img
            className="max-lg:hidden absolute right-0 bottom-0"
            src="assets2/images/element-1.png"
            alt=""
          />
          <div className="container pb-120 pt-120 relative z-[2]">
            <div className="mb-10 xl:mb-[60px] flex flex-wrap justify-between items-center gap-5">
              <div className="max-w-lg">
                <h2 className="mb-2 fade_up_anim">
                  Explore{" "}
                  <span className="text-primary h2 underline">Web3</span>
                </h2>
                <p
                  data-delay=".25"
                  className="lg:text-lg text-neutral4 fade_up_anim"
                >
                  It is the easiest, safest, and fastest way to secure &amp;
                  backup crypto asset.
                </p>
              </div>
              <Link to="/wallet" className="btn-primary">
                View More
              </Link>
            </div>
            <div className="mb-10 lg:mb-[60px]">
              <div className="swiper product-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide group">
                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                      <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8">
                        <img src="assets2/images/spot-trading.png" alt="" />
                      </div>
                      <h4 className="mb-3">Spot Trading</h4>
                      <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">
                        Trade crypto with our comprehensive set of powerful
                        tools to maximize your profits.
                      </p>
                      <Link
                        to="/wallet"
                        className="text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-slide group">
                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                      <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8">
                        <img src="assets2/images/margin-trade.png" alt="" />
                      </div>
                      <h4 className="mb-3">Margin Trading</h4>
                      <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">
                        Borrow, trade, and repay. Leverage your assets2 with
                        margin trading.
                      </p>
                      <Link
                        to="/wallet"
                        className="text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-slide group">
                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                      <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8">
                        <img src="assets2/images/derivative.png" alt="" />
                      </div>
                      <h4 className="mb-3">Crypto Derivatives</h4>
                      <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">
                        We are the best crypto exchange for trading crypto
                        futures.
                      </p>
                      <Link
                        to="/wallet"
                        className="text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-slide group">
                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                      <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8">
                        <img src="assets2/images/earn.png" alt="" />
                      </div>
                      <h4 className="mb-3">QFSEarn</h4>
                      <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">
                        Invest and earn steady income with the help of a
                        professional asset manager.
                      </p>
                      <Link
                        to="/wallet"
                        className="text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-slide group">
                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                      <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8">
                        <img src="assets2/images/buy.png" alt="" />
                      </div>
                      <h4 className="mb-3">Buy Crypto</h4>
                      <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">
                        Purchase crypto quickly and easily on our popular and
                        industry-leading platform.
                      </p>
                      <Link
                        to="/wallet"
                        className="text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="swiper-slide group">
                    <div className="bg-accent5 text-center group-hover:bg-accent6 duration-300 px-6 lg:px-10 py-5 lg:py-8 rounded-xl border border-accent4 flex flex-col items-center">
                      <div className="size-20 rounded-full group-hover:bg-primary border border-primary flex justify-center items-center mb-6 xl:mb-8">
                        <img src="assets2/images/margin.png" alt="" />
                      </div>
                      <h4 className="mb-3">Margin Trading</h4>
                      <p className="text-neutral4 mb-6 lg:mb-8 lg:text-lg max-two-line">
                        Borrow, trade, and repay. Leverage your assets2 with
                        margin trading.
                      </p>
                      <Link
                        to="/wallet"
                        className="text-base lg:text-lg xl:text-xl font-medium flex group-hover:text-primary group-hover:underline justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex gap-4">
                <span className="size-12 cursor-pointer xl:size-[60px] text-primary hover:text-neutral1 rounded-full border border-primary text-2xl f-center hover:bg-primary duration-300 prev-product">
                  <i className="ti ti-chevron-left"></i>
                </span>
                <span className="size-12 cursor-pointer xl:size-[60px] text-primary hover:text-neutral1 rounded-full border border-primary text-2xl f-center hover:bg-primary duration-300 next-product">
                  <i className="ti ti-chevron-right"></i>
                </span>
              </div>
              <div className="product-scrollbar shrink-0 max-md:w-full grow h-0.5 bg-primary/40"></div>
            </div>
          </div>
        </section>

        {/* how to get started */}
        <section className="bg-accent5 relative overflow-x-hidden">
          <div className="max-lg:hidden w-[250px] h-[300px] absolute bottom-0 blur-[85px] left-[-12%] bg-accent1/50"></div>
          <div className="max-lg:hidden w-[250px] h-[300px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50"></div>
          <img
            className="max-md:hidden absolute left-0 bottom-3"
            src="assets2/images/how-start-el-1.png"
            alt=""
          />
          <img
            className="max-lg:hidden absolute right-[5%] animate-skew top-[4%]"
            src="assets2/images/how-start-el-2.png"
            alt=""
          />
          <div className="container pt-120 pb-120">
            <h2 className="mb-10 xl:mb-[60px] text-center fade-up-anim">
              How To Get{" "}
              <span className="h2 text-primary underline">Started</span>
            </h2>
            <div className="grid grid-cols-12 gap-4 xl:gap-6 z-[2] relative text-center after:w-full after:h-full after:xl:h-[90%] after:absolute after:left-0 after:rounded-xl after:top-0 after:xl:top-[5%] after:bg-accent6 after:z-[-1]">
              <div
                data-delay="0.05"
                className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl bg-primary flex flex-col items-center"
              >
                <div className="size-[60px] text-primary text-2xl f-center rounded-full bg-neutral1 mb-4 xl:mb-6">
                  <i className="ti ti-user-plus"></i>
                </div>
                <h4 className="mb-4 xl:mb-6">Connect wallet</h4>
                <p className="mb-7 xl:mb-10 lg:text-lg">
                  Click connect wallet button.
                </p>
                <button className="btn-primary">Connect Wallet</button>
              </div>
              <div
                data-delay="0.15"
                className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl flex flex-col items-center"
              >
                <div className="size-[60px] text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6">
                  <h5>02</h5>
                </div>
                <h4 className="mb-4 xl:mb-6">Select Wallet</h4>
                <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg">
                  Choose your prefered wallet to backup and click on connect.
                </p>
                {/* <p className="text-lg font-medium text-neutral1/6">Create your account first</p> */}
              </div>
              <div
                data-delay="0.25"
                className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl flex flex-col items-center"
              >
                <div className="size-[60px] text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6">
                  <h5>03</h5>
                </div>
                <h4 className="mb-4 xl:mb-6">Backup your wallet</h4>
                <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg">
                  Your wallet backup may also be referred to as a: <b>backup</b>
                  , <b>recovery seed</b>, <b>seed</b>, <b>seed phrase</b>,{" "}
                  <b>BIP-39 seed phrase</b>, <b>mnemonic</b>,{" "}
                  <b>recovery phrase</b>, (plus various combinations of these
                  words)
                </p>
                {/* <p className="text-lg font-medium text-neutral1/6">Verify your identity first</p> */}
              </div>
              <div
                data-delay="0.35"
                className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl flex flex-col items-center"
              >
                <div className="size-[60px] text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6">
                  <h5>04</h5>
                </div>
                <h4 className="mb-4 xl:mb-6">Start your journey</h4>
                <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg">
                  Having a safe wallet backup means you can recover your Bitcoin
                  in case of hardware failure or the loss of your device
                </p>
                {/* <p className="text-lg font-medium text-neutral1/6">Buy or deposit crypto first</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Try our crypto */}
        <section className="bg-accent5 relative overflow-hidden">
          <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-primary/50"></div>
          <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
          <img
            className="max-md:hidden absolute right-5 top-12 animate-slow-rotate"
            src="assets2/images/globe.png"
            alt=""
          />
          <img
            className="max-lg:hidden absolute left-[5%] bottom-[6%] animate-updown"
            src="assets2/images/try-el-1.png"
            alt=""
          />
          <img
            className="max-lg:hidden absolute right-[5%] bottom-[4%] animate-slow-rotate-reverse"
            src="assets2/images/try-el-2.png"
            alt=""
          />
          <div className="container pt-120 pb-120 grid grid-cols-12 gap-6 xl:gap-10 items-center relative z-[2]">
            <div className="col-span-12 lg:col-span-5">
              <img
                src="get-started-recovery-phrase-lg@2x.png"
                className="fade_up_anim"
                alt=""
              />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <h2 data-delay=".05" className="fade_up_anim mb-4">
                How does wallet backup and recovery work?
              </h2>
              <div
                data-delay=".25"
                className="fade_up_anim rounded-3xl p-4 lg:p-6 xxl:p-8 bg-accent6 border border-accent4 flex gap-4 flex-wrap items-center justify-between"
              >
                <div className="max-w-sm">
                  <h3 className="mb-3">Secure</h3>
                  <p className="lg:text-lg text-neutral4">
                    First, we need to talk a little bit about how crypto wallets
                    work. Crypto wallets work by holding cryptographic keys that
                    are used to prove you have control over cryptoassets2 on a
                    blockchain. Whenever you wish to do something with your
                    cryptoassets2, you instruct the blockchain and use your
                    private cryptographic key as a sort of digital signature to
                    approve your desired action.
                  </p>
                </div>
                <button className="btn-primary">Connect Wallet</button>
              </div>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="bg-accent2 relative overflow-hidden">
          <div className="max-lg:hidden w-[350px] h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-accent1/50"></div>
          <img
            className="max-lg:hidden absolute right-[2%] bottom-[3%]"
            src="assets2/images/faq-box.png"
            alt=""
          />
          <div className="container relative z-[2] pt-120 pb-120 grid grid-cols-12 gap-6 xl:gap-10 items-center">
            <div className="fade_up_anim col-span-12 lg:col-span-5 p-4 lg:p-6 xl:p-8 xxl:px-10 bg-accent5 border border-accent4 rounded-xl">
              <p className="text-lg font-semibold mb-3">FAQ</p>
              <h2 className="mb-4">
                Your questions{" "}
                <span className="h2 underline text-primary">answered.</span>
              </h2>
              <p className="text-neutral4 mb-6 text-lg xl:mb-10">
                Let's do our best to answer your most frequently asked
                questions.
              </p>
              <div className="bg-accent6 p-5 rounded-xl">
                <div className="flex gap-3 flex-wrap min-[420px]:flex-nowrap items-center mb-6">
                  <div className="size-20 shrink-0 rounded-xl border border-neutral1 f-center">
                    <div className="size-8 rounded-full bg-primary text-accent5 text-2xl f-center">
                      <i className="ti ti-question-mark"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3">Still have questions?</h5>
                    <p className="text-neutral4 text-sm">
                      Can't find the answer you're looking for?Please chat to
                      our friendly team!
                    </p>
                  </div>
                </div>
                <button className="btn-primary">Connect Wallet</button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 p-4 lg:p-6 xl:p-8 xxl:px-10 bg-accent5 border border-accent4 rounded-xl flex flex-col gap-4 xxl:gap-7">
              <div className="fade_up_anim p-4 rounded-xl border border-accent4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base xxl:text-xl font-medium">
                    How can I secure my wallet?
                  </p>
                  <span className="size-8 md:size-10 cursor-pointer rounded-full f-center text-lg shrink-0 md:text-2xl duration-300">
                    <i className="ti ti-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div className="fade_up_anim p-4 rounded-xl border border-accent4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base xxl:text-xl font-medium">
                    How to backup a crypto wallet?
                  </p>
                  <span className="size-8 md:size-10 cursor-pointer rounded-full f-center text-lg shrink-0 md:text-2xl duration-300">
                    <i className="ti ti-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div className="fade_up_anim p-4 rounded-xl border border-accent4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base xxl:text-xl font-medium">
                    How to keep bitcoin wallet safe?
                  </p>
                  <span className="size-8 md:size-10 cursor-pointer rounded-full f-center text-lg shrink-0 md:text-2xl duration-300">
                    <i className="ti ti-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div className="fade_up_anim p-4 rounded-xl border border-accent4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base xxl:text-xl font-medium">
                    How do I trust a safe wallet?
                  </p>
                  <span className="size-8 md:size-10 cursor-pointer rounded-full f-center text-lg shrink-0 md:text-2xl duration-300">
                    <i className="ti ti-chevron-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="bg-accent5 relative overflow-hidden">
          <div className="max-lg:hidden w-[250px] h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50"></div>
          <div className="max-lg:hidden w-[250px] h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50"></div>

          <div className="pb-120 pt-120 relative z-[2]">
            <h2 className="text-center mb-10 xl:mb-[60px] fade_up_anim">
              Trusted by
            </h2>
            <div className="swiper brand-slider-one fade_up_anim">
              <div className="swiper-wrapper ease-linear">
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-1.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-2.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-3.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-4.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-5.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-6.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-7.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-8.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-9.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-10.png" alt="" />
                </div>
              </div>
            </div>
            <div className="swiper brand-slider-two fade_up_anim">
              <div className="swiper-wrapper ease-linear">
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-11.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-12.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-13.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-4.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-7.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-5.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-9.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-8.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-7.png" alt="" />
                </div>
                <div className="swiper-slide flex items-center h-20 justify-center">
                  <img src="assets2/images/brands/item-10.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="bg-accent5 relative overflow-hidden footer">
        <div className="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50"></div>
        <div className="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
        <img
          className="max-[1700px]:hidden absolute left-0 bottom-0"
          src="assets2/images/footer-el-1.png"
          alt=""
        />
        <img
          className="max-lg:hidden absolute right-1 bottom-0"
          src="assets2/images/footer-el-2.png"
          alt=""
        />
        <img
          className="max-xl:hidden absolute right-0 top-2 animate-skew"
          src="assets2/images/how-start-el-2.png"
          alt=""
        />
        <div className="pb-120 pt-120 relative z-[2] container grid grid-cols-12 xxl:grid-cols-10 gap-6 lg:divide-x divide-accent4">
          <div className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3">
            <h3 className="mb-4 xl:mb-6">Quick Links</h3>
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex flex-col gap-4">
                <Link to="/wallet" className="animated-link">
                  IGO
                </Link>
                <Link to="/wallet" className="animated-link">
                  LAUNCHPAD
                </Link>
                <Link to="/wallet" className="animated-link">
                  STAKING
                </Link>
                <Link to="/wallet" className="animated-link">
                  FARMING
                </Link>
                <Link to="/wallet" className="animated-link">
                  CRYPTO
                </Link>
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <Link to="/wallet" className="animated-link">
                  DEFI
                </Link>
                <Link to="/wallet" className="animated-link">
                  WEB3
                </Link>
                <Link to="/wallet" className="animated-link">
                  IEO
                </Link>
                <Link to="/wallet" className="animated-link">
                  IDO
                </Link>
                <Link to="/wallet" className="animated-link">
                  TOKEN
                </Link>
                <Link to="/wallet" className="animated-link">
                  GAMING
                </Link>
                <Link to="/wallet" className="animated-link">
                  NFT
                </Link>
              </div>
            </div>
          </div>
          <div
            data-delay=".15"
            className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-6 xxl:col-span-4"
          >
            <div className="text-center px-4 md:px-6 lg:px-10 xxl:px-16">
              <h3 className="mb-4 xl:mb-6">Newsletter</h3>
              <p className="text-neutral4 lg:text-lg mb-8 xl:mb-10">
                Welcome to cryptosweb3networks your gateway to the world of Web3
                trading! Our user-friendly platform
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-full focus:border-primary bg-transparent rounded-full px-5 py-4 border border-accent4"
                  required
                />
                <button
                  type="submit"
                  aria-label="submit button"
                  className="size-[56px] rounded-full bg-primary shrink-0 f-center text-xl"
                >
                  <i className="ti ti-arrow-up-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="py-5 xl:py-8 border-t border-accent4">
          <div className="container text-center flex justify-center gap-2 sm:gap-3 items-center relative z-[2]">
            <p className="text-xs sm:text-sm md:text-base xl:text-lg">
              Copyright @ <span id="year"></span> cryptosweb3networks
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;