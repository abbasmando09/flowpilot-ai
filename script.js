 
// GOOGLE APPS SCRIPT URL
const scriptURL = "https://script.google.com/macros/s/AKfycbx9EcMG8tFsLRj7kDsVBAaLyd7e56UJgvSZLcLrp8uh6AXEiKfWLOXG77FGa2h2Y9l1rA/exec";

const dashboardUrl = scriptURL;


// CUSTOMER ENQUIRY FORM
const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const data = {
            fullName: document.getElementById("fullName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            propertyType: document.getElementById("propertyType").value,
            purpose: document.getElementById("purpose").value,
            message: document.getElementById("message").value.trim()
        };

        if (Object.values(data).some(value => !value)) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        formMessage.textContent = "Submitting your enquiry...";

        try {
            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            formMessage.textContent =
                "Your enquiry has been sent. Please verify it in the leads spreadsheet.";

            enquiryForm.reset();

        } catch (error) {
            formMessage.textContent =
                "Unable to send your enquiry. Please try again.";

            console.error(error);
        }
    });
}


// LIVE DASHBOARD
window.handleDashboardStats = function(stats) {
    const total = document.getElementById("totalEnquiries");
    const newCount = document.getElementById("newLeads");
  const hotCount = document.getElementById("hotLeads");
const warmCount = document.getElementById("warmLeads");
const coldCount = document.getElementById("coldLeads");

    if (total) {
        total.textContent = stats.totalEnquiries;
    }

    if (newCount) {
        newCount.textContent = stats.newLeads;
    }
if (hotCount) {
    hotCount.textContent = stats.hotLeads;
}

if (warmCount) {
    warmCount.textContent = stats.warmLeads;
}

if (coldCount) {
    coldCount.textContent = stats.coldLeads;
}
    console.log("Dashboard statistics loaded:", stats);
};


function loadDashboardStats() {
    const script = document.createElement("script");

    script.id = "dashboardDataScript";

    script.src = dashboardUrl +
        "?callback=handleDashboardStats&test=" + Date.now();

    script.onerror = function() {
        console.error("Unable to load dashboard statistics.");
    };

    document.body.appendChild(script);
}


// START DASHBOARD
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadDashboardStats);
} else {
    loadDashboardStats();
}

// FLOWPILOT AI PROPERTY SEARCH

document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("propertySearchButton");

    searchButton.addEventListener("click", function () {

        const location = document.getElementById("searchLocation").value.toLowerCase().trim();
        const type = document.getElementById("searchType").value.toLowerCase();
        const purpose = document.getElementById("searchPurpose").value.toLowerCase();

        const properties = document.querySelectorAll(".property-card");

        let resultsFound = 0;

        properties.forEach(function (property) {

            const propertyText = property.innerText.toLowerCase();

            const locationMatch = !location || propertyText.includes(location);

            const typeMatch = !type || propertyText.includes(type);

            const purposeMatch = !purpose ||
                property.querySelector(".property-type").innerText.toLowerCase().includes(
                    purpose === "sale" ? "for sale" : "for rent"
                );

            if (locationMatch && typeMatch && purposeMatch) {
                property.style.display = "";
                resultsFound++;
            } else {
                property.style.display = "none";
            }

        });

        if (resultsFound === 0) {
            alert("No matching properties found. Please try different search options.");
        }

        document.getElementById("properties").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// SHOW ALL PROPERTIES

document.addEventListener("DOMContentLoaded", function () {

    const showAllButton = document.getElementById("showAllProperties");

    showAllButton.addEventListener("click", function () {

        const properties = document.querySelectorAll(".property-card");

        properties.forEach(function (property) {
            property.style.display = "";
        });

        document.getElementById("searchLocation").value = "";
        document.getElementById("searchType").value = "";
        document.getElementById("searchPurpose").value = "";

        document.getElementById("properties").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// FLOWPILOT AI PROPERTY DETAILS

const propertyDetails = [
    {
        title: "Modern Luxury House",
        location: "Islamabad, Pakistan",
        price: "$250,000",
        description: "A modern luxury house with comfortable living spaces and contemporary design.",
        bedrooms: "4 Bedrooms | 3 Bathrooms"
    },
    {
        title: "Luxury City Apartment",
        location: "Dubai, UAE",
        price: "$2,000 / month",
        description: "A stylish city apartment designed for comfortable urban living.",
        bedrooms: "2 Bedrooms | 2 Bathrooms"
    },
    {
        title: "Contemporary Family Home",
        location: "London, UK",
        price: "$450,000",
        description: "A spacious contemporary family home with modern features.",
        bedrooms: "5 Bedrooms | 4 Bathrooms"
    }
];

function showPropertyDetails(index) {
    const property = propertyDetails[index];

    if (!property) return;

    document.getElementById("detailTitle").textContent = property.title;
    document.getElementById("detailLocation").textContent = property.location;
    document.getElementById("detailPrice").textContent = property.price;
    document.getElementById("detailDescription").textContent = property.description;
    document.getElementById("detailBedrooms").textContent = property.bedrooms;

    document.getElementById("propertyDetailsModal").style.display = "flex";
}

function closePropertyDetails() {
    document.getElementById("propertyDetailsModal").style.display = "none";
}





