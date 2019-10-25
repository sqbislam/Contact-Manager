import React from "react";

//Import Components
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import { Provider } from "react-redux";
import store from "./store";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Header branding="CM" />
					<div className="container p-3">
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route exact path="/contacts/add" component={AddContact} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contacts/edit/:id" component={EditContact} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
