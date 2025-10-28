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
// async function main(){
//     const user = await prisma.user.findMany({
//         where:{
//             name: "Dacchu",
//         },
        // distinct: ["age"], // to get distinct ages
//         take: 1, // to limit the number of results
//         skip: 0, // to skip some results
//         orderBy:{
//             age: 'desc', // to order the results
//         },
//     })

//     console.log(user)
// }


//Client Update
// async function main(){
//     const user = await prisma.user.update({
//         where:{
//             email: "dacchu@test.com",
//         },
//         data:{
//             email: "dacchu@test1.com", //updating email
//         },
//     })

//     console.log(user)
// }

//UpdateMany
// async function main(){
//     const user = await prisma.user.updateMany({
//         where:{
//             name: "Dacchu",
//         },
//         data:{
//             name: "Dharsan", //updating name for all users with name Dacchu
//         },
//     })

//     console.log(user)
// }

// //Update age
// async function main(){

//     const user = await prisma.user.update({
//         where:{
//             email: "dacchu@teat1.com", //when v do an single update then it must be unique field and name is not unique
//         },
//         data:{
//             age: {increment: 5}, // incrementing age by 5
//             // age: {decrement: 5}, // decrementing age by 5
//             // age: {multiply: 2}, // multiplying age by 2
//             // age: {divide: 2}, // dividing age by 2
//         },
//     })

//     console.log(user)
// }


//Client Delete
// async function main(){
//     const user = await prisma.user.delete({
//         where:{
//             //delete only delete one user and it must be a unique field
//             email: "dacchu@teat1.com",
//         }
//     })
//     console.log(user)
// }


//Delete Many
// async function main(){
//     const user = await prisma.user.deleteMany({
//         where:{
//             age:{gt:20}
//         }
//     })
//     console.log(user)
// }


//to delete everything v should not mention anything in deleteMany()
async function main(){
    const user=await prisma.user.deleteMany()
    console.log(user)
}

main()
    .catch(e=>{
        console.error(e.message)
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })