import {useState, useEffect} from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined,FundOutlined ,MoneyCollectOutlined, BulbOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../assets/cryptocurrency.png'
const Navbar = () => {
  const [activeView, setactiveView] = useState(false);
  const [screenSize, setscreenSize] = useState(null);

  useEffect(()=>{
    const handleResize=()=>setscreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return ()=>window.removeEventListener('resize',handleResize);
  },[])
  useEffect(()=>{
    if(screenSize<760){
      setactiveView(false);
    }
    else
    {
      setactiveView(true);
    }
  },[screenSize])
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptorank</Link>
            </Typography.Title>
            </div>
            <Button className='menu-control-container' onClick={()=>setactiveView(!activeView)}>
              <MenuOutlined/>
            </Button>
            <div>
              {activeView && <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>} onClick={()=>setactiveView(!activeView)}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>} onClick={()=>setactiveView(!activeView)}>
                  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
              </Menu>}
              
            </div>
    </div>
  )
}

export default Navbar