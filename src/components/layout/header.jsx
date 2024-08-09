import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AuditOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/books"}>Book</Link>,
            key: 'books',
            icon: <AuditOutlined />,
        },
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default Header