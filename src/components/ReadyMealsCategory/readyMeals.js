import React from 'react';
import { Container, Row } from 'react-bootstrap';
import data from './data';
import classes from './readyMeals.module.css';

const singleCategory = data.map((packs) => (
    <div className="col-md-3 col-sm-4 my-2 text-center">
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
                <h4 className={classes.category_title}>{packs.mealsTitle}</h4>
            </div>
        </div>
    </div>
));

const readyMeals = () => (
    <div className={classes.category_page}>
        <Container className="py-5">
            <Row>
                <div className="col-12">
                    <h1 className={classes.category_name}>Ready Meals Category</h1>
                    <h2 className={classes.all_category}>Test Your Favour</h2>
                </div>
                {singleCategory}
            </Row>
        </Container>
    </div>
);

export default readyMeals;
