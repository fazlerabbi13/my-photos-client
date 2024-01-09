import { Link, useLoaderData } from "react-router-dom";

const Photos = () => {
    const photos = useLoaderData();
    console.log(photos);
    return (
        <div>
            <h2>my all photos:{photos.length}</h2>
            {
                photos.map( photo =><li key={photo.id}><Link to={`/photo/${photo.id}`}>{photo.title}</Link></li>)
            }
        </div>
    );
};

export default Photos;