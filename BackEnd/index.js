const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const users = [
    {
        name: 'Rodollfo',
        age: 29
    },
]

// aqui estou  recuperando os usuarios, requerendo atráves do GET
app.get('/usuarios', function(request, response){  
    response.json(users);
})


// aqui estou criando novos usuarios atráves do POST
app.post('/usuarios', function(request, response){
    console.log(request.body)

    const newUser = request.body

    users.push(newUser)

    response.status(201).json(newUser)
})

//aqui tenho a porta do meu servidor rodando
app.listen(30001, () => console.log("servidor rodando"));



// para entrar no servidor: npm run dev