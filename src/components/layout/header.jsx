import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
    AuditOutlined, HomeOutlined, SettingOutlined,
    UsergroupAddOutlined, LoginOutlined, AliwangwangOutlined
} from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('');

    // Data đã được nạp useContext lúc login
    const { user } = useContext(AuthContext);
    console.log('>>> Check data', user)

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

        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : []),

        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Đăng xuất',
                    key: 'logout',
                }
            ],
        }] : []),
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