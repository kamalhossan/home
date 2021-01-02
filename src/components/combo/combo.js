import React from 'react';
import classes from './combo.module.css';
import data from './data';

const singleCategory = data.map((packs) => (
    <div className="col-md-3 col-sm-4 my-2">
        <div className={classes.category_container}>
            <div className={classes.category_top_image}>
                <img className={classes.category_image} src={packs.image} alt={packs.comboTitle} />
                <div className={classes.category_hover_section}>
                    <button className={classes.categoryHoverBtn} type="button">
                        View All Products
                    </button>
                </div>
            </div>
            <div className="products_content py-3">
                <h4 className={classes.category_title}>{packs.comboTitle}</h4>
            </div>
        </div>
    </div>
));

const combo = () => (
    <div className={classes.category_page}>
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className={classes.category_name}>Combo Offer</h1>
                    <h2 className={classes.all_category}>Best Deals</h2>
                </div>
                {singleCategory}
            </div>
        </div>
    </div>
);

export default combo;
