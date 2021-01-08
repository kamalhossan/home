import React from 'react';
import { Button, Container } from 'react-bootstrap';
import classes from './serious.module.css';
import Slogan from './slogan/slogan';

const serious = () => (
    <div className={classes.serious}>
        <Container className={classes.serious_container}>
            <h2>We save your serious</h2>
            <div className={classes.changetext}>
                <Slogan />
            </div>
            <p>Americas Most Popular Meal Kit</p>
            <Button type="button" className="btn btn-primary text-uppercase" href="#products">
                View Our Plans
            </Button>
        </Container>
    </div>
);

serious.propTypes = {};

export default serious;
