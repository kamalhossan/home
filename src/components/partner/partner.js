import React from 'react';
import classes from './partner.module.css';

const partner = () => (
    <div className="container">
        <div className="row d-flex justify-content-center my-5">
            <div className={['col-md-8 py-5', classes.boxShadow].join(' ')}>
                <form className="p-3">
                    <div className="form-group text-left">
                        <h2 className={['text-center mb-4', classes.title].join(' ')}>
                            Registration as a Supplier
                        </h2>
                        <p className="mb-0">Your Photo</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload Photo</span>
                            </div>
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose file
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                    />
                                </label>
                            </div>
                        </div>
                        <p className="mb-0">Your NID Scan Copy</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload NID</span>
                            </div>
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose file
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                    />
                                </label>
                            </div>
                        </div>
                        <p className="mb-0">Your Full Name</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="form-group text-left">
                        <p className="mb-0">Organization Name</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="ex. Home Delight"
                        />
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Contact Number</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Mobile"
                        />
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Address</p>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Full Address"
                        />
                    </div>

                    <div className="form-group text-left">
                        <p className="mb-0">Payment Method</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <p className="input-group-text">Selected</p>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Bank</option>
                                <option value="2">Cheque</option>
                                <option value="3">Bkash</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Select Your Item</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <p className="input-group-text">Selected</p>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Rice</option>
                                <option value="2">Salad</option>
                                <option value="3">Birani</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group text-left">
                        <p className="mb-0">Select Our Service Point</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <p className="input-group-text">Selected</p>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Kishoreganj</option>
                                <option value="3">Mymensingh</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default partner;
