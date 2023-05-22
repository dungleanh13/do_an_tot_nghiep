import React, {useEffect, useState} from "react";
import {CreateContract, Room} from "../interface";
import {useSelector} from "react-redux";
import ClientNetwork from "../axios";
import moment from "moment";
import formattedNumber from "../helpers/price.helper";


interface Props {
    listRoom: Room[]
    reload: () => void
    remove: (infoRoomId: string) => void
}

function AddRoom(props: Props) {
    const {listRoom, reload, remove} = props
    const [totalMoney, setTotalMoney] = useState(0)
    const userAuth = useSelector((state: any) => state.auth)
    const API: ClientNetwork = new ClientNetwork()
    const listRoomChoose = listRoom


    useEffect(() => {
        listRoomChoose.forEach(item => {
            let a = moment(item.startDate, "YYYYMMDD");
            let b = moment(item.endDate, "YYYYMMDD");
            item.totalDate = b.dayOfYear() - a.dayOfYear();
        })
    }, [])


    const makeid = () => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 15) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const createContract = async () => {
        const param: CreateContract = {
            contract_deposit: totalMoney,
            info_room_list: listRoomChoose,
            user_id: userAuth.user_id,
            contract_code: makeid()
        }

        const res = await API.post("/contracts/create-contract", param, {})
        if (res.status === 200) {
            reload()
        }
    }




    const onChangeEndDateDate = (value: string, index: number) => {
        listRoomChoose[index].endDate = value;
        let a = moment(listRoomChoose[index].startDate, "YYYYMMDD");
        let b = moment(listRoomChoose[index].endDate, "YYYYMMDD");
        listRoomChoose[index].totalDate = b.dayOfYear() - a.dayOfYear();
    }

    const updateTotalMoney = () => {
        let sum = 0;
        listRoomChoose.forEach(item => {
            let a = moment(item.startDate, "YYYYMMDD");
            let b = moment(item.endDate, "YYYYMMDD");
            sum = sum + item.roomCost * (b.dayOfYear() - a.dayOfYear())
        })
        setTotalMoney(sum)
    }

    const getDefaultDate = (dateString: string) => {
        const value = dateString.replaceAll("-", "/");
        var a = moment(value, "YYYY/MM/DD");
        var curr = new Date(a.year(), a.month(), a.date() + 1)
        return curr.toISOString().substring(0, 10);
    }

    return (
        <div style={{marginTop: '100px'}}>
            {listRoomChoose && listRoomChoose.length > 0 && listRoomChoose.map((item, index) => {
                return (
                    <div
                        style={{display: 'flex', marginTop: '50px', marginLeft: '5px', marginRight: '10px'}}
                        key={item.infoRoomId}>
                        <div onClick={() => remove(item.infoRoomId)} style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: '10px',
                            cursor: 'pointer'
                        }}>
                            <button>x</button>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div><img style={{width: '100px', height: '100px'}} src={item.img}/>
                                <div style={{
                                    marginTop: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                </div>
                            </div>
                            <div style={{marginLeft: '20px', display: 'flex'}}>
                                <div style={{
                                    marginRight: '5px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>{item.roomName}</div>
                                <div
                                    style={{
                                        marginRight: '5px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>{"Đơn giá:" + formattedNumber(item.roomCost)}</div>
                                <div style={{
                                    width: '20px',
                                    marginLeft: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>Từ
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <input readOnly
                                           style={{marginLeft: '5px', height: '40px', width: '200px'}}
                                           value={item.startDate} type="date"/>
                                </div>
                                <div style={{marginLeft: '5px', display: 'flex', alignItems: 'center'}}>~</div>
                                <div style={{
                                    width: '20px',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    Đến
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <input min={item.startDate}
                                           defaultValue={getDefaultDate(item.endDate)}
                                           style={{marginLeft: '5px', height: '40px', width: '200px'}}
                                           onChange={(event) =>
                                               onChangeEndDateDate(event.target.value, index)}
                                           type="date"/>
                                </div>
                            </div>
                        </div>
                        <div style={{cursor: 'pointer', marginLeft: '10px', display: 'flex', alignItems: 'center'}}
                             onClick={() => updateTotalMoney()}>
                            <button style={{height: '40px'}}>Cập nhật</button>
                        </div>
                    </div>
                )
            })}
            <div style={{color: 'black', display: 'flex', justifyContent: 'end'}}>
                <span>{totalMoney + " VND"}</span>
            </div>
            <div style={{color: 'black', display: 'flex', justifyContent: 'end', cursor: "pointer"}}>
                <span onClick={() => createContract()}><button>Đặt phòng</button></span>
            </div>
        </div>
    );
}

export default AddRoom;
