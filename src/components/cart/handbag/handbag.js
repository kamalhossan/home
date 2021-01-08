import { faHeart, faInfoCircle, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import data from '../data';
import classes from './handbag.module.css';

const cartsItems = 1;

const singleCart = data.map((singleItems) => (
    <div className="row my-3">
        <div className="col-md-5 col-lg-3 col-xl-3">
            <div className="view my-2">
                <img
                    className={['img-fluid w-100', classes.imageRadius].join(' ')}
                    src={singleItems.image}
                    alt={singleItems.productTitle}
                />
            </div>
        </div>
        <div className="col-md-7 col-lg-9 col-xl-9 text-left py-2">
            <div className="d-flex">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <h5 className={classes.productTitle}>{singleItems.productTitle}</h5>
                        <p>{singleItems.productDesc}</p>
                    </div>
                </div>
                <div className={classes.input_group}>
                    <div className={classes.btn_group}>
                        <FontAwesomeIcon className={classes.faIcons} icon={faMinus} />

                        <input
                            className={['form-control', classes.asText].join(' ')}
                            type="text"
                            name="quantity"
                            value={cartsItems}
                            min="1"
                            max="100"
                        />

                        <FontAwesomeIcon className={classes.faIcons} icon={faPlus} />
                    </div>
                </div>
            </div>
            <div className={['d-flex justify-content-between', classes.cart_action].join(' ')}>
                <p className={classes.product_action_btn}>
                    <FontAwesomeIcon icon={faTrash} />
                    Remove Items
                </p>
                <p className={classes.product_action_btn}>
                    <FontAwesomeIcon icon={faHeart} />
                    Move to Wish List
                </p>
                <p className={classes.productPrice}>{singleItems.itemPrice}</p>
            </div>
        </div>
    </div>
));

const handbag = () => (
    <div className="col-lg-8">
        <div className="mb-4">
            <div className={['card-body', classes.wish_list].join(' ')}>
                <h5 className="text-left">Cart (2 items)</h5>
                {singleCart}
                <div className={classes.cart_alert}>
                    <p className="text-left">
                        {' '}
                        <FontAwesomeIcon icon={faInfoCircle} /> Do not delay the purchase, adding
                        items to your cart does not mean booking them.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default handbag;
