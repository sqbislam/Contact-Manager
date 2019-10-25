import React from "react";

export default function About() {
	return (
		<div>
			<h2>About</h2>
			<br />
			<p className="lead">
				A Simple One Page Application to Keep Track of Contacts.
				<br />
				Implemented using React Framework
				<br />
				Communicates with a fake REST API{" "}
				<a className="text-danger" href="https://jsonplaceholder.typicode.com/">
					JSONPlaceholder
				</a>{" "}
				to perform CRUD operations
			</p>
			<p>Version: v 1.0 &copy; Saqib </p>
			<p className="small"> Special Thanks to Brad Traversy</p>
		</div>
	);
}
