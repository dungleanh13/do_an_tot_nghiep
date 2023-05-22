import React, {useEffect, useState} from "react";
import ClientNetwork from "../axios";
import {IUser} from "../interface";
import {UserMock} from "../Mock";
import {useSelector} from "react-redux";
import DialogAddUser from "./DialogAdUser";
import {format} from "react-string-format";

function QuanlyTaiKhoan() {
    const API: ClientNetwork = new ClientNetwork()
    const [listAccount, setListAccount] = useState<IUser[]>([UserMock])
    const userAuth = useSelector((state: any) => state.auth)
    const [isShowDialogAddUser, setIsShowDialogAddUser] = useState(false)

    useEffect(() => {
        getLiAccount().then()
    }, [])

    const getLiAccount = async () => {
        const res = await API.get("/user/list-account", {})
        setListAccount(res.data.filter((item: any) => item.user_id !== userAuth.user_id))
    }

    const deleteAccount = async (userId: string) => {
        const res = await API.post(format("/user/delete/{0}", userId), {}, {})
        if (res.status === 200)
            window.location.reload()
    }

    return (
        <div style={{width: '1000px'}}>
            <div>
                <button onClick={() => setIsShowDialogAddUser(true)}>Thêm</button>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th style={{width: '150px'}}>Tên đang nhập</th>
                    <th style={{width: '150px'}}>Ho và tên</th>
                    <th style={{width: '150px'}}>Email</th>
                    <th style={{width: '150px'}}>Phone</th>
                    <th style={{width: '150px'}}>Địa Chỉ</th>
                    <th style={{width: '150px'}}>Giới tính</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {listAccount.map((item, index) => {
                    return <tr key={item.user_id}>
                        <td>{item.user_name}</td>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.gender}</td>
                        <td className="d-flex justify-content-center">
                            <div className="d-flex">
                                <button onClick={() => deleteAccount(item.user_id)}>Xóa</button>
                            </div>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            {isShowDialogAddUser && <DialogAddUser dismiss={() => setIsShowDialogAddUser(false)}/>}
        </div>
    );
}

export default QuanlyTaiKhoan;