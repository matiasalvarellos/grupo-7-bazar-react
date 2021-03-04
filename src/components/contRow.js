import React, { useState, useEffect } from "react";
import Etiqueta from "./etiquetaRow" ;

function ContRow(){
    
    let [products, setProducts] = useState("No dispone");
    let [users, setUsers] = useState("Sin usuarios");
    let [orders, setOrders] = useState("No dispone")

    let datos = [
        {
            titulo: "Products in Data Base",
            cifra: products,
            colorBorder: "primary",
            icono: "fa-clipboard-list"
        },
        {
            titulo: "Purchase Orders",
            cifra: orders,
            colorBorder: "success",
            icono: "fa-dollar-sign"
        },
        {
            titulo: "Users quantity",
            cifra: users,
            colorBorder: "warning",
            icono: "fa-user-check"
        }
    ]
    

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then(resultado => resultado.json())
        .then(dataProduct => {
            setProducts(dataProduct.meta.total_products)
        })

        fetch("http://localhost:3001/api/orders")
        .then(resultado => resultado.json())
        .then(dataOrders => {
            setOrders(dataOrders.meta.total_orders)
        })

        fetch("http://localhost:3001/api/users")
        .then(resultado => resultado.json())
        .then(dataUser => {
            
            setUsers(
                dataUser.meta.total_users
            )
        })
    }, [])

    return (
        <>
            <div className="row">
                {datos.map((dato, i) => 
                    <Etiqueta key={i} 
                        titulo={dato.titulo} 
                        cifra={dato.cifra}
                        colorBorder={dato.colorBorder}
                        icono={dato.icono}
                    /> 
                )}
            </div>
        </>    
    )
}



export default ContRow;