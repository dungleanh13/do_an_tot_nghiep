import Dialog from "@mui/material/Dialog";
import React, {useState} from "react";
import ClientNetwork from "../axios";
import {AddRoom} from "../interface";
import {AddRoomMock} from "../Mock";

interface Props {
    dismiss: () => void
}


function DialogAddRoom(props: Props) {
    const {dismiss} = props
    const API: ClientNetwork = new ClientNetwork()
    const [params, setParams] = useState<AddRoom>(AddRoomMock)
    const [dataUri, setDataUri] = useState<any>('')


    const onChangeImg = async (event: any) => {
        const file = event.target.files[0]
        fileToDataUri(file)
            .then(dataUri => {
                params.img = dataUri
                setParams(params)
                setDataUri(dataUri)
            })
    }

    const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })


    const onChangeName = (value: any) => {
        params.roomName = value
        setParams(params)
    }
    const onChangeDes = (value: any) => {
        params.descriptionOtherConvenience = value
        setParams(params)
    }

    const onChangeRoomCode = (value: any) => {
        params.roomCode = value
        setParams(params)
    }

    const onChangeRoomCost = (value: any) => {
        params.roomCost = value
        setParams(params)
    }

    const onChangeRoomArea = (value: any) => {
        params.roomArea = value
        setParams(params)
    }

    const onChangeNumberOfFloors = (value: any) => {
        params.numberOfFloors = value
        setParams(params)
    }

    const createRoom = async () => {
        const res = await API.post("/services/create-room", params, {})
        console.log(res)
    }

    return (
        <>
            <Dialog
                open={true}>
                <div style={{padding: '30px'}}>
                    <div className="d-flex justify-content-between">
                        <div>Thêm phòng</div>
                        <div onClick={dismiss}
                             style={{display: 'flex', justifyContent: 'end', marginBottom: '10px', cursor: 'pointer'}}>
                            <button>Đóng</button>
                        </div>
                    </div>
                    <div>
                        <input style={{width: "200px", height: '40px'}} onChange={event => onChangeImg(event)}
                               type="file"/>
                    </div>
                    <img style={{width: '150px', height: "150px", marginTop: '10px', marginBottom: '10px'}}
                         src={dataUri}/>
                    <div>
                        <input style={{width: "200px", height: '40px'}}
                               onChange={event => onChangeName(event.target.value)}
                               placeholder="Tên phòng"
                               type="text"/>
                    </div>
                    <div>
                        <input style={{width: "200px", height: '40px'}}
                               onChange={event => onChangeDes(event.target.value)}
                               placeholder="Mô tả" type="text"/>
                    </div>
                    <div>
                        <input style={{width: "200px", height: '40px'}}
                               onChange={event => onChangeRoomCode(event.target.value)}
                               placeholder="Mã phòng" type="text"/>
                    </div>
                    <div>
                        <input style={{width: "200px", height: '40px'}}
                               onChange={event => onChangeRoomArea(event.target.value)}
                               placeholder="Diện tích" type="text"/>
                    </div>
                    <div>
                        <input style={{width: "200px", height: '40px'}}
                               onChange={event => onChangeNumberOfFloors(event.target.value)}
                               placeholder="Số tầng" type="number"/>
                    </div>
                    <div>
                        <input style={{width: "200px", height: '40px'}}
                               onChange={event => onChangeRoomCost(event.target.value)}
                               placeholder="Đơn giá/ngày" type="number"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <div></div>
                    <button onClick={createRoom}>Thêm</button>
                    <div></div>
                </div>
            </Dialog>
        </>
    );
}

export default DialogAddRoom;
