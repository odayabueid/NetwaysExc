import React from 'react';
import SalesData from '../sales.json'
import axios from 'axios'
import moment from 'moment'
import { Redirect } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';

class SalesList extends React.Component {

  state = {
    salesDataArr: SalesData,
    homePage: false,
    search: ''

  }
  componentDidMount = () => {
    var formatDate = this.state.salesDataArr
    formatDate.forEach(el => {
      el.saleDate = moment(el.saleDate).format('YYYY-MM-DD')
    })
    formatDate.sort(function (a, b) {
      var dateA = new Date(a.saleDate), dateB = new Date(b.saleDate);
      return dateA - dateB;
    })
    this.setState({
      salesDataArr: formatDate
    })

  }
  goToHomePage = () => {
    this.setState({
      homePage: true
    })
  }
  renderRedirect = () => {
    if (this.state.homePage) {
      return <Redirect to={{
        pathname: "/"
      }} />
    }
  }
  changeTextHandler = (name, event) => {
    this.setState({
      [name]: event.target.value
    })
  }
  render() {
    let filtered = this.state.salesDataArr.filter(
      (fil) => {
        return fil.client.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      })
    return (
      <div style={styles.content}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", backgroundColor: "#3995d2", minHeight: "40px" }}>
          <ArrowBackIcon style={{ fontSize: "35px", color: "#fff", cursor: "pointer", margin: '2px' }} onClick={this.goToHomePage} />

          {this.renderRedirect()}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={styles.search}>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <TextField autoComplete="off" onChange={(event) => {
              this.changeTextHandler('search', event)
            }} value={this.state.search} style={styles.inputField} id="outlined-basic" label="Search by Client Name" variant="outlined" />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: "700px", overflowY: 'auto' }}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={styles.search}>

          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Client Name</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(el => {
                return (
                  <tr onClick={() => this.props.clickeOnSales(el)} style={{ cursor: "pointer" }}>
                    <td>{el.amount}</td>
                    <td>{moment(el.saleDate).format('YYYY-MM-DD')}</td>
                    <td>{el.client}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default SalesList

const styles = {
  content: {
    height: "700px",
    backgroundColor: "#fff",
    marginTop: "15px",

  }, avatar: {
    height: "150px",
    width: "150px"
  },
  inputField: {
    width: "100%"
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "15px"
  }
}