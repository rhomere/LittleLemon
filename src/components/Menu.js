import React from "react";
import PageLayout from "./PageLayout";

const dishes = [
    {
        name: "Greek Salad",
        description: "Crisp greens, ripe tomatoes, cucumber, olives, and feta.",
    },
    {
        name: "Lemon Roast Chicken",
        description: "Herb-roasted chicken with bright lemon and seasonal sides.",
    },
    {
        name: "Baklava",
        description: "Flaky pastry layered with honey and toasted nuts.",
    },
];

const Menu = () => (
    <PageLayout title="Our Menu">
        <p>Discover Mediterranean favorites made with fresh ingredients.</p>
        <div className="menu-list">
            {dishes.map((dish) => (
                <article className="menu-item" key={dish.name}>
                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                </article>
            ))}
        </div>
    </PageLayout>
);

export default Menu;
