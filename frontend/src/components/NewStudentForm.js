import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";



class NewStudentForm extends React.Component {

    state = {
        pk: 0,
        name: "",
        rollno: "",
        maths: "0",
        phys: "0",
        chem: "0",
        total: "0",
        perc: "0"
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk, name, rollno, maths, phys, chem, total, perc } = this.props.student;
            this.setState({ pk, name, rollno, maths, phys, chem, total, perc });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => this.MarksChange());
    };

    MarksChange() {
        const { maths, phys, chem } = this.state;
        const total = parseFloat(maths) + parseFloat(phys) + parseFloat(chem)
        const perc = ((parseFloat(maths) + parseFloat(phys) + parseFloat(chem)) / 3).toFixed(2)
        this.setState({ total, perc })
    }

    createStudent = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editStudent = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };


    render() {
        return (
            <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        required="true"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="rollno">Roll No:</Label>
                    <Input
                        type="text"
                        required="true"
                        name="rollno"
                        placeholder="Roll Number"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.rollno)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="maths">Marks in Maths:</Label>
                    <Input
                        type="number"
                        name="maths"
                        required="true"
                        min="0"
                        max="100"
                        placeholder="Marks in Maths (0-100)"
                        value={this.defaultIfEmpty(this.state.maths)}
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phys">Marks in Physics:</Label>
                    <Input
                        type="number"
                        name="phys"
                        required="true"
                        min="0"
                        max="100"
                        placeholder="Marks in Physics (0-100)"
                        value={this.defaultIfEmpty(this.state.phys)}
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="chem">Marks in Chemistry:</Label>
                    <Input
                        type="number"
                        name="chem"
                        required="true"
                        min="0"
                        max="100"
                        placeholder="Marks in Chemistry (0-100)"
                        value={this.defaultIfEmpty(this.state.chem)}
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Total = {this.state.total}/300</legend> <legend>Percentage = {this.state.perc}%</legend>
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewStudentForm;