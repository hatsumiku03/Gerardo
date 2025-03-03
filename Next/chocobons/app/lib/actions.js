'use server'

import { put } from "@vercel/blob"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth0, uid } from "./auth0";


export async function createPost(formData){

    const user_id = (await auth0.getSession()).user.user_id;

    const { url } = await put(
        'media', 
        formData.get("media"), 
        { access: 'public'}
    );
    const content = formData.get('content');
    await sql`INSERT INTO sa_posts(content, url, user_id) 
        VALUES(
            ${content},
            ${url},
            ${user_id}
        )`

        revalidatePath('/');
        redirect('/');
}

export async function insertLike(post_id, user_id){

    await sql`INSERT INTO sa_likes(post_id, user_id) VALUES (
        ${post_id},  
        ${user_id}
    )`
}

export async function insertLikeComment(comment_id, user_id){

    await sql`INSERT INTO sa_likes_comments(comment_id, user_id) VALUES (
        ${comment_id},  
        ${user_id}
    )`
}

export async function removeLike(post_id, user_id){

    await sql`DELETE FROM sa_likes 
        WHERE post_id = ${post_id} AND user_id = ${user_id}
    `
}

export async function removeLikeComment(comment_id, user_id){

    await sql`DELETE FROM sa_likes_comments 
        WHERE comment_id = ${comment_id} AND user_id = ${user_id}
    `
}

export async function addComment(formData) {
    const content = formData.get('content');
    const post_id = formData.get('post_id');
    const user_id = (await auth0.getSession()).user.user_id;
    
    await sql`INSERT INTO sa_comments(content, user_id, post_id) 
        VALUES(
            ${content},
            ${user_id},
            ${post_id}
        )`
}