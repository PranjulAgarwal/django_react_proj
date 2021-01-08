import React, { Component } from 'react';
import Dashboard from './Dashboard';
import NewStudentForm from './NewStudentForm';

export class Pages extends Component {
    state = {
        step: 1
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <NewStudentForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Dashboard
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default Pages;