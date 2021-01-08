import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStudentModal from './NewStudentModal'
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class StudentList extends Component {
    render() {
        const students = this.props.students;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th align="center">Name</th>
                        <th align="center">Roll Number</th>
                        <th align="center">Maths</th>
                        <th align="center">Physics</th>
                        <th align="center">Chemistry</th>
                        <th align="center">Total</th>
                        <th align="center">Percentage</th>
                        <th align="center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!students || students.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Oops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                            students.map(student => (
                                <tr key={student.pk}>
                                    <td>{student.name}</td>
                                    <td>{student.rollno}</td>
                                    <td>{student.maths}</td>
                                    <td>{student.phys}</td>
                                    <td>{student.chem}</td>
                                    <td>{student.total}/300</td>
                                    <td>{student.perc}%</td>
                                    <td>
                                        <NewStudentModal
                                            create={false}
                                            student={student}
                                            resetState={this.props.resetState}
                                        />
                                        &nbsp;&nbsp;
                                        <ConfirmRemovalModal
                                            pk={student.pk}
                                            resetState={this.props.resetState}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                </tbody>
            </Table>
        );
    }
}

export default StudentList;