import Navbar from "../navbar";
import Footer from "../footer";
import React, {useState} from "react";
import QuanlyTaiKhoan from "./QuanlyTaiKhoan";
import QuanlyHopDong from "./QuanlyHopDong";
import QuanlyDanhSachPhong from "./QuanlyDanhSach";

function Quanly() {
    const [showQuanLyTaiKhoan, setShowQuanLyTaiKhoan] = useState(true)
    const [showQuanLyHopDong, setShowQuanLyHopDong] = useState(false)
    const [showQuanLyDanhSach, setShowQuanLyDanhSach] = useState(false)

    const channgeTK = () => {
        setShowQuanLyTaiKhoan(true)
        setShowQuanLyHopDong(false)
        setShowQuanLyDanhSach(false)
    }

    const channgeHD = () => {
        setShowQuanLyTaiKhoan(false)
        setShowQuanLyHopDong(true)
        setShowQuanLyDanhSach(false)
    }

    const channgeDS = () => {
        setShowQuanLyTaiKhoan(false)
        setShowQuanLyHopDong(false)
        setShowQuanLyDanhSach(true)
    }


    return (
        <div>
            <Navbar/>
            <div style={{marginTop: '100px'}} className="d-flex p-4 justify-content-between">
                <div>
                    <div onClick={channgeTK} style={{cursor: 'pointer', marginBottom: '20px'}}>
                        <button style={{width: '165px'}}>
                            Quản lý tài khoản
                        </button>
                    </div>
                    <div onClick={channgeHD} style={{cursor: 'pointer', marginBottom: '20px'}}>
                        <button style={{width: '165px'}}>
                            Quản lý hợp đồng
                        </button>
                    </div>
                    <div onClick={channgeDS} style={{cursor: 'pointer', marginBottom: '20px'}}>
                        <button style={{width: '165px'}}>
                            Danh sách phòng
                        </button>
                    </div>
                </div>
                {showQuanLyTaiKhoan && <div style={{padding: '20px'}}><QuanlyTaiKhoan/></div>}
                {showQuanLyHopDong && <div style={{padding: '20px'}}><QuanlyHopDong/></div>}
                {showQuanLyDanhSach && <div style={{padding: '20px'}}><QuanlyDanhSachPhong/></div>}
                <div></div>
            </div>
            <Footer/>
        </div>
    );
}

export default Quanly;