//é preciso usar recursos já prontos quye impeçam a reinvenção da roda.
import express from 'express';

const host = '0.0.0.0'; //todas as interfaces de rede disponíveis.
//em um pc há diversos programas sendo executados.
//cada programa é identificado por um número que é a porta.
const porta = 4000;
const app = express ();

app.use(express.static('./publico'));



//escutar por requisições de usuários
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http:// ${host}:${porta}`)

});