import React, { Component } from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.charechterData.map((row, index)  => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    })
    return(
        <tbody>{rows}</tbody>
    )
}


class Table extends Component {
    render() {
        const {charechterData} = this.props;

        return (
            <table cellSpacing="0">
                <TableHeader />
                <TableBody charechterData={charechterData}/>
            </table>
        );
    }
}

export default Table;