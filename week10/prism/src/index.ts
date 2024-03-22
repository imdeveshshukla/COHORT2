import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function insertUser(username:string,name:string,password:string) {
    await prisma.user.create({
        data:{
            email:username,
            name,
            password
        }
    })
    
}

interface userType{
    name?:string,
    password?:string
}

async function updateUser(username:string,{ name,password }:userType)
{
    prisma.user.update({
        where:{email:username},
        data:{name , password}
    })
}
