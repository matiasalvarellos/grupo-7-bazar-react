import {useState, useEffect} from "react";
import CardCategory from "./cardCategory";

function Category(){
    let [categories, setCategories] = useState([{name:"Ninguna Categoria"}]);

    useEffect(()=>{
        fetch("http://localhost:3001/api/categories")
        .then(res => res.json())
        .then(data => {
            let array = data.data
            setCategories(array)
        })

    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        { categories.map((category, i) =>
                            <CardCategory key={i} nameCategory={category.name} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category;