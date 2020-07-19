import React, { Component } from "react"
import { connect } from "react-redux"
import RegisterForm from "../register/RegisterForm"
import { setUser } from '../../actions'

class Register extends Component {
   
    onSubmit(formValues) {
        formValues.status = "ลงทะเบียนแล้ว"
        formValues.id = this.props.user_id
        formValues.user_image = this.props.user_image
        this.props.setUser(formValues)
    }
    render() {
        const { formValues } = this.props;
        return (
            <div>
                <div className="container" style={{ minHeight: '79vh', backgroundColor: '#f5f5f5' }}>
                    <RegisterForm onPaymentSubmit={() => this.onSubmit(formValues)} />
                </div>
            </div>
        )
    }
}
function mapStateToProps({ form }) {
    return { formValues: form.registerForm ? form.registerForm.values : null }
}
export default connect(mapStateToProps,{setUser})(Register)