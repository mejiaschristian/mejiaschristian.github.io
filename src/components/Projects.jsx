import ProjectCard from "./ItemCard";

function Projects() {
    return (
        <div className="projects">
            <div className="section-header mb-3">
                <h2 id="projects">Projects and Contributions</h2>
                <small className="text-muted">
                    A curated collection of full-stack web applications, mobile
                    tools, and utility software built throughout my BSIT studies
                    at National University.
                </small>
            </div>

            <div className="card-container">
                <div className="row g-2">
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                        <ProjectCard
                            imgLink="QuickCart.png"
                            itemTitle="QuickCart"
                            itemDescription="A full-stack online grocery platform built with React, PHP, and MySQL. Features include secure Google authentication, an integrated AI chatbot (Gemini/WebLLM) for customer support, and secure online checkout using the PayRex payment gateway for local e-wallets."
                            viewItemName="Project"
                            isOpenSource={false}
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                        <ProjectCard
                            imgLink="CartManagementApp.png"
                            itemTitle="Cart Management App"
                            itemDescription="A full-stack cart and wishlist management application built with the MERN (MongoDB, Express, React, Node) stack. Designed to help users save and track items from various online stores in one centralized platform, allowing them to easily manage products they want to purchase in the future."
                            viewItemName="Project"
                            isOpenSource={true}
                            projectLink="https://github.com/mejiaschristian/cart-management-app"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                        <ProjectCard
                            imgLink="DailySavingsCalculator.png"
                            itemTitle="Daily Savings Calculator"
                            itemDescription="A lightweight, interactive web utility built with vanilla HTML, CSS, and JavaScript. It helps users easily calculate and visualize user's daily savings goals."
                            viewItemName="Project"
                            isOpenSource={true}
                            projectLink="https://github.com/mejiaschristian/daily-savings-calculator"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                        <ProjectCard
                            imgLink="FreshTrack.png"
                            itemTitle="FreshTrack"
                            itemDescription="A full-stack e-commerce and order management platform for hotel-to-farm transactions, built with PHP and MySQL. Features include shopping cart system, automated recurring orders, inventory management, and integrated billing with QR payment support."
                            viewItemName="Project"
                            isOpenSource={true}
                            projectLink="https://github.com/mejiaschristian/freshtrack"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                        <ProjectCard
                            imgLink="BlueVault.png"
                            itemTitle="NU Blue Vault"
                            itemDescription="A native Android application built with Java and XML that serves as a centralized academic research repository. Features include document uploading, catalog browsing, and a complete role-based management system for students, teachers, and administrators."
                            viewItemName="Project"
                            isOpenSource={true}
                            projectLink="https://github.com/mejiaschristian/blue-vault"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                        <ProjectCard
                            imgLink="NWSBudgetingApp.png"
                            itemTitle="NWS Budgeting App"
                            itemDescription="A Needs, Wants, and Savings budgeting app built with vanilla HTML, CSS, and JavaScript. This app help prioritize needs and wants based on user's budget."
                            viewItemName="Project"
                            isOpenSource={true}
                            projectLink="https://github.com/mejiaschristian/nwsbudgetingapp"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
