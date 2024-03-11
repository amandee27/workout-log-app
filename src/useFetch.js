import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    useEffect(()=>{

        setTimeout(()=>{
            fetch(url).then(res => {
                if(!res.ok){
                    console.log(res);
                }
                return res.json();
            }).then(data => {
                console.log(data);
                setData(data);
            }).catch(err=>{
                console.log(err.message);
                //setError(err.message);
            })
        },1000);
    },[url])
    return {data};
}


export default useFetch;