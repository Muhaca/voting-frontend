export const getBase64 = (file) => {
    let res = null
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        console.log('called: ', reader.result)
        res = reader.result
    }
    console.log(formatBytes(res, 2));
    return res
}

export const formatBytes = (bytes, decimals) => {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
