export const uid = () => {
    return Date.now().toString() + Math.random().toString()
}