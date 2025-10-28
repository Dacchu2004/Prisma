import { PrismaClient } from '@prisma/client'
const prisma =new PrismaClient()
// above code will alllow us to access our PrismaClient

async function main(){
    await prisma.user.deleteMany() // to clear previous data
    const user = await prisma.user.create({
        data:{
            name:"Dacchu",
            email:"dacchu@test.com",
            age:21,
            userPreference:{
                create:{// craete function
                    emailUpdates:true,
                }
            }
        },
        // include:{ //to include the userprefernce
        //     userPreference:true,
        // },

        // for selecting only some specific properties v can use select
        select:{
            name: true,
            userPreference:{ select:{id:true}}
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