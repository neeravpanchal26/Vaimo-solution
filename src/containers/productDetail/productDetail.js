// Default imports
import React, {Component} from 'react';
import {connect} from "react-redux";
import './productDetail.scss'

// Custom imports
import {GetProductDetail} from "../../actions/action";
import Timer from '../../components/timer/timer';
import RatingStars from '../../components/ratingStars/ratingStars';
import QuantityButton from '../../components/quantityButton/quantityButton';

class ProductDetail extends Component {
    // Default constructor
    constructor(props) {
        super(props);
        this.state = {sum: 0};
    }

    // Form Load
    componentDidMount() {
        this.props.GetProductDetail();
    };

    // Render Shipping Info
    renderShippingBadges = (visible, value, id, icon) => {
        if (visible === true) {
            return (
                <div id={id} className='badgeBackground text-center'>
                    <span id={id} className='badgeForeground'>
                        <img alt={value} src={icon} className={icon ? 'something' : 'nothing'}/>
                        {value}
                    </span>
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

    // Render Quantity buttons per option
    renderQuantityButtons = (object) => {
        function handleSum(sum) {
            // Set state here
            console.log(sum);
        }

        return Object.keys(object).map(function (keyName, keyIndex) {
            return (
                <QuantityButton
                    option={object[keyName].label}
                    price={object[keyName].price.value}
                    currency={object[keyName].price.currency.symbol}
                    total={(sum) => {
                        handleSum(sum)
                    }}
                />
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
                        <div className='flex'>
                            {this.renderShippingBadges(product.shipping.props.ready_to_ship, 'Ready to Ship', 'ready_to_ship', '')}
                            {this.renderShippingBadges(product.shipping.props.in_stock, 'In Stock', 'in_stock', 'public/2B288867-9DEB-4BA1-B6FB-682E9A5A114B.png')}
                            {this.renderShippingBadges(product.shipping.props.fast_dispatch, 'Fast Dispatch', 'fast_dispatch', 'public/2B288867-9DEB-4BA1-B6FB-682E9A5A114B.png')}
                        </div>

                        <div className='flex'>
                            <div className='productName'>{product.name}</div>
                            <div>{this.renderTags(product.tags)}</div>
                        </div>

                        <div className='ratingBox flex paddingTop_Bottom_7'>
                            <div className='ratingCount flex'>
                                <RatingStars stars={product.reviews.rating}/>&nbsp;{product.reviews.rating}
                            </div>
                            <div className='review'>&nbsp;{product.reviews.count} Reviews</div>
                            <div className='buyers'>&emsp;{product.reviews.total_buyers} buyers</div>
                        </div>

                        <div className='priceBox'>
                            <div className='paddingTop_Bottom_20'>
                                <div className='flex'>
                                    <div className='price'>
                                        {product.options.battery_accessories.price.currency.symbol}{product.options.battery_accessories.price.value}
                                        &nbsp;-&nbsp;
                                        {product.options['1080p'].price.currency.symbol}{product.options['1080p'].price.value}
                                    </div>
                                    <span className='tradeAssuranceText'>&nbsp;&nbsp;/Option | </span>
                                    <span className='twentyOptions'>&nbsp;2 Options</span>
                                    <span className='tradeAssuranceText'>&nbsp;(Min.Order)</span>
                                </div>
                                <div className='oldPrice'>
                                    {product.options.battery_accessories.old_price.currency.symbol}{product.options.battery_accessories.old_price.value}
                                    &nbsp;-&nbsp;
                                    {product.options['1080p'].old_price.currency.symbol}{product.options['1080p'].old_price.value}
                                </div>
                            </div>
                        </div>

                        <div className='paddingTop_Bottom_20 flex'>
                            <div className='discountPercentage'>
                                {product.discount.amount} OFF&nbsp;
                            </div>
                            <div className='discount'>
                                Discount ends in&emsp;
                            </div>
                            <div className='flex'>
                                <img src='public/3026E33B-0F0C-481C-BDEC-FB9A0CFE12D4.png' alt='clock-icon'/>
                                &nbsp;
                                <div className='timer'>
                                    <Timer time={product.discount.end_date}/>
                                </div>
                            </div>
                        </div>

                        <div className='products'>
                            <span className='options'>Options:</span>
                            {this.renderQuantityButtons(product.options)}
                        </div>

                        <div className='tradeAssurance paddingTop_Bottom_7'>
                            <div className='flex'>
                                <img src='public/228E1B06-945F-43B3-9E48-FC5DB82AE615.svg' alt='shield-icon'/>
                                <span className='tradeAssuranceText'>&nbsp;Trade Assurance</span>
                                <span className='protectAli'>&nbsp;protect your Alibaba.com orders</span>
                            </div>
                        </div>

                        <div className='protectAli flex paddingTop_Bottom_7'>
                            Payments:&nbsp;
                            <img src='public/280826B2-7262-474E-A0AF-ACE53F281466.svg' alt='visa'/>
                            <img src='public/icons8-mastercard.svg' alt='master'/>
                            <img src='public/43913126-CE8C-48FB-AEBD-1E93A858523C.svg' alt='applePay'/>
                        </div>

                        <div className='protectAli flex paddingTop_Bottom_7'>
                            <span>Alibaba.com Logistics</span>
                            <span>&emsp;Inspection Solutions</span>
                        </div>
                    </div>

                    <div className='rightSideBar'>
                        <div className='flex'>
                            <div className='cut-text tradeAssuranceText'>
                                Ship to <u>{product.shipping.method.country}<br/> by {product.shipping.method.title}</u>
                            </div>
                            <div
                                className='total'>{product.options['1080p'].price.currency.symbol} {this.state.sum}
                            </div>
                        </div>
                        <div className='tradeAssuranceText paddingTop_Bottom_7'>
                            Lead Time <b>{product.shipping.lead_time.value}</b>&nbsp;
                            <div className='tooltip'>
                                <img src='public/icons8-info.png' alt='clock'/>
                                <span
                                    className='tooltiptext'>{product.shipping.lead_time.info} {product.shipping.lead_time.value}</span>
                            </div>
                        </div>
                        <div className='tradeAssuranceText paddingTop_Bottom_7'>
                            Shipping Time <b>{product.shipping.method.shipping_time.value}</b>&nbsp;
                            <div className='tooltip'>
                                <img src='public/icons8-info.png' alt='clock'/>
                                <span className='tooltiptext'>{product.shipping.method.shipping_time.info}</span>
                            </div>
                        </div>
                        <button className='loginButton'>Login
                            to
                            Purchase
                        </button>
                        <button className='contactButton'>
                            <img src='public/DE463F6E-D57D-4B9C-8F2A-76099E63085D.png' alt='env'/>
                            Contact the supplier
                        </button>
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