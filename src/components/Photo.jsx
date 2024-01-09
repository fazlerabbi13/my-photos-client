import { useLoaderData } from "react-router-dom";

const Photo = () => {
    const photo = useLoaderData();
    const {id,title,url} = photo;
    console.log(photo);
    return (
        <div>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <img src={url} alt="" />
        </div>
    );
};

export default Photo;