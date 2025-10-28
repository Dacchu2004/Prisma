import { PrismaClient } from '@prisma/client'
const prisma =new PrismaClient()
// above code will alllow us to access our PrismaClient

async function main(){
    const user = await prisma.user.create({
        data:{
            name:"Dacchu",
            email:"dacchu@test.com",
            age:21,

        },
    })
    console.log(user)
}

main()
    .catch(e=>{
        console.error(e.message)
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })