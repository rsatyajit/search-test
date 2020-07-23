import React from 'react';

class Sublist extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td >{this.props.item.search}</td>
                <td >{this.props.item.totalitems}</td>
                <td>{new Date(this.props.item.created).toLocaleDateString()}</td>
            </tr>
        )
    };
}

export default Sublist;