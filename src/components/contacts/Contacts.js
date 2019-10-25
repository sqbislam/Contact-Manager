import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
	//On component Mount get the contacts from props
	componentDidMount() {
		this.props.getContacts();
	}

	render() {
		const { contacts } = this.props;
		return (
			<React.Fragment>
				<h2 className="btn-block text-justify p-5">
					Contact
					<span className="font-weight-bold text-danger"> List</span>
				</h2>

				{contacts.map(contact => (
					<Contact key={contact.id} contact={contact} />
				))}
			</React.Fragment>
		);
	}
}

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.isRequired
};

//Function to map the state to component Props
const mapStateToProps = state => ({
	contacts: state.contact.contacts
});

export default connect(
	mapStateToProps,
	{ getContacts }
)(Contacts);
