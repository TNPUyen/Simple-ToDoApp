import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../../styles/categories.css';
import CategoriesList from './components/categoriesList';
import CategoriesInput from './components/categoriesInput';
import { CategoriesActions } from '../../actions/categoriesActions';


export default function Categories({user}) {
    console.log(user)
    const [categories, setCategories] = useState(null)
    useEffect(async () => {
        const temp = await CategoriesActions.getCategoriesList(user.info._id);
        if(temp != null){
            setCategories(temp);
        }
    }, []);
    console.log(categories)

    return (
        <div>
            <CategoriesInput user={user.info} categoriesList={categories}/>
            <hr></hr>
            <div className='report-categories'>
                <p>All</p>
                <div>
                    3
                </div>
                <p>Doing</p>
                <div>
                    2
                </div>
                <p>Done</p>
                <div>
                    1
                </div>
            </div>
            <CategoriesList user={user.info} categoriesList = {categories}/>
        </div>
    )
}
