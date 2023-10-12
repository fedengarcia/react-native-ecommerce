import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sessions.db');

export const initDB = () => {
    const promise =  new Promise(({resolve, reject}) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            ()=> resolve(),
            (_, error) => {
                reject(error);
            })
        })
    })

    return promise;
}