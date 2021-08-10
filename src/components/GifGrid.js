import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import "../index.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export const GifGrid = ({ category }) => {
    const {data, loading} = useFetchGifs(category);
    return (
        <>
            <br></br>
            <hr></hr>
            <h3 id="categoryTitle">{ category }</h3>
            {loading ? <Loader className="loaded" type="ThreeDots" color="#ff0000" height={300} width={300} timeout={3000} svgClass="my-custom-class"/> : null}
            <ol className="itemCardContainer">
                {
                    data.map((image) => 
                        <GifGridItem 
                        key={image.id}
                        //De la siguiente manera mandamos cada una de las propiedades de las imagenes de manera independiente
                        {...image} />                         
                    )
                }
            </ol>
        </>
    )
}
