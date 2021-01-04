export const getCookie = (key: string) => {
    return document.cookie.split(';').find(cookieText => {
        return cookieText.indexOf(key) !== -1
    })?.match(/=(\S+)($|\s)/i)?.[1]
}