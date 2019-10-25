// To maintain DRY code the text inputs in the add contact component is grouped here

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
	//Parameters
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	error
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				className={classnames("form-control form-control-lg", {
					"is-invalid": error
				})}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				errors={error}
			/>
			{error && <div className="text-danger Invalid Feedback">{error}</div>}
		</div>
	);
};

TextInputGroup.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
};
TextInputGroup.defaultProps = {
	type: "text"
};

export default TextInputGroup;
