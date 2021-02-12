import React from 'react';
import itemService from '../service/ItemService';
import {Link} from 'react-router-dom';

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            errMsg: null
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        itemService.getAll().then(
            (response) => {
                this.setState({ items: response.data });
            },
            (err) => {
                console.log(err);
                this.setState({ errMsg: "Sorry, Could not serve the request, please try later" });
            }
        );
    }

    delete = (id) => {
        if (window.confirm(`Are you sure to delte item#${id}`)) {
            itemService.remove(id).then(
                (response) => {
                    this.loadData();
                },
                (err) => {
                    console.log(err);
                    this.setState({ errMsg: "Sorry, Could not serve the request, please try later" });
                }
            );
        }
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
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.state.items.map(
                            (item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/edit/${item.id}`} className="btn btn-sm btn-primary mr-2">
                                            <i className="fa fa-pencil" /> Edit
                                        </Link>
                                        <button className="btn btn-sm btn-danger"
                                            onClick={event => { this.delete(item.id); }}>
                                            <i className="fa fa-trash" /> Delete
                                    </button>
                                    </td>
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