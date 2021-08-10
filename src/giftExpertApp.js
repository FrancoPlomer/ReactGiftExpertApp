import {React, useState} from 'react';
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/GifGrid';
export const GiftExpertApp = params => {
    const [Categories, setCategories] = useState([])

    return(
        <div className="containerFather">
            <h1 id="titleProyect">giftExpertApp</h1>
            <hr/>
            <h2 id="subtitleProyect">Categorias</h2>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    //map recibe 2 parametros, uno es el arreglo y el otro es el indice, en este caso es el que dice i.
                    //Cuando usamos map react pide que si o si se le asigne una key a cada elemento que retorna.
                    Categories.map((category) =>     
                        <GifGrid key={ category } category={ category }/>
                    )
                }
            </ol>
        </div>
    )
}