import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from './Data';
import classes from './products.module.css';

const singleProduct = data.map((productDetails) => (
    <Col className="my-2 text-center">
        <div className={classes.prodcuts_container}>
            <div className={classes.products_top_image}>
                <img
                    className={classes.products_image}
                    src={productDetails.image}
                    alt={productDetails.title}
                />
                <div className={classes.product_hover_section}>
                    <button className={classes.productHoverBtn} type="button">
                        View Details
                    </button>
                </div>
            </div>
            <div className="products_content py-3">
                <p className={classes.product_brands}>{productDetails.brands}</p>
                <h4 className={classes.products_title}>{productDetails.title}</h4>
                <p className={classes.product_Price}>{productDetails.price}</p>
                <button className={classes.products_btn} type="button">
                    {productDetails.btn}
                </button>
            </div>
        </div>
    </Col>
));

const products = () => (
    <div className={classes.products_page}>
        <Container className="py-5">
            <Row>
                <Col>
                    <h1 className={classes.category_name}>Sobji Bazar</h1>
                    <h2 className={['text-center', classes.all_product].join(' ')}>
                        Browse All Product
                    </h2>
                </Col>
            </Row>
            <Row lg={4} md={3} sm={2} xs={2}>
                {singleProduct}
            </Row>
        </Container>
    </div>
);

export default products;

// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import data from './Data';
// import classes from './products.module.css';

// const singleProduct = data.map((productDetails) => (
//     <div className="col-md-3 col-sm-6 my-2">
//         <div className={classes.prodcuts_container}>
//             <div className={classes.products_top_image}>
//                 <img
//                     className={classes.products_image}
//                     src={productDetails.image}
//                     alt={productDetails.title}
//                 />
//                 <div className={classes.product_hover_section}>
//                     <button className={classes.productHoverBtn} type="button">
//                         View Details
//                     </button>
//                 </div>
//             </div>
//             <div className="products_content py-3">
//                 <p className={classes.product_brands}>{productDetails.brands}</p>
//                 <h4 className={classes.products_title}>{productDetails.title}</h4>
//                 <p className={classes.product_Price}>{productDetails.price}</p>
//                 <button className={classes.products_btn} type="button">
//                     {productDetails.btn}
//                 </button>
//             </div>
//         </div>
//     </div>
// ));

// const products = () => (
//     <div className={classes.products_page}>
//         <Container className="py-5">
//             <Row>
//                 <div className="col-12">
//                     <h1 className={classes.category_name}>Sobji Bazar</h1>
//                     <h2 className={classes.all_product}>Browse All Product</h2>
//                 </div>
//                 {singleProduct}
//             </Row>
//         </Container>
//     </div>
// );

// export default products;
