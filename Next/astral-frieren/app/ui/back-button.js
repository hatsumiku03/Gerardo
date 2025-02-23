'use client'
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

export default ({post_id, user_id, isLikedInitial}) => {

    // TODO: quitar de aqui
    function goBack() {
        window.history.back();
    }

    return (
        <ArrowLeftIcon onClick={goBack} 
        className='w-8 text-gray-300 hover:text-gray-100 cursor-pointer' />

        

    )
}