import Navbar from "../navbar";
import Footer from "../footer";
import React from "react";

function HoiNghi() {
    return (
        <div>
            <Navbar/>
            <div style={{
                marginTop: '100px',
                backgroundSize: 'cover',
                height: '500px',
                backgroundPosition: "bottom",
                backgroundImage: 'url(https://furamavietnam.com/wp-content/uploads/2018/08/ball-room.jpg)'
            }}>
                <div style={{width: "100%", height: "132px"}}></div>
                <div style={{marginTop: '80px',display: "flex", justifyContent: "center"}}>
                    <h1 style={{color: "black", fontSize: "40px"}}>SỰ KIỆN</h1></div>
                <div style={{width: "100%", height: "132px"}}></div>
            </div>
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <div style={{ display: 'flex', textAlign: 'center', width: '900px', color: '#CBBE73'}}>
                    <h1>ĐỊA ĐIỂM LÝ TƯỞNG CHO CÁC CHƯƠNG TRÌNH HỘI NGHỊ, HỘI THẢO VÀ SỰ KIỆN</h1>
                </div>
                <div></div>
            </div>
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <div style={{display: 'flex', textAlign: 'center', width: '570px'}}>
                    Cung hội nghị Quốc tế International Convention Palace (ICP) với phòng Hội nghị lớn
                    sức chứa lên tới 1000 khách cùng hơn 10 phòng chức năng phụ trợ quy mô từ
                    50 đến 300 khách được trang bị cơ sở vật chất, thiết bị hiện đại, là địa điểm
                    lý tưởng dành cho các đoàn MICE tổ chức hội nghị, hội thảo và sự kiện.
                </div>
                <div></div>
            </div>
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <div style={{display: 'flex', textAlign: 'center', width: '570px'}}>
                    Không gian ngoài trời trên bãi biển hay bên hồ Lagoon giữa khu rừng nhiệt đới rậm rạp,
                    ngập khí trời, nước và ánh sáng có thể bay cùng mọi ý tưởng sáng tạo những bữa
                    tiệc theo chủ đề độc đáo hay hoạt động team-building truyền cảm hứng hay gắn kết
                    cộng đồng. Sân bay trực thăng nằm ngay trên bãi biển, cùng hai sân Golf 18 lỗ gần kề,
                    với các dịch vụ ẩm thực, spa, giải trí kết hợp nghỉ dưỡng đẳng cấp cung cấp
                    thêm nhiều sự lựa chọn cho các nhà tổ chức, khách hàng doanh nghiệp khẳng định vị thế,
                    để lại ấn tượng tốt đẹp trong lòng đối tác và khách hàng
                </div>
                <div></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div></div>
                <div style={{width: '1200px'}}>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-1.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-2.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-3.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-4.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-5.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-6.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-7.jpg"/>
                        <img style={{marginRight: '10px', marginTop: '20px'}} width={570} height={380}
                             src="https://furamavietnam.com/wp-content/uploads/2018/09/HONOR-8.jpg"/>

                    </div>
                </div>
                <div></div>
            </div>
            <Footer/>
        </div>
    );
}

export default HoiNghi;
