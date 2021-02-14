import { Helmet } from 'react-helmet';
import BgImage from './BgImage';

const Signup = () => {
	return (
		<>
			<Helmet>
				<title>User Sign Up</title>
				<meta name="description" content="User Sign Up Form" />
			</Helmet>
			<div className="row mt-80">
				<div className="col-8">
					<BgImage />
				</div>
				<div className="col-4">
					<div className="account">
						<div className="account__section">
							<form>
								<div className="group">
									<h3 className="form-heading">Sign Up</h3>
								</div>
								<div className="group">
									<input type="text" name="" className="group__control" placeholder="Enter Name" />
								</div>
								<div className="group">
									<input type="email" name="" className="group__control" placeholder="Enter Email" />
								</div>
								<div className="group">
									<input type="password" name="" className="group__control" placeholder="Enter Password" />
								</div>
								<div className="group">
									<input type="submit" className="btn btn-default btn-block" value="Sign Up" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
