import React from "react";

function Footer() {
    return (
        <div style={{display: "flex", justifyContent: 'space-between', backgroundColor: '#ccc', padding: '20px 60px'}}>
            <div style={{marginLeft: '30px'}}>
                <h5>THÔNG TIN LIÊN HỆ</h5>
                <span
                    className="fa fa-map-marker"></span><span>    105 Võ Nguyên Giáp, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng</span><br/>
                <span className="fa fa-phone"></span><span>   Hotline: (+84)364999078</span><br/>
                <span className="fa fa-envelope"></span><span>   Email: ladung1301@gmail.com.vn</span><br/>
                <span className="fa fa-internet-explorer"></span><span>   Website: Furama.com</span><br/>
            </div>
            {/*<div><img width="200px" height="150px" src="/img/googleMap.jpg" alt="..."/></div>*/}
            <div style={{marginRight: '30px'}}>
                <h5>CHIA SẺ MẠNG XÃ HỘI</h5>
                <span className="fa fa-facebook"></span><span>   Facebook</span><br/>
                <span className="fa fa-youtube"></span><span>   Youtube</span><br/>
                <span className="fa fa-google-plus-square"></span><span>   Google+</span><br/>
                <span className="fa fa-twitter"></span><span>   Twitter</span><br/>
                <span className="fa fa-instagram"></span><span>   Instagram</span><br/>
            </div>
        </div>
    );
}

export default Footer;