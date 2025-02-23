import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import LikeButton from "./like-button"

export default ({
    user_id, 
    post,
    isLikedInitial,
    
}) => {

    return (
        <div className="flex flex-col max-w-sm gap-2">
           <div className="flex gap-2">
                <Image src={post.picture} 
                    alt="profile_photo"
                    className="rounded-full"
                    width={24}
                    height={24}
                />
                <span>{post.username}</span>
                <span>X días</span>
           </div>

           <div>
                <Link href={`/post/${post.post_id}`}>
                    <Image src={post.url} 
                        alt="post_image"
                        className=""
                        width={350}
                        height={350}
                    />
                </Link>
           </div>

           <div>
                <div className="flex gap-2">
                    <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial} />
                    <ChatBubbleLeftIcon className="w-8" />
                </div>
                <span>{post.num_likes} Me gusta</span>
           </div>
           <div>
            <p><span className="font-bold">{post.username}</span> {post.content}</p>
           </div>
           <div><Link href={`/post/${post.post_id}`}>Ver los X comentarios</Link></div>
        </div>
    )
}