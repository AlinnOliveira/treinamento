//criar gerenciamento de fila - conexão assincrona
const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (connError, connection) => {
    //se erro - lançar o erro
    if(connError){
        throw connError;
    }
    //senão, cria canal de conexão com o objeto
    connection.createChannel((channelError, channel) => {
        //se erro no canal, lançar o erro
        if(channelError){
            throw channelError;
        }
        //verificar se a fila está no rabbitmq
        //a mensagem é passada pelo buffer
        //enviar a mensagem
        const QUEUE = 'codingtest'
        channel.assertQueue(QUEUE);
        channel.sendToQueue(QUEUE, Buffer.from('Hello from its coding time'));
        console.log(`Message send ${QUEUE}`);
    })
})