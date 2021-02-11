import React from 'react';
import itemService from '../service/ItemService';

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            errMsg: null
        };
    }

    componentDidMount(){
        itemService.getAll().then(
            (response) => {
                this.setState({items:response.data});
            },
            (err) => {
                console.log(err);
                this.setState({errMsg:"Sorry, Could not serve the request, please try later"});
            }
        );
    }

    render() {
        let finalDom = null;

        if (this.state.items) {
            finalDom = (
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>Item#</th>
                        <th>Title</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        {this.state.items.map(
                            (item) =>  (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            );
        } else if (this.state.errMsg) {
            finalDom = (
                <p className="alert alert-danger p-2">
                    <strong>{this.state.errMsg}</strong>
                </p>
            );
        } else { //at the time of data loading...
            finalDom = (
                <p className="alert alert-info p-2">
                    <strong>Please wait while we load data..</strong>
                </p>
            );
        }

        return (<section className="container-fluid p-4">{finalDom}</section>);
    }
}

export default ItemsList;