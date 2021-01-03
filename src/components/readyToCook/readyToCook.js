import React from 'react';
import data from './data';
import classes from './readyToCook.module.css';

const zones = data.map((items) => (
    <div className="col-md-3 col-sm-4 my-2 text-center">
        <div className={classes.category_container}>
            <div className={classes.category_top_image}>
                <img className={classes.category_image} src={items.image} alt={items.comboTitle} />
                <div className={classes.category_hover_section}>
                    <button className={classes.categoryHoverBtn} type="button">
                        View All Products
                    </button>
                </div>
            </div>
            <div className="products_content py-3">
                <h4 className={classes.category_title}>{items.itemsTitle}</h4>
            </div>
        </div>
    </div>
));

const wholesale = () => (
    <div className={classes.category_page}>
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className={classes.category_name}>Ready to Cook</h1>
                    <h2 className={classes.all_category}>Pick and Start</h2>
                </div>
                {zones}
            </div>
        </div>
    </div>
);

export default wholesale;
