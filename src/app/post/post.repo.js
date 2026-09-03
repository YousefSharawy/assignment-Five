const prisma = require('../../common/db/prisma')

async function createNewPost(title, content, user) {
    return await prisma.post.create({
        data: {
            title: title,
            content: content,
            userId: user.id,
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
        throw new Error("Post can't be deleted");
    }
}

async function getAllPosts() {
    return await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    comments: {
                        select: {
                            id: true,
                            content: true,
                        }
                    }
                }
            }
        }
    });
}
module.exports = { createNewPost, deletePostById, getAllPosts }