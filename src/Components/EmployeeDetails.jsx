import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordian from 'react-bootstrap/Accordion';
function EmployeeDetails({EmpArr}) {
    return(<>
        <h1> Employee Accordian Details:</h1>
        {
            EmpArr.map((i)=> (
                <Accordian defaultActivekey="0" key={i.id}>
                    <Accordian.Item eventKey="1">
                        <Accordian.Header>Accordian Iteam {i.id}</Accordian.Header>
                        <Accordian.Body>
                            Employee Details of Employee{i.id}:
                            <ul>
                            <img src={i.image} height="150px" width="25%"/>
                                <li>Emloyee ID:{i.id}</li>
                                <li>Employee Name:{i.name}</li>
                                <li>Employee Address:{i.address}</li>
                            </ul>
                        </Accordian.Body>
                    </Accordian.Item>
                </Accordian>
            ) )
        }
        </>
    )

}

export default EmployeeDetails;