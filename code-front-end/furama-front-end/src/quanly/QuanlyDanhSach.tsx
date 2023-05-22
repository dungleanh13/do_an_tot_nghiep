import React, {useEffect, useState} from "react";
import ClientNetwork from "../axios";
import {Room, RoomUpdate} from "../interface";
import {RoomMock, RoomUpdateMOck} from "../Mock";
import DialogAddRoom from "./DialogAddRoom";
import {format} from "react-string-format";


function QuanlyDanhSachPhong() {
    const API: ClientNetwork = new ClientNetwork()
    const [listRoom, setListRoom] = useState<Room[]>([RoomMock])
    const [isShowAddRoom, setIsShowAddRoom] = useState(false)
    const [roomUpdate, setRoomUpadte] = useState<RoomUpdate>(RoomUpdateMOck)

    useEffect(() => {
        getListRoom().then()
    }, [])


    const getListRoom = async () => {
        const res = await API.get("/services/", {})
        if (res.status === 200)
            setListRoom(res.data)
    }

    const onChangeImage = (event: any) => {
        const file = event.target.files[0]
        fileToDataUri(file)
            .then(dataUri => {
                if (typeof dataUri === "string") {
                    roomUpdate.img = dataUri
                }
                setRoomUpadte(roomUpdate)
            })
    }

    const onChangeRoomName = (value: string) => {
        roomUpdate.roomName = value
        setRoomUpadte(roomUpdate)
    }

    const onChangeRoomCode = (value: string) => {
        roomUpdate.roomCode = value
        setRoomUpadte(roomUpdate)
    }

    const onChangeRoomCost = (value: string) => {
        roomUpdate.roomCost = Number.parseInt(value)
        setRoomUpadte(roomUpdate)
    }
    const onChangeRoomDes = (value: string) => {
        roomUpdate.descriptionOtherConvenience = value
        setRoomUpadte(roomUpdate)
    }

    const onChangeRoomStatus = (value: string) => {
        roomUpdate.status = value
        setRoomUpadte(roomUpdate)
    }

    const onChangeRoomRomArea = (value: string) => {
        roomUpdate.roomArea = value
        setRoomUpadte(roomUpdate)
    }

    const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })


    const deleteRoom = async (roomId: string) => {
        const res = await API.post(format("/services/delete-room/{0}", roomId), {}, {})
        if (res.status === 200)
            setListRoom( listRoom.filter(item => item.infoRoomId !== roomId))
    }

    const updateRoom = async (roomId: string) => {
        const res = await API.post(format("/services/update-room/{0}", roomId), roomUpdate, {})
        if (res.status === 200) {
            getListRoom().then()
            setRoomUpadte(RoomUpdateMOck)
        }

    }

    return (
        <div style={{width: '1250px'}}>
            <div>
                <button onClick={() => setIsShowAddRoom(true)}>Thêm phòng</button>
            </div>

            <table className="table table-hover">
                <thead>
                <tr>
                    <th style={{width: '150px', textAlign: "center"}}>Ảnh</th>
                    <th style={{width: '140px', fontSize: '14px'}}>Tên phòng</th>
                    <th style={{width: '140px', fontSize: '14px'}}>Mã phòng</th>
                    <th style={{width: '100px', fontSize: '14px'}}>Trạng thái</th>
                    <th style={{width: '170px', fontSize: '14px'}}>Mô tả</th>
                    <th style={{width: '130px', fontSize: '14px'}}>Diện tích (m2)</th>
                    <th style={{width: '115px', maxWidth: '125px', fontSize: '14px'}}>Đơn giá/ngày(VND)</th>
                    <th style={{width: '150px', fontSize: '14px'}} className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {listRoom.map((item, index) => {
                    return <tr key={item.infoRoomId}>
                        <td style={{width: '150px', fontSize: '14px'}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div></div>
                                <img style={{width: '150px', height: '150px'}} src={item.img}/>
                                <div></div>
                            </div>}
                            {roomUpdate.infoRoomId === item.infoRoomId &&
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div></div>
                                    <img style={{width: '150px', height: '150px'}} src={roomUpdate.img}/>
                                    <div></div>
                                </div>
                            }
                            {roomUpdate.infoRoomId === item.infoRoomId && <input style={{width: '150px', marginBottom: '10px'}} type="file"/>}
                        </td>
                        <td style={{width: '140px', fontSize: '14px', wordBreak: "break-word"}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && item.roomName}
                            {roomUpdate.infoRoomId === item.infoRoomId && <textarea onChange={event =>
                                onChangeRoomName(event.target.value)} defaultValue={item.roomName}/>}
                        </td>
                        <td style={{width: '140px', fontSize: '14px', wordBreak: "break-word"}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && item.roomCode}
                            {roomUpdate.infoRoomId === item.infoRoomId && <textarea onChange={(event) => onChangeRoomCode(event.target.value)}
                                                                                    defaultValue={item.roomCode} />}

                        </td>
                        <td style={{width: '80px', fontSize: '14px'}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && item.status}
                            {roomUpdate.infoRoomId === item.infoRoomId && <textarea onChange={(event) => onChangeRoomStatus(event.target.value)}
                                                                                    defaultValue={item.status} />}

                        </td>
                        <td style={{width: "170px", fontSize: '14px'}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && item.descriptionOtherConvenience}
                            {roomUpdate.infoRoomId === item.infoRoomId && <textarea onChange={(event) => onChangeRoomDes(event.target.value)}
                                                                                    rows={5}
                                                                                    defaultValue={item.descriptionOtherConvenience}/>}

                        </td>
                        <td style={{width: '130px', fontSize: '14px'}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && item.roomArea}
                            {roomUpdate.infoRoomId === item.infoRoomId && <textarea onChange={(event) => onChangeRoomRomArea(event.target.value)}
                                                                                    defaultValue={item.roomArea} />}

                        </td>
                        <td style={{width: '150px', maxWidth: '125px', fontSize: '14px'}}>
                            {roomUpdate.infoRoomId !== item.infoRoomId && item.roomCost}
                            {roomUpdate.infoRoomId === item.infoRoomId && <textarea onChange={(event) => onChangeRoomCost(event.target.value)}  defaultValue={item.roomCost.toString()}/>}

                        </td>
                        <td style={{width: '150px', fontSize: '14px'}}>
                            <div className="mb-2 d-flex justify-content-center">
                                <div></div>
                                {roomUpdate.infoRoomId !== item.infoRoomId && <button onClick={() => setRoomUpadte(item)}>Chỉnh sửa</button>}
                                {roomUpdate.infoRoomId === item.infoRoomId && <button onClick={() => updateRoom(item.infoRoomId)}>Cập nhật</button>}
                                {roomUpdate.infoRoomId === item.infoRoomId && <button onClick={() => setRoomUpadte(RoomMock)}>Hủy</button>}
                                <div></div>
                            </div>
                            {item.status === "Trống" && <div className="mb-2 d-flex justify-content-center">
                                <div></div>
                                <button onClick={() => deleteRoom(item.infoRoomId)}>Xóa phòng</button>
                                <div></div>
                            </div>}
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            {isShowAddRoom && <DialogAddRoom dismiss={() => setIsShowAddRoom(false)}/>}
        </div>
    );
}

export default QuanlyDanhSachPhong;