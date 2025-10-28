import { PrismaClient } from '@prisma/client'
const prisma =new PrismaClient()
// above code will alllow us to access our PrismaClient

//Create Client..
// async function main(){
    // await prisma.user.deleteMany() // to clear previous data
//     const users = await prisma.user.createMany({
//         data:[
//         {
//             name:"Dacchu",
//             email:"dacchu@test.com",
//             age:21,
//         },{
//             name:"Deepi",
//             email:"deepi@test.com",
//             age:16,
//         }
//     ]
        // include:{ //to include the userprefernce
        //     userPreference:true,
        // },

        // for selecting only some specific properties v can use select
        // select:{
        //     name: true,
        //     userPreference:{ select:{id:true}}
        // },

//     })
//     console.log(users)
// }

//Find Unique
// async function main(){
    // const user = await prisma.user.findUnique({
    //     where:{
    //         email: "dacchu@test.com",
    //         age_name:{
    //             age:21,
    //             name:"Dacchu",
    //         },
    //     },
    // })


//Find First
// async function main(){
//     const user = await prisma.user.findFirst({
//         where:{
//             name: "Dacchu",
//         },
//     })

//     console.log(user)
// }

//Find Many
async function main(){
    const user = await prisma.user.findMany({
        where:{
            name: "Dacchu",
        },
        // distinct: ["age"], // to get distinct ages
        take: 1, // to limit the number of results
        skip: 0, // to skip some results
        orderBy:{
            age: 'desc', // to order the results
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