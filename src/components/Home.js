import React from 'react';
import { Redirect } from 'react-router';
import './style.css'
class Home extends React.Component {

  state = {
    employeePage: false,
    salesPage: false
  }
  redirect = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  renderRedirect = () => {
    if (this.state.employeePage) {
      return <Redirect to={{
        pathname: "/employeesList"
      }} />
    }
    if (this.state.salesPage) {
      return <Redirect to={{
        pathname: "/salesList"
      }} />
    }
  }
  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 home' >
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' style={{ textAlign: 'center', marginTop: "15%" }}>
          <button class="grow_skew_backward home_btn" onClick={() => this.redirect('employeePage', true)}>EMPLOYEE</button>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' style={{ textAlign: 'center' }}>
          <button class="grow_skew_backward home_btn" onClick={() => this.redirect('salesPage', true)}>SALES</button>
        </div>
        {this.renderRedirect()}
      </div>

      // <div>

      //   <button onClick={() => this.redirect('employeePage', true)}>EMPLOYEE</button>
      //   <button onClick={() => this.redirect('salesPage', true)}>SAles</button>
      //   {this.renderRedirect()}

      // </div>

    )
  }
}

export default Home

