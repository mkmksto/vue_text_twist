/**
 *
 * @param {Object} gameSettings - settings from settings modal
 * @returns
 */
export async function fetchBackendWord(gameSettings) {
    // const res = await fetch('http://127.0.0.1:5000/api/random_word', {
    const res = await fetch('https://vue-text-twist.vercel.app/api/random_word', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(gameSettings),
    })
    const py_resp = await res.json()
    return py_resp
}
