import React from "react";

class UserDetails extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.details.map((d, index) => (<li key={index}>{d.name} - {d.email}</li>))
                }
            </ul>
        )
    }
}

export default UserDetails;