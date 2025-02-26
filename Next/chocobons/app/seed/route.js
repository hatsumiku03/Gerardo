import { sql } from "@vercel/postgres"

export async function GET() {

    await sql`DROP TABLE IF EXISTS sa_likes, sa_likes_comments, sa_comments, sa_post, sa_users`;
    
    await sql`CREATE TABLE IF NOT EXISTS sa_users(
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
        username TEXT, 
        name TEXT, 
        picture TEXT, 
        email TEXT UNIQUE
    )`;
    
    await sql`CREATE TABLE IF NOT EXISTS sa_posts(
        post_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        content TEXT,
        url TEXT,
        user_id UUID REFERENCES sa_users(user_id)
    )`

    await sql`CREATE TABLE sa_likes( 
        user_id UUID REFERENCES sa_users(user_id),
        post_id UUID REFERENCES sa_posts(post_id),
        PRIMARY KEY(user_id, post_id)
    )`

    await sql`CREATE TABLE sa_comments( 
        comment_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        content TEXT,
        user_id UUID REFERENCES sa_users(user_id),
        post_id UUID REFERENCES sa_posts(post_id)
    )`

    await sql`CREATE TABLE sa_likes_comments( 
        user_id UUID REFERENCES sa_users(user_id),
        comment_id UUID REFERENCES sa_comments(comment_id),
        PRIMARY KEY(user_id, comment_id)
    )`

    return Response.json({"message": "Database seed the guay"});
}