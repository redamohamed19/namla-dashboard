import React from 'react';
import '../css/edge.css';
import imgAds from '../imgs/Group.svg';
import calander from '../imgs/calander.svg';
import intel from '../imgs/intel.svg';
import ryzen from '../imgs/ryzen.svg';
import cpu from '../imgs/cpu.png';
import card from '../imgs/card.png';
import CandlestikGlobal from './candlestik_global';

const Edge = () => {
  //edge component implementation
  return (
    <div className="edge">
      <div className="edge_left">
        <div className="layer_ads">
          <div className="layer_info">
            <h1>Make your Cloud Operation easier</h1>
            <button>
              <p>see transaction</p>
            </button>
          </div>
          <div className="layer_img">
            {' '}
            <img src={imgAds} alt="ads" />
          </div>
        </div>
        <div className="market_overflow">
          <div className="market_overflow_intro">
            <h3>market overview</h3>
            <div>
              <img src={calander} alt="calander" />
              <p>14 aug - 25 aug</p>
            </div>
          </div>
          <CandlestikGlobal />
          <h3 className="prusharedh3">Devices prushared</h3>
          <div className="prushared">
            <div className="machine">
              <img src={intel} alt="intel" />
              <div>
                {' '}
                <h4>520$</h4>
                <p>intel hd 4000</p>
              </div>
            </div>
            <div className="machine">
              <img src={intel} alt="intel" />
              <div>
                {' '}
                <h4>320$</h4>
                <p>intel g2020</p>
              </div>
            </div>
            <div className="machine">
              <img src={ryzen} alt="intel" />
              <div>
                {' '}
                <h4>1020$</h4>
                <p>ryzen 3 3200g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edge_right">
        <div className="mycard">
          <h2>My Card</h2>
          <img src={card} alt="card" />
        </div>
        <div className="monthly_credit">
          <h4>monthly credits</h4>
          <p>$20,000 of $100,000</p>
          <button>view details</button>
        </div>
        <h3 className="trh3">transaction</h3>
        <div className="transact">
          <div>
            <img src={cpu} alt="cpu" />
            <h5>AMD EPYC</h5>
            <p>-$900</p>
          </div>
          <div>
            <img src={cpu} alt="cpu" />
            <h5>Skylake,Bridge</h5>
            <p>-$1200</p>
          </div>
          <div>
            <img src={cpu} alt="cpu" />
            <h5>Intel Xeon @ 2.30GHzC</h5>
            <p>-$400</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Edge;
