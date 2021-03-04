import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoTable({name, description, price, subcategory, colors, stock}) {
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                    <ul>
                        <li>{subcategory}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        {colors.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.name} 
                            </span>
                        </li> 
                        )}
                    </ul>
                </td>
                <td>{stock}</td>
            </tr>
        </tbody>
    )
}

InfoTable.propTypes ={
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    subcategory: PropTypes.string.isRequired,
    stock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}
InfoTable.defaultProps = {
    name: "Sin nombre",
    description: "Sin descripción",
    price: "",
    subcategory: "",
    colors:[""]
}


export default InfoTable;