export default function formattedNumber(number) {
    return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
