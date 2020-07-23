import React from 'react';

class Sublist extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td style={{ cursor: "pointer" }} onClick={() => window.open(this.props.item.html_url, "_blank")}>{this.props.item.id}</td>
                <td style={{ cursor: "pointer" }} onClick={() => window.open(this.props.item.html_url, "_blank")}>{this.props.item.full_name}</td>
                <td>{this.props.item.description}</td>
            </tr>
        )
    };
}

export default Sublist;