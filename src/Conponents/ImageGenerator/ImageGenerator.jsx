
import './ImageGenerator.css'
import default_image from'../Assets/default_image.jpg'
import { useRef, useState } from 'react';
const ImageGenerator = () => {
    const [image_url, setImage_url] =useState("/");
    let inputRef =useRef(null);
    const ImageGenerator = async() =>{
        if(inputRef.current.value ===""){
            return 0;
        }
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    "Bearer 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",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size: "512x512",
                }),
            }
        );
        let data =await response.json();
        console.log(data);
        let data_array =data.data;
        setImage_url(data_array[0].url)
    }

    return (
        <div className='ai-image-generator'>

            <div className='header'>
                Ai image <span>Generator</span>
            </div>
            <div className='img-loading'>
                <div className='image'>
                    <img src={image_url==="/"?default_image:image_url} alt="" />
                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want you see' />
                <div className="generate-btn" onClick={()=>{ImageGenerator()}}>Generate</div>
            </div>

        </div>
    );
};

export default ImageGenerator;