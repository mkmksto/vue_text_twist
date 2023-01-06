/**
 *
 * @param {Object} gameSettings - settings from settings modal
 * @returns
 */
export async function fetchBackendWord(gameSettings) {
    const fetchUrl = window.location.href.includes("vercel")
        ? "/api/random_word"
        : "http://127.0.0.1:5000/api/random_word"
    console.log(fetchUrl)
    const res = await fetch(fetchUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
        },
        body: JSON.stringify(gameSettings),
    })
    if (!res.ok) throw new Error("backend error, either 4xx or 5xx")
    const py_resp = await res.json()
    return py_resp
}
