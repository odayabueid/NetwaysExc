import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import EmployeesArr from '../employees.json'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SalesDetails extends React.Component {

  state = {
    salesInfo: '',
    employeeId: '',
    salesEmployee: '',
    showEmpProfile: false
  }

  componentDidUpdate = (prevProps, props) => {
    if (prevProps.salesCard != this.props.salesCard) {
      this.setState({
        salesInfo: this.props.salesCard,
        employeeId: this.props.salesCard.employeeId
      }, () => {
        var employee = this.pickEmployee(this.state.employeeId, EmployeesArr.employees)
        this.setState({
          salesEmployee: employee
        })
      })
    }
  }

  pickEmployee = (employeeId, employeesArr) => {
    return employeesArr.reduce((a, item) => {
      if (a) return a;
      if (item.id === employeeId) return item;
      if (item.employees) return this.pickEmployee(this.state.employeeId, item.employees);
    }, null);
  }

  render() {
    return (
      <div style={styles.content}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", backgroundColor: "#3995d2", minHeight: "40px" }}>

        </div>
        {this.state.salesInfo ?
          <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: '30px' }}>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <h3>Client Name: <span style={{ color: '#3995d2' }}>{this.state.salesInfo.client}</span></h3>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <h3>Amount: <span style={{ color: '#3995d2' }}>{this.state.salesInfo.amount}</span></h3>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <h3>Date: <span style={{ color: '#3995d2' }}>{this.state.salesInfo.saleDate}</span></h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: "center", marginTop: '20px' }}>
              <Button variant="contained" color="primary" style={{ marginTop: "15px" }} onClick={() => {
                this.setState({
                  showEmpProfile: !this.state.showEmpProfile
                })
              }}>
                Show/Close Employee Profile
              </Button>
            </div>
            {this.state.showEmpProfile && this.state.salesEmployee &&
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: '-webkit-center', marginTop: "20px" }}>
                  <Avatar alt="Remy Sharp" src={this.state.salesEmployee.avatar} style={styles.avatar} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                    <p>First Name</p>
                    <TextField autoComplete="off" value={this.state.salesEmployee.firstName} style={styles.inputField} id="outlined-basic" label="" variant="outlined" disabled={true} />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                    <p>Last Name</p>
                    <TextField autoComplete="off" value={this.state.salesEmployee.lastName} style={styles.inputField} id="outlined-basic" label="" variant="outlined" disabled={true} />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                    <p>Phone Number</p>
                    <TextField autoComplete="off" value={this.state.salesEmployee.phone} style={styles.inputField} id="outlined-basic" label="" variant="outlined" disabled={true} />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                    <p>Email</p>
                    <TextField autoComplete="off" value={this.state.salesEmployee.email} style={styles.inputField} id="outlined-basic" label="" variant="outlined" disabled={true} />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                    <p>Address</p>
                    <TextField autoComplete="off" value={this.state.salesEmployee.address} style={styles.inputField} id="outlined-basic" label="" variant="outlined" disabled={true} />
                  </div>

                </div>
              </div>
            }
          </div>
          : <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: '50px', textAlign: 'center', fontSize: '20px' }}>
            Click on table row to  show Details
          </div>}
      </div>
    )
  }
}
export default SalesDetails

const styles = {
  content: {
    minHeight: "700px",
    backgroundColor: "#fff",
    marginTop: "15px"
  }, avatar: {
    height: "150px",
    width: "150px"
  },
  inputField: {
    width: "100%"
  },
  checkBoxStyle: {
    color: "#3995d2"
  }
}