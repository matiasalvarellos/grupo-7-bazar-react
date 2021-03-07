import react from "react";

function CardCategory({nameCategory, quantity}){
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {nameCategory}: {quantity} products
				</div>
                
            </div>
        </div>
    )
}

export default CardCategory;