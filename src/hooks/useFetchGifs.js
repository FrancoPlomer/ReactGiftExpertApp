import {useState, useEffect} from 'react'
import GetGifs from '../helpers/GetGifs'


export default function useFetchGifs( category, setImage) {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        GetGifs(category)
            .then(imgs => 
                {
                    setTimeout(() => {
                        setState(
                            {
                                data: imgs,
                                loading:false
                            }
                        )
                    }, 4000);
                })
    }, [category])
    return state;


}
