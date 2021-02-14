import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './main.scss';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/signin" exact component={Signin} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
