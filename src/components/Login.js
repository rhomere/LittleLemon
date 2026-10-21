import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const Login = () => (
    <PageLayout title="Welcome Back">
        <h2>Little Lemon guests</h2>
        <p>
            Guest accounts are not available yet. You can still explore our{" "}
            <Link to="/menu">menu</Link> and{" "}
            <Link to="/reservations">reserve a table</Link>.
        </p>
    </PageLayout>
);

export default Login;
