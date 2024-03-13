import { useEffect } from "react"

export default function UploadButton({ onClick, handleImageList}) {
    useEffect(()=>{
        document.getElementById('file').addEventListener('change', (e) => {
            console.log('change')
            const newImage = document.createElement('img')
            newImage.src = URL.createObjectURL(e.target.files[0])
            handleImageList(newImage.src)
        })

        // return () => {
        //     document.getElementById('file').removeEventListener('change', (e) => {
        //         console.log('remove')
        //     })
        // }
    })

    return (
        <button className='Control__Button' onClick={onClick}>
            <label htmlFor="file">Upload</label>
            <input style={{display: "none"}} type="file" id="file" name="file"/>
        </button>
    )
}