import { useEffect, useState } from "react"

export default function useDimension(){
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    },[width,height]);

    return {width, height};
}