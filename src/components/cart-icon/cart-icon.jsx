import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shop-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shoping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);