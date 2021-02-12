import React from 'react';
import itemService from '../service/ItemService';
import { Redirect } from 'react-router';

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: 0,
                title: '',
                price: 0
            },
            errMsg: null,
            isSaved: false,
            isEditing: false
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if (id) {
            itemService.getById(id).then(
                (response) => {
                    this.setState({ item: response.data, isEditing: true });
                },
                (err) => {
                    console.log(err);
                    this.setState({ errMsg: `Could not load! please try later!` });
                }
            );
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        let promise = null;

        if (this.state.isEditing) {
            promise = itemService.update(this.state.item, this.state.item.id);
        } else {
            promise = itemService.add(this.state.item);
        }

        promise.then(
            (response) => {
                //this.setState({ items: response.data });
                this.setState({ isSaved: true });
            },
            (err) => {
                console.log(err);
                this.setState({ errMsg: `Could not save! Probably duplicate id` });
            }
        );
    }

    handlechange = (event) => {
        event.preventDefault();
        let item = this.state.item;
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({ item: { ...item, [inputName]: inputValue } });
    }

    render() {
        let item = this.state.item;

        let finalDom = null;

        if (this.state.isSaved) {
            finalDom = <Redirect to="/" />;
        } else {
            finalDom = (
                <section className="container-fluid p-4">

                    <div className="col-sm-4 mx-auto">

                        {
                            this.state.errMsg &&
                            <div className="alert alert-danger p-4">
                                <p>{this.state.errMsg}</p>
                            </div>
                        }

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-control-label">Item Id:</label>
                                <input type="number" value={item.id} className="form-control"
                                    name="id" onChange={this.handlechange}
                                    readonly={this.state.isEditing?'readonly':''} />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Item Title:</label>
                                <input type="text" value={item.title} className="form-control"
                                    name="title" onChange={this.handlechange} />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Price:</label>
                                <input type="number" value={item.price} className="form-control"
                                    name="price" onChange={this.handlechange} />
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

        return finalDom;
    }
}

export default ItemForm;