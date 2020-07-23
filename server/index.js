const express = require("express");
const cors = require("cors")
const PORT = process.env.APP_SERVER_PORT || 5000

const app =  express();
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }

const users = [{email:"user@test.com", password:"contrasena"}]

app.get('/users', (req, res) => {
    res.json(users)
})

console.log('Test')

app.post('/users/login', cors(corsOptions),(req, res) => {
    const user = users.find(user => user.email === req.body.email)
    const password = users.find(user => user.password === req.body.password)
    if (user == null ){
        return res.status(400).send("Usuario no encontrado")
    }
    try {
        if(password){
            res.status(200).send("Usuario encontrado")
        }else{
            res.send('Contraseña Incorrecta')
        }
    } catch (error) {
        res.status(500).send("Error en servidor")
    }
  
})

app.listen(PORT, () => console.log(`Server started. Port: ${PORT}`));