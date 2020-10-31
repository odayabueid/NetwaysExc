import React from 'react';
import SalesData from '../sales.json'
import axios from 'axios'
import moment from 'moment'
import { Redirect } from 'react-router';
import SalesList from './SalesList'
import SalesDetails from './SalesDetails'
class SalesContainer extends React.Component {

    state = {
        salesCard: ''
    }

    clickeOnSales = (item) => {
        this.setState({
            salesCard: item
        })
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ backgroundColor: "#f8f8f8", minHeight: "720px" }}>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <SalesList clickeOnSales={(el) => { this.clickeOnSales(el) }} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <SalesDetails salesCard={this.state.salesCard} />
                </div>
            </div>

        )
    }
}
export default SalesContainer

