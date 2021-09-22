import React from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import icon from "../image/download.png"
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"  />
                <Typography.Title level={3} className="logo">
                    <Link to="/">Crypto Exchange</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'> 
<Menu.Item icon={<HomeOutlined/>}>
   <Link to="/">Home</Link>

</Menu.Item>
<Menu.Item icon={<FundOutlined/>}>
   <Link to="/cryptocurrencies">Cryptocurrencies</Link>

</Menu.Item>
<Menu.Item icon={<MoneyCollectOutlined/>}>
   <Link to="/exchanges">Exchanges</Link>

</Menu.Item>
<Menu.Item icon={<BulbOutlined/>}>
   <Link to="/news">News</Link>

</Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar;
