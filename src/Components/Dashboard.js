import React from 'react';
import TransactionChart from './TransactionChart';
import DonutChart from './PieChart'
import './Dashboard.css';
import filtericon from '../Assets/Group 36874/Group 36874.png'
import arrow from '../Assets/Group 3/Group 3.png'
import transactionicon from '../Assets/Group 47595/Group 47595.png'
import payouticon from '../Assets/Group 47681/Group 47681.png'
import settlementicon from '../Assets/Group 45251/Group 45251.png'
import trendingarrow from '../Assets/Group 47182/Group 47182.png'

function Dashboard() {
  return (
    <div className="dashboard">

      <div className='heading'>

        <div className='heading-name'>Welcome Back, Sumit</div>

        <div className='filters'>

          <div className='filtertype'>Filters</div>
          <div className='filtericon'><img src={filtericon} alt='image'></img></div>

        </div>
      </div>

      <div className="stats-cards">

        <div className='card'>


          <div className='card-content'>

            <div className='top-content'>
              <h4>Total Transactions</h4>
              <div className='transactionimage'><img src={transactionicon} alt='image'></img></div>
            </div>

            <div className='bottom-content'>
              <div className='amount'>2,000</div>
              <div className='message'><div className='trendingarrow'><img src={trendingarrow} alt='image'></img></div><p>+20% from last month</p></div>
            </div>
          </div>
          <div className='arrow'><img src={arrow} alt='image'></img></div>
        </div>

        <div className='card'>

          <div className='card-content'>

            <div className='top-content'>
              <h4>Total Payout</h4>
              <div className='transactionimage'><img src={payouticon} alt='image'></img></div>
            </div>

            <div className='bottom-content'>
              <div className='amount'>2,000</div>
              <div className='message'><div className='trendingarrow'><img src={trendingarrow} alt='image'></img></div><p>+30% from last month</p></div>
            </div>
          </div>

          <div className='arrow'><img src={arrow} alt='image'></img></div>
        </div>

        <div className='card'>

          <div className='card-content'>

            <div className='top-content'>
              <h4>Total Settlement</h4>
              <div className='transactionimage'><img src={settlementicon} alt='image'></img></div>
            </div>

            <div className='bottom-content'>
              <div className='amount'>2,000</div>
              <div className='message'><div className='trendingarrow'><img src={trendingarrow} alt='image'></img></div><p>+13% from last month</p></div>
            </div>
          </div>
          <div className='arrow'><img src={arrow} alt='image'></img></div>
        </div>

        <div className='card'>

          

          <div className='card-content'>

            <div className='top-content'>
              <h4>Pending Settelment</h4>
              <div className='transactionimage'><img src={settlementicon} alt='image'></img></div>
            </div>

            <div className='bottom-content'>
              <div className='amount'>2,000</div>
              <div className='message'><div className='trendingarrow'><img src={trendingarrow} alt='image'></img></div><p>+09% from last month</p></div>
            </div>
          </div>
          
          <div className='arrow'><img src={arrow} alt='image'></img></div>

        </div>
      </div>
      <div className="charts">
       
       <div className='transaction-chart'>
        <TransactionChart />
       </div>

       <div className='sourse-chart'>
        <DonutChart />
       </div>

      </div>
    </div>
  );
}

export default Dashboard;





