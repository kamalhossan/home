import React from 'react';
import data from './data';
import classes from './marketCategory.module.css';

const singleCategory = data.map((category) => (
    <div className="col-md-3 col-sm-4 my-2">
        <div className={classes.category_container}>
            <div className={classes.category_top_image}>
                <img
                    className={classes.category_image}
                    src={category.image}
                    alt={category.category}
                />
                <div className={classes.category_hover_section}>
                    <button className={classes.categoryHoverBtn} type="button">
                        View All Products
                    </button>
                </div>
            </div>
            <div className="products_content py-3">
                <h4 className={classes.category_title}>{category.category}</h4>
            </div>
        </div>
    </div>
));

const marketCategory = () => (
    <div className={classes.category_page}>
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className={classes.category_name}>Market Category</h1>
                    <h2 className={classes.all_category}>Browse All Category</h2>
                </div>
                {singleCategory}
            </div>
        </div>
    </div>
);

export default marketCategory;
