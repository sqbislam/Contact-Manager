import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
	state = { showContactInfo: false };

	//Function to toggle Contant info
	onClickShow = e => {
		this.setState({ showContactInfo: !this.state.showContactInfo });
	};

	//Function to delete contact
	onDeleteClick = async id => {
		this.props.deleteContact(id);
	};

	render() {
		const { id, name, email, phone } = this.props.contact;

		const { showContactInfo } = this.state;

		return (
			<div className="card card-body mb-3">
				<h5>
					{name}
					{showContactInfo ? (
						<i
							onClick={this.onClickShow}
							style={{ cursor: "pointer" }}
							className="fas fa-chevron-circle-down ml-3"
						/>
					) : (
						<i
							onClick={this.onClickShow}
							style={{ cursor: "pointer" }}
							className="fas fa-chevron-circle-right ml-3"
						/>
					)}

					<i
						className="fas fa-trash-alt"
						style={{ float: "right", cursor: "pointer", color: "red" }}
						onClick={this.onDeleteClick.bind(this, id)}
					/>

					<Link to={`contacts/edit/${id}`}>
						<i
							className="fas fa-pencil-alt"
							style={{
								float: "right",
								cursor: "pointer",
								color: "gray",
								marginRight: "1rem"
							}}
						/>
					</Link>
				</h5>
				{showContactInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteContact: PropTypes.func.isRequired
};

export default connect(
	null,
	{ deleteContact }
)(Contact);
