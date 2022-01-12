import React from 'react';
import '../../App.css';
import '../../styles/categories.css';
import CategoriesList from './components/categoriesList';
import CategoriesInput from './components/categoriesInput';


export default function Categories() {
    return (
        <div>
            <CategoriesInput />
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
            <CategoriesList />
        </div>
    )
}
