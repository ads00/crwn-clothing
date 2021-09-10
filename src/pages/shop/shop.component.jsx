import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                <h1>SHOP</h1>
                {
                  this.state.collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview id={id} {...otherCollectionProps} />
                  ))
                }
            </div>
        )
    }
}

export default ShopPage
