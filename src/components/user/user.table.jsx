import { Table } from 'antd';
import { fetchUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUser, setDataUser] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'phone',
        },
    ];

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchUserAPI();
        setDataUser(res.data)
    }

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    );
}

export default UserTable;