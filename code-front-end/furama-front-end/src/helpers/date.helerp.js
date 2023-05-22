export default function compareDate(datei1, datei2) {
    const date1 = new Date(datei1);
    const date2 = new Date(datei2);

    if (date1 < date2) {
        return true;
    } else if (date1 > date2) {
        return false;
    } else {
        return true;
    }
}

export function getCurrentDate() {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}