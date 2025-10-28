import { PrismaClient } from '@prisma/client'
const prisma =new PrismaClient()
// above code will alllow us to access our PrismaClient

async function main(){
    await prisma.user.deleteMany() // to clear previous data
    const users = await prisma.user.createMany({
        data:[
        {
            name:"Dacchu",
            email:"dacchu@test.com",
            age:21,
        },{
            name:"Deepi",
            email:"deepi@test.com",
            age:16,
        }
    ]
        // include:{ //to include the userprefernce
        //     userPreference:true,
        // },

        // for selecting only some specific properties v can use select
        // select:{
        //     name: true,
        //     userPreference:{ select:{id:true}}
        // },

    })
    console.log(users)
}

main()
    .catch(e=>{
        console.error(e.message)
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })