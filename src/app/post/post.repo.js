const prisma = require('../../common/db/prisma')

async function createNewPost(title, content, user) {
    return await prisma.post.create({
        data: {
            title: title,
            content: content,
            user: user.id,
        }
    }
    );
}


async function deletePostById(id) {
    try {
        return await prisma.post.delete({
            where: {
                id: Number(id)
            }
        });
    }
    catch (error) {
        throw new Error ("Post can't be deleted");
    }
}
module.exports = { createNewPost, deletePostById }