import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptonewsapi';
const { Text, Title } = Typography;  // Fixed Typo: Changed `Test` to `Text`
const { Option } = Select;

const News = ({ simplified }) => {
  // Fetch data using the query hook
  const { data: cryptoNews, isFetching} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 });
  console.log(cryptoNews);
  // Loading state
  if (isFetching) return <div>Loading...</div>;
  return (
    <div>News</div>
  )
}

export default News