import { Table } from 'antd';
import { fetchUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUser, setDataUser] = useState([
        { _id: "012321", fullName: "tanpham", email: "25", phone: "HCM" },
        { _id: "343255", fullName: "quynhly", email: "28", phone: "HCM" },
    ]);

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