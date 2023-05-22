import React, {useEffect, useState} from "react";
import ClientNetwork from "../axios";
import {ContractRoom, UpdateContract} from "../interface";
import {ContractRoomMock} from "../Mock";
import {format} from "react-string-format";
import Dialog from "@mui/material/Dialog";
import {useDispatch, useSelector} from "react-redux";


interface Props {
    contractCode: string
    onDisMiss: () => void
}

function QuanlyHopDongDanhSach(props: Props) {
    const {contractCode, onDisMiss} = props
    const API: ClientNetwork = new ClientNetwork()
    const [listContractRoom, setListContractRoom] = useState<ContractRoom[]>([ContractRoomMock])
    const userAuth = useSelector((state: any) => state.auth)

    useEffect(() => {
        getAllContract().then()
    }, [])


    const getAllContract = async () => {
        const res = await API.get(format("/contracts/getContractRoom?contract_code={0}", contractCode), {})
        setListContractRoom(res.data)
    }

    const updateContract = async (contractRoomId: string, status: string) => {

        const param: UpdateContract = {
            status: status
        }

        const res = await API.post(format("/contracts/update-contract-room/{0}", contractRoomId), param, {})
        if (res.status === 200)
            getAllContract().then()
    }

    return (
        <Dialog
            open={true}>
            <div style={{width: '600px'}}>
                <div style={{padding: '30px'}}>
                    <div onClick={onDisMiss}
                         style={{display: 'flex', justifyContent: 'end', marginBottom: '10px', cursor: 'pointer'}}>
                        <button>Đóng</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div></div>
                        <div style={{overflow: 'auto', maxHeight: '600px'}}>
                            {listContractRoom.map((item, index) => {
                                return <div style={{marginBottom: '10px'}} key={item.contractRoomId}>
                                    <div>Mã hợp đồng: {item.contractCode}</div>
                                    <div>Tên phòng thái: {item.roomName}</div>
                                    <div>Ngày đặt: {item.contractStartDate}</div>
                                    <div>Ngày kết thúc: {item.contractEndDate}</div>
                                    <div>Trạng thái: {item.status}</div>
                                    <div>Tổng tiền: {item.money}</div>
                                    {userAuth.admin && item.status === "Chờ nhận phòng" && <div className="mt-3">
                                        <button
                                            onClick={() => updateContract(item.contractRoomId, "Đã nhận phòng")}>Checkin
                                        </button>
                                    </div>}

                                    {!userAuth.admin && item.status === "Chờ nhận phòng" && <div className="mt-3">
                                        <button
                                            onClick={() => updateContract(item.contractRoomId, "Hủy")}>Hủy
                                        </button>
                                    </div>}
                                </div>
                            })}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default QuanlyHopDongDanhSach;