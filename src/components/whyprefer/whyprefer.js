import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftColumn from './leftColumn/leftColumn';
import RightColumn from './rigthColumn/rightColumn';
import classes from './whyprefer.module.css';

const whyprefer = () => (
    <div className={classes.whyprefer}>
        <div className="textHeadingBg">
            <h2 className="categoryTitle">Why Prefer TrustLite</h2>
        </div>
        <Container className="py-5">
            <Row lg={3} md={3} xs={1} sm={1}>
                <Col className="my-2">
                    <LeftColumn />
                </Col>
                <Col className="my-2">
                    <div className="middle_column">
                        <div className={classes.featureImage}>
                            <img
                                className={[classes.middle_image, 'img-fluid d-block m-auto'].join(
                                    ' '
                                )}
                                src="https://www.khaasfood.com/wp-content/uploads/2020/06/Footer-image.jpg"
                                alt="Why Shop With Us"
                            />
                        </div>
                    </div>
                </Col>
                <Col className="my-2">
                    <RightColumn />
                </Col>
            </Row>
        </Container>
    </div>
);

export default whyprefer;
