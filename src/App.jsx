import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route  path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route  path="/crypto/:coinId" element={<CryptoDetails/>}/>
            </Routes>
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          Cryptorank
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App