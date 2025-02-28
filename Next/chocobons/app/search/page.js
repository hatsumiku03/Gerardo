"use client";
import {useState} from "react";
import {searchUsers} from "@/app/lib/data"


export default () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);


    function enterSearch(userName, userPicture){
        searchUsers(search);
    }
    
    // ! Arreglar, por alguna razón me da error al hacer la búsqueda diciendo
    // ! que la variable postgres_url no esta definida, cuando efectivamente, esta defindo xD
    return (
        <div className="flex gap-2 flex-col">
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Buscar nametag..." 
                className='text-black'
            />
            <button onClick={enterSearch}>Search</button>

            {users.map((user,index) => (
                // ! Arreglar
                <div key={index}>
                    <img src={user.picture} className="w-8 h-8" />
                    <div>{user.name}</div>
                </div>
            ))}

        </div>
    );
}