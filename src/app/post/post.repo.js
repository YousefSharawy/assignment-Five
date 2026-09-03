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
module.exports = { createNewPost }