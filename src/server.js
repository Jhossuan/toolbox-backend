import app from "./app.js";

const startApp = () => {
    const PORT = process.env.PORT ?? 5001

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}

startApp()