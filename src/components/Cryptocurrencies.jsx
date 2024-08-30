import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from "../services/cryptoapi"
import { useState,useEffect } from "react"
import Spinner from "./Spinner"
const Cryptocurrencies = ({simplified}) => {
  const count = simplified?10:100;
  const {data, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState(data?.data?.coins);
  console.log(cryptos)
  useEffect(() => {
    setcryptos(data?.data?.coins || []);
  }, [data]);
  if(isFetching) return <Spinner isFetching={isFetching}/>
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((coin)=>(
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card title={`${coin.rank}. ${coin.name}`} extra={<img src={coin.iconUrl} className="crypto-image"/>} hoverable>
                <p>Price: {millify(coin.price)}</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
                <p>Daily Change: {millify(coin.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies