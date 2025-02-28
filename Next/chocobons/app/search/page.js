"use client";
import {useState} from "react";
import {searchUsers} from "@/app/lib/data"


export default () => {
    const [search, setSearch] = useState("");
    
    // ! Arreglar
    return (
        <div className="flex gap-2 flex-col">
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Buscar nametag..." 
                className='text-black'
            />
            <button onClick={() =>searchUsers(search)}>Search</button>
            {search}
        </div>
    );
}