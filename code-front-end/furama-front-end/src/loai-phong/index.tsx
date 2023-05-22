import React, {useEffect, useState} from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import ClientNetwork from "../axios";
import {Room} from "../interface";
import {RoomMock} from "../Mock";
import AddRoom from "./AddRoom";
import RoomDetail from "./RoomDetail";


function ListRoom() {
    const API: ClientNetwork = new ClientNetwork()
    const [listRoom, setListRoom] = useState<Room[]>([RoomMock])
    const [iShowDialogDetail, setIShowDialogDetail] = useState(false)
    const [roomChoose, setRoomChoose] = useState<any>()
    const [listRoomChoose, setListRoomChoose] = useState<Room[]>([])
    const [isShowAdd, setIsShowAdd] = useState(false)

    useEffect(() => {
        getListRoom().then()
    }, [isShowAdd])


    const getListRoom = async () => {
        const res = await API.get("/services/", {})
        if (res.status === 200)
            setListRoom(res.data)
    }

    const chooseItem = (item: Room) => {
        setRoomChoose(item)
        setIShowDialogDetail(true)
    }

    const addRooms = (startDate: string, endĐate: string) => {
        roomChoose.startDate = startDate
        roomChoose.endDate = endĐate
        if (listRoomChoose.length <= 0) listRoomChoose.push(roomChoose)
        else listRoomChoose.forEach(item => {
            if (item.infoRoomId !== roomChoose.infoRoomId)
                listRoomChoose.push(roomChoose)
        })
        setListRoomChoose(listRoomChoose)
        setIShowDialogDetail(false)
    }

    const reload = () => {
        setIsShowAdd(false )
        getListRoom().then()
        setListRoomChoose([])
        setIShowDialogDetail(false)
    }

    const remove = (infoRoomId: string) => {
        setListRoomChoose(listRoomChoose.filter(item => item.infoRoomId !== infoRoomId))
    }

    return (
        <>
            <div>
                <Navbar/>
                <div>
                    <div style={{
                        width: "100%", height: "700px",
                        marginTop: "110px !important",
                        backgroundSize: "cover", backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                        backgroundImage: "url('https://pix10.agoda.net/hotelImages/463/463255/463255_17010415020050117322.jpg?ca=6&ce=1&s=1024x768')"
                    }}>
                        <div style={{width: "100%", height: "132px"}}></div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1 style={{marginTop: '200px',color: "white", fontSize: "40px"}}>LOẠI PHÒNG</h1></div>
                        <div style={{width: "100%", height: "132px"}}></div>
                    </div>
                </div>
                <div onClick={() => setIsShowAdd(!isShowAdd)}
                     style={{cursor: "pointer", position: "fixed", top: '55px', right: '130px', zIndex: '3'}}>
                    <svg style={{marginTop: '5px'}} xmlns="http://www.w3.org/2000/svg" version="1.1" width="25"
                         height="30"
                         viewBox="0 0 256 256">
                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                            <path fill="#ffffff"
                                  d="M 89.138 21.425 c -0.824 -1.103 -2.087 -1.736 -3.464 -1.736 H 17.129 l -0.886 -3.413 c -0.704 -2.713 -3.153 -4.607 -5.956 -4.607 H 1 c -0.552 0 -1 0.448 -1 1 c 0 0.552 0.448 1 1 1 h 9.287 c 1.892 0 3.545 1.279 4.021 3.11 l 11.165 42.995 c 0.114 0.441 0.512 0.749 0.968 0.749 h 52.201 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 27.214 l -2.398 -9.232 h 53.3 c 2.704 0 5.128 -1.812 5.894 -4.404 l 5.809 -19.649 C 90.21 23.918 89.961 22.528 89.138 21.425 z M 87.901 24.671 l -5.809 19.649 c -0.518 1.75 -2.152 2.972 -3.977 2.972 H 24.297 l -6.649 -25.602 h 68.025 c 0.74 0 1.418 0.34 1.861 0.933 C 87.977 23.215 88.111 23.961 87.901 24.671 z"
                                  transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                            <path fill="#ffffff"
                                  d="M 35.47 78.331 c -3.762 0 -6.822 -3.061 -6.822 -6.822 s 3.061 -6.822 6.822 -6.822 c 3.762 0 6.823 3.061 6.823 6.822 S 39.232 78.331 35.47 78.331 z M 35.47 66.686 c -2.659 0 -4.822 2.163 -4.822 4.822 c 0 2.659 2.163 4.822 4.822 4.822 s 4.823 -2.163 4.823 -4.822 C 40.293 68.849 38.129 66.686 35.47 66.686 z"
                                  transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                            <path fill="#ffffff"
                                  d="M 68.27 78.331 c -3.762 0 -6.822 -3.061 -6.822 -6.822 s 3.061 -6.822 6.822 -6.822 c 3.763 0 6.823 3.061 6.823 6.822 S 72.032 78.331 68.27 78.331 z M 68.27 66.686 c -2.659 0 -4.822 2.163 -4.822 4.822 c 0 2.659 2.163 4.822 4.822 4.822 c 2.659 0 4.823 -2.163 4.823 -4.822 C 73.093 68.849 70.929 66.686 68.27 66.686 z"
                                  transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                        </g>
                    </svg>
                </div>
                {!isShowAdd &&
                    <div style={{backgroundImage: "url()", display: 'flex', flexWrap: 'wrap', marginTop: '80px', textAlign: 'center', justifyContent: 'center'}}>
                        {listRoom.map((item) => {
                            return (
                                <div style={{marginTop: '50px', marginLeft: '32px', marginRight: '40px'}}
                                     key={item.infoRoomId}>
                                    <div style={{display: 'flex'}}>
                                        <div><img style={{width: '350px', height: '240px'}} src={item.img}/>
                                            <div style={{
                                                marginTop: '10px',
                                                justifyContent: 'space-between'
                                            }}>
                                                <div style={{display: 'flex', alignItems: "center"}}>
                                                    <div style={{marginRight: '5px'}}><h5>{item.roomName}</h5></div>
                                                </div>
                                                <div>{"Diện tích: " + item.roomArea + " m2"}</div>

                                                <div onClick={() => chooseItem(item)}
                                                     style={{cursor: 'pointer', marginTop: '10px'}}>
                                                    <button>Xem chi tiết </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>}
                <div style={{
                    backgroundImage: "url()",
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: "20px"
                }}>
                    <div></div>
                    {isShowAdd && <AddRoom remove={remove} listRoom={listRoomChoose} reload={reload}/>}
                    <div></div>
                </div>
                <Footer/>
            </div>
            {iShowDialogDetail && <RoomDetail
                addListRoom={addRooms}
                room={roomChoose}
                dismiss={() => setIShowDialogDetail(false)}/>}
        </>
    );
}

export default ListRoom;