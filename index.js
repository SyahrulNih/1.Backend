const express = require('express')
const app = express();
const port = 5000

app.get('/', (req,res) => {
    res.send(`Hello World`)
})

app.put('/', (req,res) => {
    res.send(`Put Data`)
})

app.post('/', (req,res) => {
    res.send(`Post Data`)
})

app.delete('/', (req,res) => {
    res.send(`Hapus Data`)
})

app.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`Get-Home id - ${id}`)
})

app.listen(port,() => {
    console.log(`server berjalan pada port ${port}`);
})
