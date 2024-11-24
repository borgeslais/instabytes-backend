import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}

// import { MongoClient } from 'mongodb';


// export default async function conectarAoBanco(stringConexao) {
//     let mongoClient;

//     stringConexao='mongodb+srv://borgeslais:W9sCDpzIZ1tGTnTJ@cluster0.ly7ri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//     try {
//         mongoClient = new MongoClient(stringConexao);
//         console.log('Conectando ao cluster do banco de dados...');
//         await mongoClient.connect();
//         console.log('Conectado ao MongoDB Atlas com sucesso!');

//         return mongoClient;
//     } catch (erro) {
//         console.error('Falha na conexão com o banco!', erro);
//         process.exit();
//     };
// };