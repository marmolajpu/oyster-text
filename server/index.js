const express = require("express");
const PORT = process.env.APP_SERVER_PORT || 5000

const app =  express();
app.use(express.json())

const users = [{name:"marmol", password:"contrasena"}]

app.get('/users', (req, res) => {
    res.json(users)
})


app.post('/users/login', (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    const password = users.find(user => user.password === req.body.password)
    if (user == null ){
        return res.status(400).send("Usuario no encontrado")
    }

    try {
        if(password){
            res.send("Usuario encontrado")
        }else{
            res.send('Contraseña Incorrecta')
        }
    } catch (error) {
        res.status(500).send("Error en servidor")
    }
  
})

app.listen(PORT, () => console.log(`Server started. Port: ${PORT}`));