import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // const [error, setError] = useState(null);

    useEffect(()=>{
        const abortConst = new AbortController();


        setTimeout(()=>{
            fetch(url, {signal: abortConst.signal}).then(res => {
                if(!res.ok){
                    console.log(res);
                }
                return res.json();
            }).then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
            }).catch(err=>{
                console.log(err.message);
                console.log(err);
                setError(err.message)
                //setError(err.message);
            })
        },1000);
    },[url])
    return {data, isPending, error};
}


export default useFetch;