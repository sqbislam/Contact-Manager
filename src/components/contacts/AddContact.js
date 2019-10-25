import React, { Component } from "react";

import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { addContact } from "../../actions/contactActions";
import PropTypes from "prop-types";

class AddContact extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		errors: {}
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const { name, email, phone } = this.state;
		const newContact = {
			name,
			email,
			phone
		};

		if (name === "") {
			this.setState({ errors: { name: "Name is required" } });
			console.log(this.state.errors);
			return;
		}

		if (email === "") {
			this.setState({ errors: { email: "Email is required" } });
			console.log(this.state.errors);
			return;
		}

		if (phone === "") {
			this.setState({ errors: { phone: "Phone is required" } });
			console.log(this.state.errors);
			return;
		}

		//If all checks pass then add the contact calling reducer func
		this.props.addContact(newContact);

		//Clear State and redirect
		this.setState({
			name: "",
			email: "",
			phone: "",
			errors: {}
		});
		this.props.history.push("/");
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div className="card mb-3">
				<h5 className="mx-auto p-3">Add Contact</h5>

				<div className="card-body">
					{/* Form for adding new Contact */}
					<form onSubmit={this.onSubmit}>
						<TextInputGroup
							label="Name"
							type="text"
							name="name"
							placeholder="Enter Name..."
							value={name}
							onChange={this.onChange}
							error={errors.name}
						/>

						<TextInputGroup
							label="Email"
							type="email"
							name="email"
							placeholder="Enter Email..."
							value={email}
							onChange={this.onChange}
							error={errors.email}
						/>

						<TextInputGroup
							label="Phone"
							type="text"
							name="phone"
							placeholder="Enter Phone..."
							value={phone}
							onChange={this.onChange}
							error={errors.phone}
						/>

						<input
							type="submit"
							value="Add Contact"
							className="btn btn-block btn-danger p-2"
						/>
					</form>
				</div>
			</div>
		);
	}
}

AddContact.propTypes = {
	addContact: PropTypes.func.isRequired
};
export default connect(
	null,
	{ addContact }
)(AddContact);
