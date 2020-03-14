import React from 'react';
export class AddEmployee extends React.Component {
    emptyEmp = {
        eId: '',
        eName: '',
        eSalary: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            empData: this.emptyEmp
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let emp = { ...this.state.empData };
        emp[name] = value;
        this.setState({ empData: emp });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const emp = this.state.empData;
        console.log("emp" + JSON.stringify(emp));
        await fetch('http://localhost:8074/api/employee/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emp),
        });
        this.props.history.push('/list-emp');
    }

    render() {
        return (
            <div className="container pt-5">
                <div classN="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header text-center "><b>ADD EMPLOYEE</b>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>

                                    <div className="Form-group ">
                                        <label for="eName"><b>Employee Name</b></label>
                                        <input type="eName" onChange={this.handleChange} id="eName"
                                            name="eName" />
                                    </div>

                                    <div className="Form-group ">
                                        <label for="eSalary"><b>Employee Salary</b></label>
                                        <input type="eSalary" onChange={this.handleChange} id="eSalary"
                                            name="eSalary" />
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right" >Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

