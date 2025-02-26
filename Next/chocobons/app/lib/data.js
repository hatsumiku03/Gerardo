import { sql } from "@vercel/postgres";


// TODO: 0 likes
export async function getPosts(){
    return (await sql
`

SELECT 
    sa_posts.post_id, 
    content, 
    url, 
    sa_posts.user_id, 
    username, 
    picture,
    count(sa_likes.user_id) as num_likes,
    (SELECT count(*) FROM sa_comments WHERE sa_comments.post_id = sa_posts.post_id) as num_comments
FROM 
    sa_posts 
    JOIN sa_users USING(user_id) 
    LEFT JOIN sa_likes USING(post_id)
GROUP BY 
    sa_posts.post_id, 
    content, 
    url, 
    sa_posts.user_id, 
    username,
    picture

`).rows;
}

// TODO: 0 likes
export async function getPost(post_id){
    return (await sql`SELECT 
    sa_posts.post_id, 
    content, 
    url, 
    sa_posts.user_id, 
    username,
    picture,
    count(sa_likes.user_id) as num_likes,
    (SELECT count(*) FROM sa_comments WHERE sa_comments.post_id = sa_posts.post_id) as num_comments
FROM 
    sa_posts 
    JOIN sa_users USING(user_id) 
    LEFT JOIN sa_likes USING(post_id)
WHERE 
    post_id=${post_id}
GROUP BY 
    sa_posts.post_id, 
    content, 
    url, 
    sa_posts.user_id, 
    username,
    picture 
   `).rows;
}

export async function getLikes(user_id){
    return (await sql`SELECT post_id FROM sa_likes WHERE user_id = ${user_id}`).rows;
}

export async function getLike(user_id, post_id){
    return (await sql`SELECT post_id FROM sa_likes WHERE user_id = ${user_id} AND post_id=${post_id}`).rows;
}

export async function getCommentsByPostId(post_id) {
    return (await sql`
        SELECT 
            sa_comments.comment_id, 
            sa_comments.user_id, 
            sa_comments.post_id, 
            sa_comments.content, 
            sa_users.name,
            sa_users.picture,
            COUNT(sa_likes_comments.user_id) as num_likesc
        FROM 
            sa_comments 
            JOIN sa_users USING(user_id)
            LEFT JOIN sa_likes_comments ON sa_comments.comment_id = sa_likes_comments.comment_id
        WHERE 
            sa_comments.post_id = ${post_id}
        GROUP BY 
            sa_comments.comment_id, 
            sa_comments.user_id, 
            sa_comments.post_id, 
            sa_comments.content, 
            sa_users.name,
            sa_users.picture
    `).rows;
}

export async function getLikeComment(user_id, comment_id){
    return (await sql`SELECT comment_id FROM sa_likes_comments WHERE user_id = ${user_id} AND comment_id=${comment_id}`).rows;
}

export async function searchUsers(query) {
    const response = await fet/ch(`/search?query=${query}`);
    const users = await response.json();
    return users;
}

export async function getUserProfile() {
    const response = await fet/ch('/profile');
    const profile = await response.json();
    return profile;
}