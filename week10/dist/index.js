"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
function createtable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        var q = `CREATE TABLE users3(id SERIAL PRIMARY KEY,userN VARCHAR(50) UNIQUE NOT NULL,pass VARCHAR(240) NOT NULL);`;
        const a = yield client.query(q);
        console.log(a);
    });
}
function insertDataUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            var q = `
        INSERT INTO users(username,email,password)
        VALUES('dev','deveshshukl1603@gmail.com','DEVESHSHUKLA');
        `;
            const a = yield client.query(q);
            console.log(a);
        }
        catch (e) {
            console.log("Getting Error During Insertion = " + e);
        }
    });
}
function showDataUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        var qu = "SELECT * FROM users";
        const a = yield client.query(qu);
        console.log(a);
    });
}
showDataUsers();
console.log("At End");
// createtable();
// write a function to create a users table in your database.
// import { Client } from 'pg'
// const client = new Client({
//   connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }
// createUsersTable();
