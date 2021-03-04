import React from "react";
import PropTypes from "prop-types";

function Etiqueta( {titulo, cifra, colorBorder, icono}) {
    let icon ;
    if(icono != null){
       icon = <i className={`fas ${icono} fa-2x text-gray-300`}></i>
    }else{
        icon = "";
    }
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${colorBorder} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${colorBorder} text-uppercase mb-1`}>
                                {titulo}
							</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {cifra}
                            </div>
                        </div>
                        <div className="col-auto">
                            {icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Etiqueta.propTypes = {
    titulo: PropTypes.string.isRequired,
    colorBorder: PropTypes.oneOf(["primary","success","warning"]).isRequired,
    cifra: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    icono: PropTypes.string
}
Etiqueta.defaultProps = {
    titulo: "No tiene texto!",
    colorBorder: "primary",
    cifra: "0",
    icono: null
}

export default Etiqueta;