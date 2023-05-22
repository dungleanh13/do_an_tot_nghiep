import React, {useEffect, useState} from "react";
import ClientNetwork from "../axios";
import {Contract, Room, UpdateContract} from "../interface";
import {ContractMock, RoomMock} from "../Mock";
import {format} from "react-string-format";
import {useNavigate} from "react-router-dom";
import QuanlyHopDongDanhSach from "./QuanlyHopDongDanhSach";

function QuanlyHopDong() {
    const API: ClientNetwork = new ClientNetwork()
    const [listContract, setListContract] = useState<Contract[]>([ContractMock])
    const [listRoom, setListRoom] = useState<Room[]>([RoomMock])
    const navigate = useNavigate()
    const [isShowDetailContract, setIsShowDetailContract] = useState(false)
    const [contractCodeChoose, setContractCodeChoose] = useState("")
    useEffect(() => {
        getAllContract().then()
        getListRoom().then()
    }, [])

    const getAllContract = async () => {
        const res = await API.get("/contracts/getAllContract", {})
        setListContract(res.data)
    }

    const getListRoom = async () => {
        const res = await API.get("/services/", {})
        if (res.status === 200)
            setListRoom(res.data)
    }

    const getRoomName = (roomId: string) => {
        if (listRoom) return listRoom.filter(item => item.infoRoomId.toString() === roomId.toString())[0]?.roomName ?? ""
    }


    const updateContract = async (contract: Contract, status: string) => {
        const param: UpdateContract = {
            status: status
        }
        const res = await API.post(format("/contracts/update-contracct/{0}", contract.contract_id), param, {})
        if (res.status === 200)
            getAllContract().then()
    }

    const onDisMiss = () => {
        setContractCodeChoose("")
        setIsShowDetailContract(false)
    }

    const handleShowDialogDetail = (contractCode: string) => {
        setContractCodeChoose(contractCode)
        setIsShowDetailContract(true)
    }

    return (
        <div style={{width: '1000px'}}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Mã hợp đồng</th>
                    <th>Tên người đặt</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {listContract.map((item, index) => {
                    return <tr>
                        <td>{item.contract_code}</td>
                        <td>{item.user.user_name}</td>
                        <td>{item.total_money}</td>
                        <td>{item.status}</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <div></div>
                                <div>
                                    {item.status === "Chưa thanh toán" &&
                                        <button className="ms-1 me-2"
                                                onClick={() => updateContract(item, "Đã thanh toán")}>Thanh
                                            toán</button>}
                                    <button onClick={() => handleShowDialogDetail(item.contract_code)}>Xem chi tiết</button>
                                </div>
                                <div></div>
                            </div>

                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            {isShowDetailContract && <QuanlyHopDongDanhSach onDisMiss={onDisMiss} contractCode={contractCodeChoose}/>}
        </div>
    );
}

export default QuanlyHopDong;