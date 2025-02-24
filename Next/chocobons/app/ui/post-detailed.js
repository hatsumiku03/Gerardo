// "use client"
// import { useRef } from "react";
import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import LikeButton from "./like-button"
import BackButton from "./back-button"
import { addComment } from "../lib/actions"

export default ({
    user_id, 
    post,
    isLikedInitial,
    comments // Añadir la prop comments
}) => {

    // ! Remover esto y pasarlo a un componente a parte para no usar use client
    // const formRef = useRef(null);

    // // Mover la lógica a actions
    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter' && !event.shiftKey) {
    //         event.preventDefault();
    //         formRef.current.submit();
    //     }
    // };

    return (
        <div className="flex flex-col max-w-sm gap-2">
        <BackButton />
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
                        className="border-2 border-white rounded-md"
                        width={384}
                        height={384}
                    />
                </Link>
           </div>

           <div>
                <div className="flex gap-2">
                    <div className="flex gap-1">
                        <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial} /><span className="mt-1">{post.num_likes}</span>
                    </div>
                    <div className="flex gap-1">
                        <ChatBubbleLeftIcon className="w-8" /><span className="mt-1">{post.num_comments}</span>
                    </div>
                </div>
           </div>

           <div>
            <p>{post.content}</p>
           </div>

            // ! Pasar el formulario a un componente a parte
           <div className="mt-2">
               <form action={addComment}>
                 <input type="hidden" name="post_id" value={post.post_id}></input>
                 <input name="content" className="p-1 rounded-md w-full outline-0 bg-neutral-900" type="text" placeholder="Añadir comentario" required/>
               </form>
           </div>

           {/* Comentarios de la publicación */}
           {/* Añadirle un delay con useState y useEffect */}
            <h1 className="text-3xl relative font-bold w-fit p-1 rounded-md">Sección de comentarios</h1>
           <hr></hr>
           <div className="mt-2">
               {comments.map((comment, index) => (
                <div key={index} className="max-w-lg mx-auto border px-6 py-4 rounded-lg mt-5">
                    <div className="flex items-center mb-6">
                        <Image src={comment.picture} alt="Avatar" width={30} height={30} className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <div className="text-lg font-medium text-gray-100">{comment.name}</div>
                            <div className="text-gray-500">2 hours ago</div>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed mb-6">{comment.content}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <a href="#" className="text-gray-400 hover:text-gray-200 mr-4"><HeartIcon className="w-8 cursor-pointer"></HeartIcon></a>
                            <a href="#" className="text-gray-400 hover:text-gray-200"><ChatBubbleLeftIcon className="w-8 cursor-pointer" /></a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="text-gray-400 hover:text-gray-200 mr-4"><i className="far fa-flag"></i> Report</a>
                            <a href="#" className="text-gray-400 hover:text-gray-200"><i className="far fa-share-square"></i> Share</a>
                        </div>
                    </div>
                </div>
               ))}
           </div>
        </div>
    )
}