import Navbar from "../navbar";
import Footer from "../footer";
import {useSelector} from "react-redux";
import {Contract, IUser, Room, UpdateContract} from "../interface";
import ClientNetwork from "../axios";
import {format} from "react-string-format";
import React, {useEffect, useState} from "react";
import {ContractMock, RoomMock} from "../Mock";
import {Alert, Snackbar} from "@mui/material";
import QuanlyHopDongDanhSach from "../quanly/QuanlyHopDongDanhSach";

function UseWall() {
    const userAuth: IUser = useSelector((state: any) => state.auth)
    const API: ClientNetwork = new ClientNetwork()
    const [listConTract, setListConTract] = useState<Contract[]>([ContractMock])
    const [isShowSnackbar, setIsShowSnackBar] = useState(false)
    const [isShowContracrDetail, setIshowContractDetail] = useState(false)
    const [contractCodeChoose, setContractCodeChoose] = useState("")


    useEffect(() => {
        getListContract().then()
    }, [])

    const getListContract = async () => {
        if (userAuth.user_id !== "") {
            const res = await API.get(format("/contracts/getListContract/{0}", userAuth.user_id), {})
            if (res.status === 200)
                setListConTract(res.data)
        }

    }

    const updateContract = async (contractId: string) => {
        const param: UpdateContract = {
            status: "Hủy"
        }
        const res = await API.post(format("/contracts/update-contracct/{0}", contractId), param, {})
        if (res.status === 200) {
            setListConTract(listConTract.filter(item => item.contract_id !== contractId))
        }
    }

    const onDisMiss = () => {
        setContractCodeChoose("")
        setIshowContractDetail(false)
    }

    const handleShowDialogDetail = (contractCode: string) => {
        setContractCodeChoose(contractCode)
        setIshowContractDetail(true)
    }

    return (
        <div>
            <Navbar/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <div>
                    <div style={{marginTop: '140px'}}>
                        {/*<img src={userAuth.}/>*/}
                        <img src="https://i.insider.com/5f5290957ed0ee001e25da2c?width=700"/>
                    </div>
                    <div>{"Họ tên: " + userAuth.fullName}</div>
                    <div>{"Ngày sinh: " + userAuth.birthday}</div>
                    <div>{"Địa chỉ: " + userAuth.address}</div>
                    <div>{"Điện thoại: " + userAuth.phone}</div>
                    <div>{"Email:  " + userAuth.email}</div>
                </div>
                <div></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <div style={{overflow: 'auto', maxHeight: '600px'}}>
                    {listConTract.map((item, index) => {
                        if (item.status === "Chưa thanh toán")
                            return <div style={{marginBottom: '10px'}} key={item.contract_id}>
                                <div>Mã hợp đồng: {item.contract_code}</div>
                                <div>Trạng thái: {item.status}</div>
                                <div>Tổng tiền: {item.total_money}</div>
                                <div className="d-flex justify-content-between mt-2">
                                    {!["Đã trả phòng", "Đã nhận phòng"].includes(item.status) &&
                                        <button onClick={() => updateContract(item.contract_id)}>Hủy đặt phòng</button>}
                                </div>
                                <button onClick={() => handleShowDialogDetail(item.contract_code)} className="mt-2">Xem
                                    chi tiết
                                </button>
                            </div>
                    })}
                </div>
                <div></div>
                {isShowContracrDetail && <QuanlyHopDongDanhSach contractCode={contractCodeChoose} onDisMiss={onDisMiss}/>}
            </div>
            <Footer/>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isShowSnackbar}
                autoHideDuration={6000}
                onClose={() => setIsShowSnackBar(false)}
                message="Hủy hợp đồng thành công"
            >
                <Alert severity="success">Hủy hợp đồng thành công</Alert>
            </Snackbar>
        </div>
    );
}

export default UseWall;
