const prisma = require('../../common/db/prisma')

async function checkUserExistanceById(id) {
    return await prisma.user.findUnique({ where: { id: id } });
}
async function checkUserExistanceByEmail(email) {
    return await prisma.user.findUnique({ where: { email: email } });
}

async function createUser(name, email, password) {
    return await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        },
        omit: { password: true }
    });
}
async function createOrUpdate(id, updates) {
    return await prisma.user.upsert({
        where: {
            id: Number(id),
        },
        update: {
            name: updates.name,
            email: updates.email
        },
        create: {
            name: updates.name,
            email: updates.email,
            password: updates.password
        },
        omit: { password: true }
    });
}
async function getUserByEmail(email) {
    return await prisma.user.findUnique({
        where: {
            email: email
        },
        omit: { password: true }
    })
}
async function getUserById(id) {
    return await prisma.user.findUnique({
        where: {
            id: Number(id)
        },
        omit: {
            password: true,
            role: true
        }
    });
}
module.exports = {
    checkUserExistanceById,
    checkUserExistanceByEmail,
    createUser,
    createOrUpdate,
    getUserByEmail,
    getUserById
}