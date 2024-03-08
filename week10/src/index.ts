import { Client } from 'pg'
 
const client = new Client({
    connectionString : "postgresql://postgres:mysecretpassword@localhost/postgres"
})
async function createtable(){
    await client.connect();
    var q = `CREATE TABLE users3(id SERIAL PRIMARY KEY,userN VARCHAR(50) UNIQUE NOT NULL,pass VARCHAR(240) NOT NULL);`
    const a =  await client.query(q);
    console.log(a);
}


async function insertDataUsers(){
    try{
        await client.connect();
        var q = `
        INSERT INTO users(username,email,password)
        VALUES('dev','deveshshukl1603@gmail.com','DEVESHSHUKLA');
        `
        const a  = await client.query(q);
        console.log(a);
    }
    catch(e){
        console.log("Getting Error During Insertion = "+e);
    }
}
async function showDataUsers(){
    await client.connect();
    var qu = "SELECT * FROM users";
    const a = await client.query(qu);
    console.log(a);
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