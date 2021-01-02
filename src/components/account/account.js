import React from 'react';
import classes from './account.module.css';
import data from './data';

const personDetails = data.map((info) => (
    <>
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Full Name</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.name}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Contact</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.ContactNumber}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Address</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.Address}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Notification</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.Notification}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Order History</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.OrderHistory}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Order OrderTracking</p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.OrderTracking}</p>
            </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
            <div className="col-sm-3 col-md-3 col-5 text-left">
                <p>Buy &amp; Earn Section </p>
            </div>
            <div className="col-md-8 col-6 text-left">
                <p>{info.BuyEarnSection}</p>
            </div>
        </div>
        <hr className="mt-0" />
    </>
));

const account = () => (
    <div className="container my-5">
        <div className={['p-3', classes.personal_infoBox].join(' ')}>
            <div className="row m3-5">
                <div className="col-lg-4 col-md-4 col-sm-12 text-left">
                    <img
                        className={classes.profilePic}
                        src="data:image/jpeg;base64,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"
                        alt="Profile"
                    />
                </div>
                <div className={['col-lg-8 col-md-8 col-sm-12 text-left', classes.title].join(' ')}>
                    <h1>My Account</h1>
                    <p>Keep your profile always updated</p>
                </div>
            </div>
            <hr />
            {personDetails}
            {/* <div className={['row', classes.person_info].join(' ')}>
                <hr />
                <div className="col-sm-3 col-md-3 col-5">
                    <p>Full Name</p>
                </div>
                <div className="col-md-8 col-6">
                    <p>Jamshaid Kamran</p>
                </div>
                <hr />
            </div> */}
        </div>
    </div>
);

export default account;
