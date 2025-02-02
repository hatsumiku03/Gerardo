import React from 'react';
import Image from 'next/image';

const Post = ({ imageUrl}) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg mt-8 relative w-full ">
            {imageUrl && (
                <Image src={imageUrl} alt='' width={500} height={300} className="w-full h-48 object-cover rounded-lg" />
            )}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 break-words">Titulo</h2>
                    <p className="mt-2 text-gray-600 break-words">Contenido</p>
                <span className="mt-4 text-gray-500 block">19/7/2022</span>
            </div>
        </div>
    );
};

export default Post;