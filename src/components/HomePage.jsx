import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoapi';
import Cryptocurrencies from './Cryptocurrencies';
import Spinner from './Spinner';
const HomePage = () => {
    
    const {data, isFetching} = useGetCryptosQuery(10);
    console.log(data);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Spinner isFetching={isFetching}/>

  return (
    <>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}>
                <Statistic title="Total Cryptocurrencies" value={globalStats.total}/>
            </Col>
            <Col span={12}>
                <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/>
            </Col>
            <Col span={12}>
                <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>
            </Col>
            <Col span={12}>
                <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/>
            </Col>
            <Col span={12}>
                <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/>
            </Col>
        </Row>
        <div className="home-heading-container">
            <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
            <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
        </div>
        <Cryptocurrencies simplified/>
    </>
  )
}

export default HomePage