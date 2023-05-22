import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

function Spa() {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop: '150px'}}>
                <div>
                    <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>V-SENSES WELLNESS &
                        SPA</h1>
                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                        <div></div>
                        <div style={{width: '770px', display: 'flex', textAlign: 'center'}}>
                            Tọa lạc tại khu vườn nhiệt đới tuyệt đẹp hướng biển của “Ốc đảo xanh”
                            Furama Resort Đà Nẵng, được văn hóa Chăm Pa thổi hồn trong từng nét kiến trúc. Hãy đến với
                            V-senses Wellness & Spa để cùng đắm chìm vào khung cảnh bình yên, lắng nghe tiếng sóng vỗ về
                            tâm hồn, cảm nhận sự thanh mát của thiên nhiên hòa vào từng nhịp thở, và hành trình
                            tìm về sự tĩnh tại và khôi phục năng lượng sống chỉ mới bắt đầu…
                        </div>
                        <div></div>
                    </div>
                </div>
                <div style={{marginTop: '20px'}}>

                        <img style={{height: "800px", width: "100%"}} className="d-block w-100"
                             src="	https://furamavietnam.com/wp-content/uploads/2023/01/Vsense-Spa-Da-Nang-Furama.jpg"
                             alt="First slide"/>
                        <img style={{height: "800px", width: "100%"}} className="d-block w-100"
                             src="	https://furamavietnam.com/wp-content/uploads/2023/03/V-senses-Wellness-Spa-10.jpg"
                             alt="First slide"/>
                        <img style={{height: "800px", width: "100%"}} className="d-block w-100"
                             src="	https://furamavietnam.com/wp-content/uploads/2023/03/V-senses-Wellness-Spa-4.jpg"
                             alt="First slide"/>

                </div>
               <div style={{display: 'flex'}}>
                   <div style={{width: '770px', padding:"30px"}}>
                       <div style={{marginBottom: '20px'}}>
                           <div>COUPLE'S RETREAT - LIỆU TRÌNH MASSAGE CHO CẶP ĐÔI</div>
                           <div style={{padding: '20px'}}>
                               <div>
                                   Với liệu pháp mát-xa tuyệt vời cùng những tinh dầu thảo mộc đặc biệt,
                                   đưa bạn chìm vào giấc ngủ sâu một cách tự nhiên và trọn vẹn, giúp bạn tái
                                   tạo nguồn năng lượng sống, mang lại sự thư giãn toàn diện cho cả cơ thể lẫn tâm hồn.
                                   V-Senses Wellness & Spa tự hào là đơn vị tiên phong trong việc mang đến
                                   liệu pháp trị liệu đặc biệt này tại Việt Nam. Gói trị liệu bao gồm:
                               </div>
                               <div>Phòng Suite Spa riêng biệt</div>
                               <div>Tư vấn trước khi trị liệu</div>
                               <div>Liệu pháp thiền và thở</div>
                               <div>Tinh dầu thảo mộc truyền thống</div>
                               <div>Các liệu pháp mát-xa cùng tinh dầu.</div>
                           </div>
                       </div>
                       <div style={{marginBottom: '20px'}}>
                           <div>
                               TRỊ LIỆU BẰNG ĐÁ NÚI LỬA BAZAN NÓNG
                           </div>
                           <div style={{padding: '20px'}}>
                               Tại Furama Resort Đà Nẵng, hãy tận hưởng 45 phút trị liệu tuyệt vời bởi những viên
                               đá núi lửa Bazan được làm nóng tới nhiệt độ nhất định kết hợp với các động
                               tác massage nhuần nhuyễn lên từng huyệt đạo. Hơi nóng của đá tỏa ra thấm
                               sâu vào từng cơ bắp đang nhức mỏi, mang lại cảm giác thư giãn tuyệt vời,
                               làm dịu tinh thần và cải thiện giấc ngủ của bạn.
                           </div>
                       </div>
                       <div>
                           <div>
                               GIỜ VÀNG SPA | NGẬP TRÀN ƯU ĐÃI
                           </div>
                           <div style={{padding: '20px'}}>
                               Còn gì tuyệt vời hơn cảm giác được thả lỏng tâm trí, để cơ thể mình được chăm
                               chút bởi những liệu pháp Spa đầy sảng khoái.
                               Bạn muốn tái tạo năng lượng với liệu pháp trị liệu toàn thân bằng tinh dầu,
                               nâng niu làn da với liệu pháp tẩy tế bào c.h.ế.t và ủ dưỡng, hay lưu mãi
                               tuổi thanh xuân với liệu pháp trị liệu mặt trẻ hóa? Xin mời bạn đến và
                               trải nghiệm tại Furama Resort Đà Nẵng với khung giờ vàng 09:00 – 13:00
                           </div>
                       </div>
                   </div>
                   <img style={{marginTop: '90px', marginLeft: '270px'}} width={570} height={340}
                        src="https://an-spa.vn/uploads/images/an%20spa%20premium%20quan%2010%20massage%20tri%20lieu%20quan%2010%20an%20spa%2021.jpg"/>
               </div>
            </div>
            <Footer/>
        </div>
    );
}


export default Spa;