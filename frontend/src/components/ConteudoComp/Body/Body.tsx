import Post from "../Post/Post";

export default function Body(){
    return(
        <div className="flex flex-col w-full h-full p-4 overflow-y-auto">
            <Post />
            <Post />
            <Post />
        </div>
    );
}