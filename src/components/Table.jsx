import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import SWContext from "../context/SWContext";
import "../styles/Table.css";

function TableFunction() {
    const { setStarWarsState, table, loading } = useContext(SWContext);
    useEffect(() => {
        setStarWarsState();
    }, []);

    return (

        <Table
            variant="dark"
            className="table-responsive"
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rotation Period</th>
                    <th>Orbital Period</th>
                    <th>Diameter</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    <th>Terrain</th>
                    <th>Surface Water</th>
                    <th>Population</th>
                    <th>Films</th>
                    <th>Created</th>
                    <th>Edited</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                { !loading && table.map((element, i) => {
                    const { name } = element;
                    const { rotation_period: rotationPeriod } = element;
                    const { orbital_period: obitalPeriod } = element;
                    const { diameter } = element;
                    const { climate } = element;
                    const { gravity } = element;
                    const { terrain } = element;
                    const { surface_water: surfaceWater } = element;
                    const { population } = element;
                    const { films } = element;
                    const { created } = element;
                    const { edited } = element;
                    const { url } = element;
                    return (
                        <tr key={ i }>
                            <td>{ name }</td>
                            <td>{ rotationPeriod }</td>
                            <td>{ obitalPeriod }</td>
                            <td>{ diameter }</td>
                            <td>{ climate }</td>
                            <td>{ gravity }</td>
                            <td>{ terrain }</td>
                            <td>{ surfaceWater }</td>
                            <td>{ population }</td>
                            <td>{ films }</td>
                            <td>{ created }</td>
                            <td>{ edited }</td>
                            <td>{ url }</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>

    );
}

export default TableFunction;
