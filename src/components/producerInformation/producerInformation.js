import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import data from './data';
import classes from './producerInformation.module.css';

const personDetails = data.map((info) => (
    <>
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Producer Name</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.name}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Produced In</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.ContactNumber}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Quality/Certification</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.Address}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Storage</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.Notification}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Packaging Unit</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.OrderHistory}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Packaging</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.OrderTracking}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Nutritional Information</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.BuyEarnSection}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Massage From Trust-Lite</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.BuyEarnSection}</p>
            </div>
        </div>
        <hr className="mt-0" />
    </>
));

const producerInformation = () => (
    <>
        <div className={['p-3', classes.personal_infoBox].join(' ')}>
            <Row>
                <Col lg={8} md={8} sm={12} xs={12}>
                    <div className="p-3">
                        <hr />
                        {personDetails}
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className="text-center mt-4">
                    <div className="producerinfo">
                        <h4>Producer Name</h4>
                        <h5>Thana/Distric/Division</h5>
                        <img
                            className="img-fluid"
                            src="https://content.geneticliteracyproject.org/wp-content/uploads/2017/02/IMG_2878.jpg"
                            alt="farmer-name"
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="productList">
                    <h2 className="text-center">Title</h2>

                    <ListGroup>
                        <ListGroupItem>1. Product Name One</ListGroupItem>
                        <ListGroupItem>2. Product Name One</ListGroupItem>
                        <ListGroupItem>3. Product Name One</ListGroupItem>
                        <ListGroupItem>4. Product Name One</ListGroupItem>
                        <ListGroupItem>5. Product Name One</ListGroupItem>
                        <ListGroupItem>6. Product Name One</ListGroupItem>
                        <ListGroupItem>7. Product Name One</ListGroupItem>
                        <ListGroupItem>8. Product Name One</ListGroupItem>
                        <ListGroupItem>9. Product Name One</ListGroupItem>
                        <ListGroupItem>10. Product Name One</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    </>
);

export default producerInformation;
