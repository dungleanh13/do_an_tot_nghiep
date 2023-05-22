import {useNavigate} from "react-router-dom";
import {Room} from "../interface";
import ClientNetwork from "../axios";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../Redux/Actions/Auth";
import {useEffect, useState} from "react";
import {UserMock} from "../Mock";
import {format} from "react-string-format";


function Navbar() {
    const navigate = useNavigate()
    const API: ClientNetwork = new ClientNetwork()
    const userAuth = useSelector((state: any) => state.auth)

    const dispatch = useDispatch();



    const goto = (url: string) => {
        navigate(url)
    }
    const logout = async () => {
        const res = await API.post("user/logout", {}, {})
        if (res.status === 200) {
            dispatch(setLogin(UserMock))
            navigate("/home")
        }
    }



    return (
        <div style={{
            background: "#046056", position: "fixed", zIndex: 2, width: "100%",
            display: "flex", justifyContent: "center", top: 0
        }}>
            <div style={{display: "flex", color: "transparent"}}>
                <a className="navbar-brand">
                    <img style={{cursor: "pointer"}}
                         onClick={() => goto("/home")}
                         src="https://phuongviethcm.com/wp-content/uploads/2019/07/FURAMA.png" alt="" width="120"
                         height="100"
                         className="d-inline-block align-text-top"/>
                </a>
                <div className="d-flex align-items-center">
                    <div style={{marginTop: '40px'}}>
                        <p onClick={() => goto("/amthuc")} className="p-0 m-0" style={{
                            cursor: "pointer", margin: 0, color: 'white',
                            width: '85px', height: '40px', fontSize: '20px',
                            display: 'inline-block'
                        }}>Ẩm thực</p>
                        <p onClick={() => goto("/room")} className="p-0 m-0" style={{
                            cursor: "pointer",
                            margin: 0,
                            color: 'white',
                            width: '120px',
                            height: '40px',
                            fontSize: '20px',
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>Loại phòng</p>
                        <p onClick={() => goto("/hoinghi")} className="p-0 m-0" style={{
                            cursor: "pointer",
                            margin: 0,
                            color: 'white',
                            width: '200px',
                            height: '40px',
                            fontSize: '20px',
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>Hội nghị và sự kiện</p>
                        <p onClick={() => goto("/giaitri")} className="p-0 m-0" style={{
                            cursor: "pointer", margin: 0, color: 'white',
                            width: '85px', height: '40px', fontSize: '20px', display: 'inline-block'
                        }}>Giải trí</p>
                        <p onClick={() => goto("/spa")} className="p-0 m-0" style={{
                            cursor: "pointer", margin: 0, color: 'white',
                            width: '55px', height: '40px', fontSize: '20px', display: 'inline-block'
                        }}>Spa</p>
                        <p onClick={() => goto("/diemden")} className="p-0 m-0" style={{
                            cursor: "pointer", margin: 0, color: 'white',
                            width: '100px', height: '40px', fontSize: '20px', display: 'inline-block'
                        }}>Điểm đến</p>
                        {userAuth.admin && <p onClick={() => goto("/quanly")}
                                       className="p-0 m-0" style={{
                            cursor: "pointer", margin: 0, color: 'white',
                            width: '100px', height: '40px', fontSize: '20px', display: 'inline-block'
                        }}>Quản lý</p>}
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{height: '40px', marginTop: '40px', display: 'flex'}}>
                        {userAuth && userAuth.user_id !== "" &&
                            <button onClick={logout} style={{marginLeft: '80px', height: '34px'}}
                                    className="btn btn-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person-check" viewBox="0 0 16 16">
                                    <path
                                        d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fillRule="evenodd"
                                          d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                <span>Logout</span>
                            </button>}
                        {userAuth?.user_id === "" &&
                            <button onClick={() => goto("/login")} style={{marginLeft: '80px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                    className="btn btn-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person-check" viewBox="0 0 16 16">
                                    <path
                                        d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fillRule="evenodd"
                                          d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                <span style={{marginRight: '4px'}}>Login</span>
                            </button>}
                        <div onClick={() => goto("/userWall")} style={{fontSize: '20px', color: 'white', marginLeft: "20px", cursor: 'pointer'}}>
                            {userAuth.user_name}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;