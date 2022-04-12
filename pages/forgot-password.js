import AppLayout from "@components/layout/AppLayout";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const FortgotPasswordPage = () => {
	const [type, setType] = useState("text");
	const toggleType = () => {
		if (type === "text") {
			setType("password");
		} else {
			setType("text");
		}
	};

	return (
		<div className="forgot-password">
			<div className="container">
				<h1 className="heading">
					Forgot <span className="focus">Password</span>
				</h1>
				<p className="body-text">
					Please enter your <strong>email address </strong>or{" "}
					<strong>phone number</strong> to reset your password
				</p>
				<form className="forgot-password-form">
					<div className="form-field">
						<label htmlFor="name">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="yourusername@example.com"
						/>
					</div>

					<button type="submit">SEND</button>
				</form>
			</div>
		</div>
	);
};

FortgotPasswordPage.layout = AppLayout;
FortgotPasswordPage.title = "Forgot Password";

export default FortgotPasswordPage;
