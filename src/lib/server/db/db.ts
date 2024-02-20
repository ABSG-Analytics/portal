import { MongoClient } from 'mongodb';

export async function connectToDb() {
    const client = new MongoClient('mongodb+srv://dbadmin:Z3purm3n3696!@customerportalbackend23456.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000');

    try {
        await client.connect();
        return client.db('portal');
    } catch (e) {
        console.error(e);
        return null;
    }
}