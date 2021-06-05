// Default imports
import React, {Component} from 'react';
import {connect} from "react-redux";
import './productDetail.css'

// Custom imports
import {GetProductDetail} from "../../actions/action";

class ProductDetail extends Component {
    // Form Load
    componentDidMount() {
        this.props.GetProductDetail();
    }

    // Render Shipping Info
    renderShippingDiv = (visible, value) => {
        if (visible === true) {
            return (
                <div>{value}</div>
            )
        } else {
            return null;
        }
    }

    // Render Tags
    renderTags = (array) => {
        return array.map((tag) => {
            return (
                <div>{tag}</div>
            )
        })
    }

    renderProductDetails = () => {
        const info = this.props.productDetail;

        if (info) {
            const {product} = info;
            return (
                <div>
                    <img src={product.gallery[0].main} className='image'/>
                    <div>
                        {this.renderShippingDiv(product.shipping.props.ready_to_ship, 'Ready to Ship')}
                        {this.renderShippingDiv(product.shipping.props.in_stock, 'In Stock')}
                        {this.renderShippingDiv(product.shipping.props.fast_dispatch, 'Fast Dispatch')}
                    </div>
                    {product.name}
                    {this.renderTags(product.tags)}
                    <hr/>
                </div>
            )
        }
    };

    render() {
        return (
            <div>
                {this.renderProductDetails()}
            </div>
        )
    }
}


// State management
const mapStateToProps = (state) => {
    return state;
};

// Default export
export default connect(mapStateToProps, {GetProductDetail})(ProductDetail);