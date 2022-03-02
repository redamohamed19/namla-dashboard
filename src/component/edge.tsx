import React from 'react';
import '../css/edge.css';
import imgAds from '../imgs/Group.svg';
import calander from '../imgs/calander.svg';
import intel from '../imgs/intel.svg';
import ryzen from '../imgs/ryzen.svg';
import cpu from '../imgs/cpu.png';
import card from '../imgs/card.png';
import Candlestick from './candlestick';

import { XAxis, YAxis, LineSeries, FlexibleWidthXYPlot } from 'react-vis';
/**
 * Generate random random for candle stick chart
 * @param {number} total - Total number of values.
 * @returns {Array} Array of data.
 */
function buildRandomBinnedData(total: any) {
  const result = Array(total)
    .fill(0)
    .map((x, i) => {
      const values = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
      ]
        .sort()
        .map(d => Math.floor(d * 100));
      const y = (values[2] + values[1]) / 2;
      return {
        x: i,
        y,
        yHigh: values[3],
        yOpen: values[2],
        yClose: values[1],
        yLow: values[0],
        color: y < 25 ? '#EF5D28' : '#12939A',
        opacity: y > 75 ? 0.7 : 1
      };
    });
  return result;
}
const Edge = () => {
  let data = buildRandomBinnedData(30);
  return (
    <div className="edge">
      <div className="edge_left">
        <div className="layer_ads">
          <div className="layer_info">
            <h1>Make your Cloud Operation easier</h1>
            <button>see transaction</button>
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
          <div className="candlestick-example">
            <div className="chart">
              <FlexibleWidthXYPlot animation yDomain={[0, 100]} height={300}>
                <XAxis />
                <YAxis />
                <LineSeries color="#12939A" data={data} />
                <LineSeries
                  color="#FF9833"
                  className="dashed-example-line"
                  data={[{ x: 0, y: 25 }, { x: 30, y: 25 }]}
                />
                <LineSeries
                  color="#1A3177"
                  className="dashed-example-line"
                  opacity={0.3}
                  data={[{ x: 0, y: 75 }, { x: 30, y: 75 }]}
                />
                <Candlestick
                  colorType="literal"
                  opacityType="literal"
                  stroke="#79C7E3"
                  data={data}
                />
              </FlexibleWidthXYPlot>
            </div>
          </div>
          <h3 className="prusharedh3">Devices prushared</h3>
          <div className="prushared">
            <div className="machine">
              <img src={intel} alt="intel" />
              <div>
                {' '}
                <h4>520$</h4>
                <p>intel hd graphics 4000</p>
              </div>
            </div>
            <div className="machine">
              <img src={intel} alt="intel" />
              <div>
                {' '}
                <h4>320$</h4>
                <p>intel pentium g2020</p>
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
          <p>monthly credits</p>
          <h4>$20,000 of $100,000</h4>
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
