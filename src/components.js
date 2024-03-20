function homeButton() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add("homePage");

    const name = document.createElement('h1');
    name.innerHTML = "Vinum Vault";

    const slogan = document.createElement('h2');
    slogan.innerHTML = "Where Every Sip Unlocks a Story";

    const missionStatement = document.createElement('p');
    missionStatement.innerHTML = `Vinum Vault offers an intimate dining experience nestled amongst an extensive collection of wines from around the globe.<br> The decor reflects old-world charm with modern sophistication, <br>inviting guests to unwind in an atmosphere rich with the aroma of aged wines. <br><br> Our menu pairs exquisitely with our wine selection, enhancing the flavors and the overall dining experience. <br>Inspired by the rich culinary traditions of the Nordic region, <br>our dishes are crafted using locally sourced ingredients,<br> emphasizing simplicity, purity, and seasonality. <br><br> From the rugged landscapes of Norway to the serene fjords of Finland, <br>every aspect of Vinum Vault evokes the essence of the Nordic spirit.<br> Our chefs blend traditional recipes with contemporary techniques to create innovative dishes that pay homage to our heritage. <br><br> Committed to sustainability, Vinum Vault's ethos is deeply rooted in respecting the environment and minimizing waste.<br> This commitment is evident in our kitchen practices, our choice of suppliers, and our curated wine list, featuring organic and biodynamic wines. <br><br> Join us at Vinum Vault for a journey through the flavors of the North, where every meal tells a story, and every sip brings a piece of the Nordic wilderness to your table.`;

    homeContainer.appendChild(name);
    homeContainer.appendChild(slogan);
    homeContainer.appendChild(missionStatement);

    return homeContainer;
}

export {homeButton};

function menuButton() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menuPage");
    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Nordic Delights Menu";
    menuContainer.appendChild(menuTitle);

    // Define Nordic-themed menu items with names and prices
    const menuSections = {
        "Appetizers": [
            {name: "Smoked Salmon on Rye", price: "$12"},
            {name: "Pickled Herring", price: "$10"},
            {name: "Nordic Cheese Platter", price: "$15"}
        ],
        "Entrees": [
            {name: "Pan-Seared Arctic Char", price: "$25"},
            {name: "Venison Meatballs", price: "$22"},
            {name: "Foraged Mushroom Risotto", price: "$18"}
        ],
        "Desserts": [
            {name: "Cloudberry Tart", price: "$10"},
            {name: "Rye Bread Pudding", price: "$9"},
            {name: "Nordic Almond Cake", price: "$11"}
        ],
        "Wines": [
            {name: "Nordic Ice Wine", price: "$14/glass"},
            {name: "Aquavit", price: "$10/glass"},
            {name: "Craft Nordic Ale", price: "$8/glass"}
        ]
    };

    // Dynamically generate menu sections
    Object.entries(menuSections).forEach(([section, items]) => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = section;
        const itemList = document.createElement('div');
        itemList.classList.add("menu-section");
        items.forEach(({name, price}) => {
            const item = document.createElement('div');
            item.classList.add("menu-item");
            item.innerHTML = `<span>${name}</span> <span>${price}</span>`;
            itemList.appendChild(item);
        });
        menuContainer.appendChild(sectionTitle);
        menuContainer.appendChild(itemList);
    });

    return menuContainer;
}


export {menuButton};

function aboutButton() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add("aboutPage");

    const aboutTitle = document.createElement('h1');
    aboutTitle.innerHTML = "About Us";

    const aboutText = document.createElement('p');
    aboutText.innerHTML = `Vinum Vault is a family-owned and operated restaurant and wine bar.<br> Our passion for food and wine is reflected in our menu,<br>  which features locally sourced ingredients and an extensive wine list.<br>  We are committed to providing our guests with an exceptional dining experience,<br>  and we look forward to welcoming you to Vinum Vault.`;

    // Creating a paragraph for fake contact info
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = `Contact us at: <br>
    Email: info@vinumvault.fake <br>
    Phone: +123 456 7890 <br>
    Address: 123 Vine Street, Grapeville, Wine Country`;

    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(contactInfo); // Adding the contact info to the container

    return aboutContainer;
}

export {aboutButton};
