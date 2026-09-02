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
        omit : {password}
    });
}

module.exports = {
    checkUserExistanceById, 
    checkUserExistanceByEmail,
    createUser
}