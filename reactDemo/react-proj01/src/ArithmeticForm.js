import React from 'react';

class ArithmeticForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arthModel: {
                operand1: 0,
                operand2: 0,
                operation: "ADD"
            },
            arthResult: {
                result: 0
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();

        let arthModel = this.state.arthModel;

        let fieldName = event.target.name;
        let fieldVal = event.target.value;

        this.setState({arthModel:{ ...arthModel,[fieldName]:fieldVal }});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let result = 0;

        let op1=parseInt(this.state.arthModel.operand1);
        let op2=parseInt(this.state.arthModel.operand2);

        switch (this.state.arthModel.operation) {
            case "ADD":
                result = op1 + op2;
                break;
            case "SUBSTRACT":
                result = op1 - op2;
                break;
            case "MULTIPLY":
                result = op1 * op2;
                break;
            case "DIVIDE":
                result = op1 / op2;
                break;
            case "MODULO":
                result = op1 % op2;
                break;
            default:
                result=0;
                break;
        }

        this.setState({arthResult:{result:result}});
    }

    render = () => {
        return (
            <section className="container-fluid p-4">
                <form className="form col-sm-4 mx-auto" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">
                            Operand1
                        </label>
                        <input type="number" className="form-control"
                            value={this.state.arthModel.operand1}
                            name="operand1"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Operand2
                        </label>
                        <input type="number" className="form-control"
                            value={this.state.arthModel.operand2}
                            name="operand2"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Operation
                        </label>
                        <select className="form-control"
                            value={this.state.arthModel.operation}
                            name="operation"
                            onChange={this.handleChange} >
                            <option value="">----SELECT----</option>
                            <option value="ADD">Sum</option>
                            <option value="SUBSTRACT">Difference</option>
                            <option value="MULTIPLY">Product</option>
                            <option value="DIVIDE">Quitiont</option>
                            <option value="MODULO">Reminder</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary btn-block">
                            DO IT
                        </button>
                    </div>
                </form>

                <div className="card mt-2 col-sm-4 mx-auto p-4 bg-primary">
                    <div className="card-text text-center">
                        The result is {this.state.arthResult.result}
                    </div>
                </div>
            </section>
        );
    }
}

export default ArithmeticForm;