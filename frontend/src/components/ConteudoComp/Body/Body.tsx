import Post from "../Post/Post";

export default function BodyHome(){
    return(
        <div className="flex flex-col w-full h-full p-4">
            <Post />
            <Post />
            <Post />
        </div>
    );
}