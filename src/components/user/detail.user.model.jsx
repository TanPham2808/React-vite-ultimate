import { Input } from 'antd';
import { Drawer } from 'antd';

const DetailUserModel = (props) => {
    const { isModalDetailOpen, setIsModalDetailOpen, dataDetail, setDataDetail } = props;

    return (
        <Drawer title="Detail User"
            onClose={() => {
                setIsModalDetailOpen(false);
                setDataDetail(null)
            }}
            open={isModalDetailOpen}>
            {dataDetail ? <>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={dataDetail.fullName}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={dataDetail.email}
                        />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            value={dataDetail.phone}
                        />
                    </div>
                </div>
            </> : <><p>Không có data</p></>}
        </Drawer>
    )
}

export default DetailUserModel;