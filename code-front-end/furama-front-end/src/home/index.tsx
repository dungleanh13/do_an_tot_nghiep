import Navbar from "../navbar";
import Footer from "../footer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

function Home() {
    const userAuth = useSelector((state: any) => state.auth)
    return (
        <div>
            <Navbar/>
            <div style={{
                marginTop: '120px', width: '100%', height: '505px',
                backgroundSize: 'cover',
                backgroundPosition: "bottom",
                backgroundImage: 'url(https://booking.pystravel.vn/uploads/posts/avatar/1616120537.jpg)'
            }}>
                <div style={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                    <div></div>
                    <h1 style={{marginTop: '170px',color: "white"}}>KHU NGHỈ DƯỠNG FURAMA ĐÀ NẴNG</h1>
                    <div></div>
                </div>
            </div>


            <div>
                <div style={{display: "flex", height: '390px', justifyContent: 'space-between', padding: '20px'}}>
                    <div style={{padding: '10px'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                                width="400" height="250"/>
                        </div>
                        <p>Cung hội nghị Quốc tế International Convention Palace (ICP) với phòng Hội nghị lớn sức
                            chứa lên tới
                            1000 khách cùng hơn 10 phòng chức năng phụ trợ quy mô từ 50 đến 300 khách được trang bị
                            cơ sở vật
                            chất,
                            thiết bị hiện đại, là địa điểm lý tưởng dành cho các đoàn MICE tổ chức hội nghị, hội
                            thảo và sự
                            kiện.</p>
                    </div>
                    <div style={{padding: '10px'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
                                width="400" height="250"/>
                        </div>
                        <p>Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền thống Việt Nam kết hợp
                            với phong
                            cách Pháp, 2 tòa nhà 4 tầng có hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những
                            khu vườn nhiệt
                            đới xanh tươi mát. Ngoài ra, khu nghỉ dưỡng Furama còn cung cấp các liệu pháp spa,
                            phòng xông hơi
                            ướt,
                            phòng xông hơi khô, dịch vụ mát-xa cạnh hồ bơi, các dịch vụ thể thao dưới nước và
                            các lớp
                            tập yoga và Thái Cực Quyền trên bãi biển.</p>
                    </div>
                    <div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src="https://furamavietnam.com/wp-content/uploads/2018/07/CULIRARY.jpg"
                                 width="400" height="250"
                                 alt="...."/>
                        </div>
                        <p>Trải nghiệm ẩm thực tại Khu nghỉ có sự pha trộn độc đáo các món ăn truyền thống Việt Nam
                            với nhiều
                            những hương vị ẩm thực châu Á
                            , Ý và châu Âu cùng các món bò nhập khẩu thượng hạng tại đa dạng các nhà hàng,
                            quầy bar đẳng cấp được bao quanh bởi một khu vườn nhiệt đới hay hướng mình ra biển, đón
                            những hơi
                            thở mát mẻ thổi về từ biển đông. ."</p>
                    </div>
                </div>
                <div style={{marginTop: '70px'}}>

                    <img style={{height: "800px", width: "100%"}} className="d-block w-100"
                         src="https://du-lich.chudu24.com/f/m/1603/18/furama-resort-da-nang-1.jpg?w=800&h=500"
                         alt="First slide"/>
                    <img style={{marginTop: "20px" ,height: "800px", width: "100%"}} className="d-block w-100"
                         src="https://furamavietnam.com/wp-content/uploads/2018/08/ball-room.jpg"
                         alt="First slide"/>
                    <img style={{marginTop: "20px", height: "800px", width: "100%"}} className="d-block w-100"
                         src="https://furamavietnam.com/wp-content/uploads/2023/03/Furama_Seafood-Buffet-4.jpg"
                         alt="First slide"/>

                </div>
                <div style={{padding: '10px', marginTop: '50px'}}>
                    <div>
                        <h3 style={{color: "#17a2b8"}}>
                            KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ DƯỠNG ẨM THỰC
                            TẠI
                            VIỆT
                            NAM.
                        </h3>
                    </div>
                    <div>
                        <iframe width="100%" height="710px" src="https://www.youtube.com/embed/IjlT_4mvd-c"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
