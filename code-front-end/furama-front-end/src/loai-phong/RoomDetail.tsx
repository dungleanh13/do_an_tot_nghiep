import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { format } from "react-string-format";
import ClientNetwork from "../axios";
import { Room } from "../interface";
import styles from "./loaiphong.module.scss";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import formattedNumber from "../helpers/price.helper";
import compareDate, { getCurrentDate } from "../helpers/date.helerp";

interface Props {
    dismiss: () => void
    room: Room
    addListRoom: (startDate: string, endDate: string) => void
}


function RoomDetail(props: Props) {
    const { dismiss, room, addListRoom } = props
    const [startDate, setStartDate ] = useState(() => {
        return getCurrentDate()   ;
    })
    const [endDate, setEndDate] = useState("")
    const API: ClientNetwork = new ClientNetwork()
    const [statusRoom, setStatusRoom] = useState<string>("")
    const [isShowAddRoom, setIsShowAddRoom] = useState(false)
    const userAuth = useSelector((state: any) => state.auth)
    const [open, setOpen] = useState<boolean>(false);


    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="error"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleOnChangeStartDate = async (event: any) => {
        setStartDate(event.target.value)
        if (userAuth && userAuth.user_id) {
            const res = await
                API.get(format("/services/getStatusRoom/{0}?start_date={1}&user_id={2}",
                    room.infoRoomId.toString(), event.target.value, userAuth.user_id.toString()), {})
            if (res.data !== "Trống")
                setStatusRoom("Phòng đã được đặt")
            else setStatusRoom("Trống");
        } else {

        }
    }

    const handleOnChangeEndDate = (event: any) => {
        const isValidate = compareDate(startDate, event.target.value);
        if (isValidate) {
            setEndDate(event.target.value);
            if (statusRoom === "Trống" && userAuth && userAuth.user_id) {
                setIsShowAddRoom(true);
            }
            if (!userAuth) setOpen(true);

        } else {
            alert('Yêu cầu chọn ngày hợp lệ!');
            setEndDate("");
        }
    }

    return (
        <>
            <Dialog
                PaperProps={{
                    className: `${styles.dialog}`
                }}
                open={true}>
                <div style={{ padding: '30px' }}>
                    <div onClick={dismiss}
                        style={{ display: 'flex', justifyContent: 'end', marginBottom: '10px', cursor: 'pointer' }}>
                        <button>Đóng</button>
                    </div>
                    <div style={{ textAlign: 'center' }}><h2>{room.roomName}</h2></div>
                    {/*<div style={{textAlign: 'center'}}><h1>GDGGDGDGGEDF</h1></div>*/}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <img style={{ width: '600px', height: '300px' }} src={room.img} />
                        <div></div>
                    </div>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                        <div>{"Loại phòng: " + room.roomCode}</div>
                        <div
                            style={{ display: 'flex', justifyContent: 'center' }}>{"Đơn giá: " + formattedNumber(room.roomCost)}</div>
                        <div>{"Diện tích: " + room.roomArea + " m2"}</div>
                        <div>Trạng thái : {statusRoom}</div>
                    </div>
                    <div>{"Mô tả: "}</div>
                    <div>{room.descriptionOtherConvenience}</div>

                    <div style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                        {isShowAddRoom &&
                            <div style={{ display: 'flex', alignItems: 'end' }}>
                                <button style={{ height: '40px' }} onClick={() => addListRoom(startDate, endDate)}>
                                    Thêm vào giỏ hàng</button>
                            </div>
                        }
                        <div
                            style={{ marginTop: '40px', display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                            <div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ marginRight: '10px' }}>
                                    <div style={{ marginBottom: '5px' }}>Ngày bắt đầu</div>
                                    <input style={{ height: '40px' }} onChange={(event) => handleOnChangeStartDate(event)}
                                        type="date" />
                                </div>
                                <div style={{ marginRight: '10px' }}>
                                    <div style={{ marginBottom: '5px' }}>Ngày kết thúc</div>
                                    <input style={{ height: '40px' }} onChange={(event) => handleOnChangeEndDate(event)}
                                        type="date" value={endDate}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Dialog>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Yêu cầu đăng nhập!"
                action={action}
            >
                <Alert severity="error">Yêu cầu đăng nhập!</Alert>
            </Snackbar>
        </>
    );
}

export default RoomDetail;
