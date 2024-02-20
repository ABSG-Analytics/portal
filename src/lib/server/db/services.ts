import { connectToDb } from '$lib/server/db/db';
import { Db, ObjectId, UUID } from 'mongodb';

export const getUserData = async (username: string) => {
    const db: Db | null = await connectToDb();
    const userCollection = db?.collection('people');
    const userData = await userCollection?.find({ "username": username }).toArray();

    convertObjectIdsToStrings(userData);

    return { userData };
}

export const createProject = async (company: string, projectType: string) => {
    const db: Db | null = await connectToDb();
    const peopleCollection = db?.collection('people');
    const uniqueProjectType = projectType + UUID.generate();

    try {
        await peopleCollection?.insertOne({ type: "Project", company: company, project: uniqueProjectType });

        return { project: uniqueProjectType };
    } catch (e) {
        return { error: e };
    }
}

function convertObjectIdsToStrings(obj: any) {
    for (let key in obj) {
        if (obj[key] instanceof ObjectId) {
            obj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object') {
            convertObjectIdsToStrings(obj[key]);
        }
    }
}