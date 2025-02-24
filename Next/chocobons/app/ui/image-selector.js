'use client'

import Image from "next/image"
import { useState } from "react";

export default () => {

    const [photo, setPhoto] = useState("/preview.jpg");

    function preview(ev){
        setPhoto(URL.createObjectURL(ev.target.files[0]));
    }

    return (<>
        <label htmlFor="myfs">
            <Image id="ima" src={photo} width={256} height={256} alt="preview" />
        </label>
        <input id="myfs" type="file" name="media" hidden onChange={preview}/>
    </>)
}