import app from "./app.js";

const startApp = () => {
    const PORT = process.env.PORT

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}
startApp()

export default startApp
// lo exporte para que funcione en los test
// psdt: no funcionaron los test, sorry :(