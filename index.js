
const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

app.set('json spaces', 2)

app.get("/", (req,res)=> {
    const date = new Date()
    const time = date.toLocaleTimeString("en-us",{timeZone: 'PST'})
    const value = {message: 'My name is William', timestamp: time}
    res.status(200).json(value)
});

app.listen(port, () => { console.log(`listening on port ${port}`)
})
