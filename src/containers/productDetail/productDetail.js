// Default imports
import React, {Component} from 'react';
import {connect} from "react-redux";
import './productDetail.scss'

// Custom imports
import {GetProductDetail} from "../../actions/action";

class ProductDetail extends Component {
    // Form Load
    componentDidMount() {
        this.props.GetProductDetail();
    };

    // Render Shipping Info
    renderShippingBadges = (visible, value, id) => {
        if (visible === true) {
            return (
                <div id={id} className='badgeBackground'>
                    <span id={id} className='badgeForeground'>{value}</span>
                </div>
            )
        } else {
            return null;
        }
    };

    // Render Tags
    renderTags = (array) => {
        return array.map((tag) => {
            return (
                <div className='tagBackground'>
                    <span className='tagForeground'>{tag}</span>
                </div>
            )
        })
    };

    renderProductDetails = () => {
        const info = this.props.productDetail;

        if (info) {
            const {product} = info;
            return (
                <div>
                    <img src={product.gallery[0].main} className='image'/>
                    <div className='infoBox'>
                        <div>
                            {this.renderShippingBadges(product.shipping.props.ready_to_ship, 'Ready to Ship', 'ready_to_ship')}
                            {this.renderShippingBadges(product.shipping.props.in_stock, 'In Stock', 'in_stock')}
                            {this.renderShippingBadges(product.shipping.props.fast_dispatch, 'Fast Dispatch', 'fast_dispatch')}
                        </div>

                        <div className='productName'>{product.name} {this.renderTags(product.tags)}</div>

                        <div className='ratingBox'>
                            <div className='ratingCount'>Rating: {product.reviews.rating}</div>
                            <div className='reviews'>{product.reviews.count} Reviews</div>
                            <div className='buyers'>{product.reviews.total_buyers} buyers</div>
                        </div>

                        <div className='priceBox'>
                            <div>
                                <div className='price'>
                                    {product.options.battery_accessories.price.currency.symbol}{product.options.battery_accessories.price.value}
                                    -
                                    {product.options['1080p'].price.currency.symbol}{product.options['1080p'].price.value}
                                </div>
                                /Option | 2 Options (Min.Order)
                            </div>
                            <div className='oldPrice'>
                                {product.options.battery_accessories.old_price.currency.symbol}{product.options.battery_accessories.old_price.value}
                                - {product.options['1080p'].old_price.currency.symbol}{product.options['1080p'].old_price.value}
                            </div>
                        </div>
                        <div className='countDownTimer'>
                            <div className='discountPercentage'>
                                {product.discount.amount} OFF
                            </div>
                            <div className='timer'>
                                Discount ends in
                            </div>
                        </div>
                    </div>
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