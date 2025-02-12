import Post from "@/app/ui/post"
import { getPosts } from "../lib/data"
import { auth0 } from "../lib/auth0";

export default async () => {

    const posts = await getPosts();
    const user_id  = (await auth0.getSession()).user.id;
    
    console.log('user_id: '+user_id)

    return (
        <div className="flex flex-col grow items-center gap-16">
            { 
                posts.map(post => (<Post 

                    key={post.post_id} 

                    post={post}
                    user_id={user_id} 
                    isLikedInitial={likes.find(like => like.post_id === post.post_id)}
                />))
            }
        </div>
    )
}