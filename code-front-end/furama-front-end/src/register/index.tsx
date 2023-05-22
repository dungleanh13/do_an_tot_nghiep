import React, {useState} from "react";
import "../login/login.scss"
import {useNavigate} from "react-router-dom";
import {ParamRegister} from "../interface";
import ClientNetwork from "../axios"
import { Button } from "@mui/material";

function Register() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const API: ClientNetwork = new ClientNetwork()

    const navigate = useNavigate()

    const register = async () => {
        const param: ParamRegister = {
            user_name: userName,
            pass_word: password,
            full_name: fullName,
            address: address,
            email: email,
            phone: phone,
            birthday: birthday,
            gender: gender
        }

        const res = await API.post("/register", param, {})
        if (res.status === 200)
            navigate("/")
    }

    const goto = (url: string) => {
        navigate(url)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
            <div></div>
            <div style={{marginTop: '100px'}} className="card">
                <div style={{
                    padding: '30px',
                    display: "flex",
                    justifyContent: 'space-between',
                    color: 'white',
                    alignItems: 'center'
                }}
                     className="card-header">
                    <span style={{fontSize: '24px', marginRight: '10px'}}>Tạo tài khoản</span>
                    <span style={{cursor: 'pointer'}} onClick={() => goto("/")}>Trang chủ</span>
                </div>
                <div className="card-body">
                    <form style={{padding: '0 40px'}}>
                        <div style={{width: '300px'}} className="input-group form-group">
                            <div className="input-group-prepend">
                            </div>
                            <input style={{width: '100%'}}
                                   onChange={(event) => setUserName(event.target.value)}
                                   type="text" className="form-control" placeholder="username"
                                   name="username"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input style={{width: '100%'}} type="password" className="form-control"
                                   onChange={(event) => setPassword(event.target.value)}
                                   placeholder="password" name="password"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input style={{width: '100%'}}
                                   onChange={(event) => setFullName(event.target.value)}
                                   type="text" className="form-control" placeholder="fullName"
                                   name="fullName"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input style={{width: '100%'}} type="text" className="form-control" placeholder="email"
                                   onChange={(event) => setEmail(event.target.value)}
                                   name="email"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input onChange={(event) => setPhone(event.target.value)}
                                   style={{width: '100%'}} type="text" className="form-control" placeholder="phone"
                                   name="phone"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input style={{width: '100%'}} type="text" className="form-control" placeholder="address"
                                   onChange={(event) => setAddress(event.target.value)}
                                   name="address"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input style={{width: '101%'}} type="date"
                                   onChange={(event) => setBirthday(event.target.value)}
                                   className="form-control"/>
                        </div>
                        <div style={{width: '300px', marginTop: '5px'}} className="form-group">
                            <input style={{width: '100%'}} type="text" className="form-control" placeholder="giới tính"
                                   onChange={(event) => setGender(event.target.value)}
                                   name="giới tính"/>
                        </div>
                        <div style={{marginTop: '20px'}} className="form-group">
                            <input onClick={() => register()} value="Đăng ký" className="btn float-right login_btn" style={{color: "blue",backgroundColor: "white"}}/>
                        </div>

                    </form>
                </div>
                <div style={{padding: '20px'}} className="card-footer">
                    <div className="d-flex justify-content-between links">
                        <span style={{marginRight: '10px'}}>Đã có tài khoản?</span>
                        <span onClick={() => goto("/login")} style={{cursor: 'pointer'}}>
                            Đăng nhập
                        </span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Register;
