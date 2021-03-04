import React from "react"; 


function CardProduct({description, location, urlProduct}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={location} alt="image dummy" />
            </div>
            <p>{description}</p>
            <a target="_blank" rel="nofollow" href={urlProduct}>
                View product detail
            </a>
        </div>
    )
}

export default CardProduct;