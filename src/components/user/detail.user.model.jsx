import { Input, Button } from 'antd';
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
                        <img
                            height={200}
                            width={200}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                    </div>
                    <div>
                        <label htmlFor='btnUpload'
                            style={{
                                width: "fit-content",
                                background: "orange",
                                marginTop: "15px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}>Upload Avatar
                        </label>
                        <input id='btnUpload' type='file' hidden />
                    </div>
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