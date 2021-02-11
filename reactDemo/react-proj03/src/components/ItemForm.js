import React from 'react';
import itemService from '../service/ItemService';

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: 0,
                title: '',
                price: 0
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        //code to add item
    }

    render() {
        let item = this.state.item;
        return (
            <section className="container-fluid p-4">
                <div className="col-sm-4 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="form-control-label">Item Id:</label>
                            <input type="number" value={item.id} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Item Title:</label>
                            <input type="text" value={item.title} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Price:</label>
                            <input type="number" value={item.price} className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">
                                Save Item
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default ItemForm;