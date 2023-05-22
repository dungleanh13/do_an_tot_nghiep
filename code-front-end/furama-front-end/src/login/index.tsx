import React, {useState} from "react";
import "./login.scss"
import {useNavigate} from "react-router-dom";
import {ILogin} from "../interface";
import ClientNetwork from "../axios";
import Navbar from "../navbar";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../Redux/Actions/Auth";
import { Button } from "@mui/material";


function Login() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const API: ClientNetwork = new ClientNetwork()
    const dispatch = useDispatch();


    const goto = (url: string) => {
        navigate(url)
    }

    const login = async () => {
        const param: ILogin = {
            user_name: userName,
            password: password
        }

        const res = await API.post("/login", param, {})
        if (res.status === 200) {
            navigate("/home")
            dispatch(setLogin(res.data))
        }
    }

    return (
        <div className="login-page" style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
            <div></div>
            <div style={{display: 'none'}}><Navbar/></div>
            <div style={{marginTop: '100px'}} className="card">
                <div style={{
                    padding: '30px',
                    display: "flex",
                    justifyContent: 'space-between',
                    color: 'white',
                    alignItems: 'center'
                }}
                     className="card-header">
                    <span style={{fontSize: '24px', marginRight: '10px'}}>Đăng nhập</span>
                    <span style={{cursor: 'pointer'}} onClick={() => goto("/home")}><Button variant="text" style={{color: '#fff'}}>Trang chủ</Button></span>
                </div>
                <div className="card-body">
                    <div style={{padding: '20px 40px'}}>
                        <div className="input-group form-group">
                            <input onChange={(event) => setUserName(event.target.value)} type="text"
                                   className="form-control"
                                   placeholder="Tên tài khoản" name="username"/>
                        </div>
                        <div style={{marginTop: '10px'}} className="input-group form-group">
                            <input onChange={(event) => setPassword(event.target.value)} type="password"
                                   className="form-control"
                                   placeholder="Mật khẩu" name="password"/>
                        </div>
                        <div onClick={() => login()} style={{marginTop: '20px'}} className="form-group">
                            <span style={{cursor: 'pointer', color: 'white'}}><Button variant="contained">Đăng nhập</Button></span>
                        </div>
                    </div>
                </div>
                <div style={{padding: '20px'}} className="card-footer">
                    <div className="d-flex justify-content-between links">
                        <span style={{marginRight: '10px'}}>Bạn chưa có tài khoản?</span>
                        <span onClick={() => goto("/register")} style={{cursor: 'pointer'}}>Tạo tài khoản</span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Login;
