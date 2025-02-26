'use client'

import { HeartIcon } from "@heroicons/react/24/solid"
import { insertLikeComment, removeLikeComment } from "../lib/actions";
import clsx from "clsx";
import { useState } from "react";

export default ({comment_id, user_id, isCommentLikedInitial}) => {

    let [isLiked, setIsLiked] = useState(isCommentLikedInitial);

    function toogleLike() {
        if (isLiked) {
            removeLikeComment(comment_id, user_id);
            setIsLiked(false);
        } else {
            insertLikeComment(comment_id, user_id);
            setIsLiked(true);
        }
    }

    return (
        <HeartIcon onClick={toogleLike} 
        className={clsx("w-8 cursor-pointer",{"text-red-600":isLiked})} />
    )
}