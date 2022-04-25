
const express = require("express")
const app = express()
const port = process.env.PORT || 80;

app.set('json spaces', 2)

app.get("/", (req,res)=> {
    const date = new Date()
    const time = Math.round((date.getTime()/1000))
    const day = date.getDay()
    const value = {message: 'My name is William', timestamp: time, day: day}
    res.status(200).json(value)
});

app.listen(port, () => { console.log(`listening on port ${port}`)
})
