import React from "react";

const PageLayout = ({ title, children }) => (
    <section className="content-page">
        <div className="content-page__inner">
            <h1>{title}</h1>
            {children}
        </div>
    </section>
);

export default PageLayout;
