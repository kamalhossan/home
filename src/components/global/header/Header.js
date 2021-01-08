import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

const header = () => (
    <div className={classes.mainheader}>
        <div className={classes.left}>
            <img
                className={classes.logo}
                src="http://kamalhossan.com/wp-content/uploads/2021/01/trustlite.jpg"
                alt=""
            />
        </div>
        <div className={classes.right}>
            <div className={classes.searchbox}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for locally produced products"
                        aria-label="Search Product"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <span
                            className={['input-group-text', classes.search_icon].join(' ')}
                            id="basic-addon2"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </div>
                {/* <input type="text" placeholder="Search product" className="form-control" /> */}
            </div>
            <div className={classes.nav_items}>
                <div className="my_account">
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/136490928_845138169612017_6491864277418683065_n.jpg?_nc_cat=109&ccb=2&_nc_sid=58c789&_nc_eui2=AeE1BIudtqN64Uk7_FCOe3PKg4GxkBoYSWyDgbGQGhhJbGMY6zw0R5s2I-PsNf7FF7E_nJSsQ2dxDDneEOcmv0ig&_nc_ohc=UIy6YeuWb8cAX_4Rkz6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4cdd1a587ec5f7e9d2d89cab0d4e1ede&oe=601E58C1"
                        alt="my account"
                    />
                    <Link to="/myaccount">My Account</Link>
                </div>
                <div className="loginregister">
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/135817271_2756942011227451_1643746363885949060_n.png?_nc_cat=110&ccb=2&_nc_sid=58c789&_nc_eui2=AeFjqbxLnPXM-dcTBsciN4F_Q7_maNHBllZDv-Zo0cGWVppTQk5V06RN2ayW9NGgvai-QtxctqXbA9jV8QbUSXKt&_nc_ohc=uByANSzcVNEAX8EgB4W&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0caa333d6ddbd4257c8b364ee7820e44&oe=601CEA82"
                        alt="login registration"
                    />
                    <Link to="/login">Login or Register</Link>
                </div>
                <div className={classes.cart}>
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/117062066_1215234815501553_1237601442754855625_n.jpg?_nc_cat=109&ccb=2&_nc_sid=58c789&_nc_eui2=AeFpnb-84G_B78xfkd_Y3T7eh7e7d4pSBE2Ht7t3ilIETU3T5XLaG-x6i_6JKRhCww3MwVH5hvVmZvSSA57GatGS&_nc_ohc=1MnXstf_AYUAX-_pHc5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=09c0dd1917067eb2472707a43f16fe13&oe=601D19F3"
                        alt="handbag"
                    />
                    <Link to="/cart">View Handbag</Link>
                </div>
                <div className="guidelines">
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/136193012_2815768355355785_7860936478297312503_n.png?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeFmN1-vaVXrpiWb7uflYevZFa89gQDR-8wVrz2BANH7zKmeldGGlzWo-1WFJriNTsrCCUL38Wg0_9_SMukN7jXp&_nc_ohc=hona9Ps21eoAX8v_6sz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=8726b30a8eae8823132b838e762b45be&oe=601E2135"
                        alt="guideline"
                    />
                    <Link to="#guideline">Guideline</Link>
                </div>
                <div className="updateinformation">
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/78590017_447904969108054_6055549982054809600_n.png?_nc_cat=101&ccb=2&_nc_sid=58c789&_nc_eui2=AeEbSgThEOcbS8r3sonI2ha4ECmmUXgmq28QKaZReCarbz0UAt6EU7ezWBaNu4eTtDiDHhqDUiu4MhmWdwHsuyyZ&_nc_ohc=zCGgv3h8WL8AX8IDoy2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=065628a701047257dd32e8a32b81758c&oe=601F7109"
                        alt="update information"
                    />
                    <Link to="#guideline">Update Information</Link>
                </div>
                <div className="hotline">
                    <img
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/136373958_398912704733770_8602709197973382072_n.jpg?_nc_cat=111&ccb=2&_nc_sid=58c789&_nc_eui2=AeFQ1O4xjCs2hNU410JllpAH1xbE0NKUkOrXFsTQ0pSQ6kSWGsTNMPaAm1zVemlTOEwbfI2zKXWyxEDIaGIYkPcl&_nc_ohc=-R-G7te31RgAX_dPvye&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=ccb49b258ce6177cb27a667e476f1ec1&oe=601F9D38"
                        alt="hotline"
                    />
                    <Link to="#top">
                        01780112233
                        <br />
                        info@trustlite.com
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default header;
