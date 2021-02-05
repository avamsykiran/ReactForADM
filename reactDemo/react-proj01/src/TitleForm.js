import React from 'react';

class TitleForm extends React.Component{
    constructor(props)   {
        super(props);

        this.state = {
            title:'Vamsy Kiran'
        };
    }

    handleChange = event => {
        event.preventDefault();
        let changedTitle = event.target.value;
        this.setState({title:changedTitle});
    }

    handleSubmit = event => {
        event.preventDefault();
        alert("Hello "+this.state.title);
    }

    render =() => {
        return (
            <section className="container-fluid p-4">
            <form className="form col-sm-4 mx-auto" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Enter Title:</label>
                    <input type="text" className="form-control" 
                    value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">SEND</button>
                </div>
            </form>
            </section>
        );
    }
}

export default TitleForm;