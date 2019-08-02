import React from 'react'
import PropTypes from 'prop-types'


function Listing(props) {

  const domItems = props.items.map(item => {
    let price,
        levelClass;
    if (item.currency_code === 'USD') {
      price = '$' + item.price;
    } else if (item.currency_code === 'EUR') {
      price = '€' + item.price;
    } else {
      price = item.price + ' ' + item.currency_code;
    }
    
    if (item.quantity <= 10) {
      levelClass = "item-quantity level-low";
    } else if (item.quantity > 10 && item.quantity <= 20) {
      levelClass = "item-quantity level-medium";
    } else {
      levelClass = "item-quantity level-hight";
    }

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN}></img>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title.length > 50 ? item.title.substr(0, 50) + "..." : item.title}</p>
          <p className="item-price">{price}</p>
          <p className={levelClass}>{item.quantity} left</p>
        </div>
      </div>
    )
  })

  return (
    <div className="item-list">
      {domItems}
    </div>
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Listing

