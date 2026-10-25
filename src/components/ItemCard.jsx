function ItemCard({
    imgLink = "https://placehold.co/250/EEE/31343C?font=poppins&text=No Image Available :(",
    itemTitle = "Project Title",
    itemDescription = "Project Description",
    viewItemName = "Item",
    isOpenSource = true,
    projectLink = "/",
}) {
    return (
        <div className="card">
            <img src={imgLink} alt={itemTitle} className="card-img-top" />
            <div className="card-body">
                <div className="card-title fw-bold">{itemTitle}</div>
                <small className="card-text">{itemDescription}</small>
                {viewItemName == "Project" ? (
                    <div className="badge-container mt-2">
                        <span
                            className={`badge bg-${isOpenSource ? "success" : "secondary"}`}
                        >
                            {isOpenSource ? "Open Source" : "Closed Source"}
                        </span>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="card-footer">
                {isOpenSource ? (
                    <a
                        href={projectLink}
                        target="_blank"
                        className="btn btn-outline-warning w-100"
                        disabled={!isOpenSource}
                    >
                        View {viewItemName}
                    </a>
                ) : (
                    <button
                        href={projectLink}
                        className="btn btn-outline-warning w-100"
                        disabled={!isOpenSource}
                    >
                        View {viewItemName}
                    </button>
                )}
            </div>
        </div>
    );
}

export default ItemCard;
