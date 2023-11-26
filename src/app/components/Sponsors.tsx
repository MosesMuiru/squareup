
import React from "react";
import Image from "next/image";

function Sponsors(srcLink:any){
    // ths function should contain all the sponsors of that show
    return(
        <div className="">
            <Image
                src={srcLink} 
                width={500}
                height={300}
                alt="sponsors imaage"
                className=" text"
            />
        </div>
    )
}

export default Sponsors