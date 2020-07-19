import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    getUser,
} from "../actions";
import { authen } from "../FirebaseConfig";


class Header extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
   
    render() {
        return (
            <>
                <div className="bg-success" >
                    <div className="container header title" >
                        <div className="row" >

                            <div className="col-6 text-white d-flex justify-content-start " >
                                {/* <img style={{ height: 50 }} className = "mt-3 mr-3" src="https://img.icons8.com/material-outlined/100/000000/online-shop-2.png" alt="" /> */}
                                <div className="shadow">
                                    <div className=" text-left mt-4 h3 ml-2 mr-2">{" "}Smart Trash Tracking System</div>

                                </div>
                            </div>

                            <div className="col-6 text-right" >
                                <div className="text-white text-right mt-3 title"> <img className="rounded-circle mr-2" style={{ height: 40 }} src={this.props.user.user_image} alt="" />{" "}ชื่อผู้ใช้ : {this.props.user.user_name}</div>
                                <div className="text-right text-black-50 btn" onClick={() => authen.auth().signOut()}>ออกจากระบบ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" sticky-top bg-secondary">
                    <div className="container bg-secondary " >
                        <div className="row d-flex justify-content-center">

                            <div className="row text-center h5">
                                {/* <Link className={this.props.menu === "/" ? "nav-link title  mr-2 text-white" : "nav-link title mr-2 text-dark"} to="/">
                                    สินค้า
                                </Link>

                                <Link className={this.props.menu === "/waitPayment" ? "nav-link title  mr-2 text-white" : "nav-link title mr-2 text-dark"} to="/waitPayment">
                                    ตะกร้า
                                </Link>

                                <Link className={this.props.menu === "/paid" ? "nav-link title  mr-2 text-white" : "nav-link title mr-2 text-dark"} to="/paid">
                                    สถานะ
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>



        )
    }


}
function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps, {
    getUser,
})(Header);