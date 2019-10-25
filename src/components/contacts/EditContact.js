import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContact, updateContact } from "../../actions/contactActions";

class EditContact extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		errors: {}
	};

	async componentDidMount() {
		const { id } = this.props.match.params;

		this.props.getContact(id);
	}

	componentWillReceiveProps(nextProps, nextState) {
		const { name, email, phone } = nextProps.contact;

		this.setState({
			name,
			email,
			phone
		});
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const { name, email, phone } = this.state;

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

		const { id } = this.props.match.params;

		const updContact = {
			id,
			name,
			email,
			phone
		};

		//POST REQUEST to REST API using Redux
		this.props.updateContact(updContact);

		//Clear state after adding contact
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
				<h5 className="mx-auto p-3">Edit Contact</h5>

				<div className="card-body">
					{/* Form for adding new Contact */}
					<form onSubmit={this.onSubmit.bind(this)}>
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
							value="Update Contact"
							className="btn btn-block btn-danger p-2"
						/>
					</form>
				</div>
			</div>
		);
	}
}

EditContact.propTypes = {
	contact: PropTypes.object.isRequired,
	getContact: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
	contact: state.contact.contact
});

export default connect(
	mapStatetoProps,
	{ getContact, updateContact }
)(EditContact);
