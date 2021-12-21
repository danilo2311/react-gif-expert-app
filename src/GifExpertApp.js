import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = (() => {

    const [categories, setCategories] = useState(['Bleach']);

    // const handleAdd = () => {
    //     // setCategories([...categories,'Bleach']);
    //     setCategories(cats => [...cats, 'Bleach']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <AddCategory/> */}
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map((category, i) => 
                        // <li key={category}>{category}</li>
                        <GifGrid 
                            key={category}
                            category={category}
                        /> 
                    )
                }
            </ol>
        </>
    )
})

export default GifExpertApp
