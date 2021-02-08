import React from "react";
import style from "../recipe.module.css";

function Recipe({ title, calories, image, ingredients }) {
    return (
        <>
        <div className="container"> 
            <div className="row">
                <div className="col-sm"> 
                    <div className={style.recipe}>
                        <h1>{title}</h1>
                        <ol>
                            Ingredients:
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))}
                        </ol>
                        <p>Calories: {calories}</p>
                        <img className={style.image} src={image} alt=""></img>
                    </div>
                </div>    
            </div>
        </div>    


        </>
    )
}
export default Recipe;