import React from "react";
import "./GodCard.css"

function GodCard(props) {
    return (
        <div className="container">
            <div className="img-container row">
                {props.gods.map(item => (
                    <div key={item.id} className="col-3">
                        <img onClick={() => {
                            props.onClick(item.id)
                        }
                    }className="godimg img-fluid" alt={item.name} src={item.item} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default GodCard;