import {BrowserRouter, Route, Routes} from "react-router-dom";
import Amthuc from "../amthuc";
import Diemden from "../diemden";
import Home from "../home";
import ListRoom from "../loai-phong";
import Login from "../login";
import Register from "../register";
import Spa from "../spa";
import GiaiTri from "../giaitri";
import HoiNghi from "../hoinghi";
import UseWall from "../UserWall";
import Quanly from "../quanly";
import QuanlyHopDongDanhSach from "../quanly/QuanlyHopDongDanhSach";

const RouterDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/home"} index element={<Home/>}/>
                <Route path={"/amthuc"} element={<Amthuc/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/room"} element={<ListRoom/>}/>
                <Route path={"/spa"} element={<Spa/>}/>
                <Route path={"/diemden"} element={<Diemden/>}/>
                <Route path={"/giaitri"} element={<GiaiTri/>}/>
                <Route path={"/userWall"} element={<UseWall/>}/>
                <Route path={"/hoinghi"} element={<HoiNghi/>}/>
                <Route path={"/quanly"} element={<Quanly/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom