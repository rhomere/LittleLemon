import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const OrderOnline = () => (
    <PageLayout title="Order Online">
        <h2>Fresh from our kitchen</h2>
        <p>
            Online ordering is not available just yet. In the meantime, explore
            our <Link to="/menu">menu</Link> or reserve a table and enjoy your
            meal with us.
        </p>
        <Link className="page-button" to="/reservations">Reserve a Table</Link>
    </PageLayout>
);

export default OrderOnline;
