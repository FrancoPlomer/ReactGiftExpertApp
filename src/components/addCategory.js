import {React, useState} from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => 
{

    const [nuevaCategoria, setnuevaCategoria] = useState('')
    const handleAddCategory = (e) =>
    {
        setnuevaCategoria(e.target.value)
    }
    const handleOnSubmit = (e) =>
    {
        e.preventDefault();
        if (nuevaCategoria !== "")
        {
            setCategories( cats => 
                [nuevaCategoria, ...cats]
            );
        }
    }   
    return(
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="agregarCategoria" id="newCategory">Nueva categoria</label>
            <input
            type="text"
            name="agregarCategoria"
            value={nuevaCategoria}
            onChange={e => {handleAddCategory(e)}}
            id="inputCategory"
            required/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}