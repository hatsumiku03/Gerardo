'use client'

import { HeartIcon } from "@heroicons/react/24/solid"
import { insertLike, removeLike } from "../lib/actions";
import clsx from "clsx";
import { useState } from "react";

export default ({post_id, user_id, isLikedInitial}) => {

    let [isLiked, setIsLiked] = useState(isLikedInitial);

    function toogleLike() {
        if (isLiked) {
            removeLike(post_id, user_id);
            setIsLiked(false);
        } else {
            insertLike(post_id, user_id);
            setIsLiked(true);
        }
    }

    return (
        <HeartIcon onClick={toogleLike} 
        className={clsx("w-8 cursor-pointer",{"text-red-600":isLiked})} />

        

    )
}