import React from 'react';
import classes from './checkout.module.css';

const checkout = () => (
    <div className="container">
        <div className="row d-flex justify-content-center my-5">
            <div className={['col-md-8 col-lg-8 col-sm-12 py-5', classes.boxShadow].join(' ')}>
                <div className="checkout_form">
                    <h2 className={['text-left', classes.title].join(' ')}>Click To Check Out</h2>

                    <table className="table text-left border-0">
                        <tbody>
                            <tr>
                                <th scope="row"> 1. Please Complete Your Account </th>
                                <td>
                                    <button type="button" className="btn btn-primary">
                                        Register Now
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2.Billing Information </th>
                                <td>Sector # 4, Uttara, Dhaka -1230</td>
                            </tr>
                            <tr>
                                <th scope="row">3.Delivery Information </th>
                                <td>Via Bangladesh DHL</td>
                            </tr>
                            <tr>
                                <td>Receiver Name</td>
                                <td>Kamal Hossan</td>
                            </tr>
                            <tr>
                                <td>Mobile No</td>
                                <td>01790493968</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Botkila Bazar, Choddosoto, Kishoreganj Sadar, Kishoreganj</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>Dhaka = Kishoreganj</td>
                            </tr>
                            <tr>
                                <th scope="row">4. Delivery Type </th>
                                <td>Normal</td>
                            </tr>
                            <tr>
                                <th scope="row">5. Delivery Schedule </th>
                                <td>Normal</td>
                            </tr>
                            <tr>
                                <th scope="row">6. Notes</th>
                                <td>You will recevied the product within 3-5 days</td>
                            </tr>
                            <tr>
                                <th scope="row">7. Payment System</th>
                                <td>Cash on delivery</td>
                            </tr>
                            <tr>
                                <th scope="row">8. Give buy &amp; Earn Code</th>
                                <td>JANUARY2021</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button
                                        className="btn  btn-primary text-center btn-block"
                                        type="button"
                                    >
                                        Place Order
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 text-left ">
                            <p> 1. Please Complete Your Account</p>
                        </div>
                        <div className="d-flex col-lg-4 col-md-4 col-sm-6 text-left">
                            <button type="button" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 text-left ">
                            <p>Billing Information</p>
                        </div>
                        <div className="d-flex col-lg-4 col-md-4 col-sm-6 text-left">
                            <p>Uttara, Dhaka - 1230</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 text-left ">
                            <p>Delivery Information</p>
                        </div>
                        <div className="d-flex col-lg-4 col-md-4 col-sm-6 text-left">
                            <p>Uttara, Dhaka - 1230</p>
                        </div>
                    </div> */}
                </div>
                {/* <form className="p-3">
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
                </form> */}
            </div>
        </div>
    </div>
);

export default checkout;
