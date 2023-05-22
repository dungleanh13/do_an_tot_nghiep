import Dialog from "@mui/material/Dialog";
import React, {useState} from "react";
import ClientNetwork from "../axios";
import {AddUser} from "../interface";
import {AddUserMock} from "../Mock";

interface Props {
    dismiss: () => void
}


function DialogAddUser(props: Props) {
    const {dismiss} = props
    const API: ClientNetwork = new ClientNetwork()
    const [open, setOpen] = useState<boolean>(false);
    const [param, setParam] = useState<AddUser>(AddUserMock)

    const onChaneUserName = (userName: string) => {
        param.user_name = userName
        setParam(param)
    }


    const onChaneFullName = (fullName: string) => {
        param.full_name = fullName
        setParam(param)
    }

    const onChaneEmail = (email: string) => {
        param.email = email
        setParam(param)
    }

    const onChanePhone = (phone: string) => {
        param.phone = phone
        setParam(param)
    }

    const onChaneAddress = (address: string) => {
        param.address = address
        setParam(param)
    }


    const onChaneGender = (gender: string) => {
        param.gender = gender
        setParam(param)
    }


    const onChaneBirthDay = (birthday: string) => {
        param.birthday = birthday
        setParam(param)
    }

    const createUser = async () => {
        const res = await API.post("/register", param, {})
        if (res.status === 200)
            window.location.reload()
    }

    return (
        <>
            <Dialog
                open={true}>
                <div style={{padding: '30px'}}>
                   <div className="d-flex justify-content-between">
                       <div>Thêm người dùng</div>
                       <div onClick={dismiss}
                            style={{display: 'flex', justifyContent: 'end', marginBottom: '10px', cursor: 'pointer'}}>
                           <button>Đóng</button>
                       </div>
                   </div>
                    <div>
                        <input onChange={event => onChaneUserName(event.target.value)}
                               placeholder="tên đăng nhập"style={{width: "200px", height: '40px'}} type="text"/>
                    </div>
                    <div>
                        <input onChange={event => onChaneFullName(event.target.value)}
                               placeholder="Họ và tên" style={{width: "200px", height: '40px'}} type="text"/>
                    </div>
                    <div>
                        <input onChange={event => onChaneEmail(event.target.value)}
                               placeholder="email" style={{width: "200px", height: '40px'}} type="text"/>
                    </div>
                    <div>
                        <input onChange={event => onChanePhone(event.target.value)}
                               placeholder="phone" style={{width: "200px", height: '40px'}} type="text"/>
                    </div>
                    <div>
                        <input onChange={event => onChaneAddress(event.target.value)}
                               placeholder="Địa chỉ" style={{width: "200px", height: '40px'}} type="text"/>
                    </div>
                    <div>
                        <input onChange={event => onChaneGender(event.target.value)}
                               placeholder="Giới tính" style={{width: "200px", height: '40px'}} type="text"/>
                    </div>
                    <div>
                        <input onChange={event => onChaneBirthDay(event.target.value)}
                               style={{width: "200px", height: '40px'}} type="date"/>
                    </div>
                </div>
                <div
                     style={{display: 'flex', justifyContent: 'center', marginBottom: '10px', cursor: 'pointer'}}>
                    <button onClick={createUser}>Thêm</button>
                </div>
            </Dialog>
        </>
    );
}

export default DialogAddUser;
