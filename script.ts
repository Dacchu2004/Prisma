import { PrismaClient } from '@prisma/client'
const prisma =new PrismaClient()
// above code will alllow us to access our PrismaClient

async function main(){
    const users= await prisma.user.deleteMany()
    console.log(users)
}

main()
    .catch(e=>{
        console.error(e.message)
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })