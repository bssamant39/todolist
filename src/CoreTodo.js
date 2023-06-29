import React from 'react'
import "./Style.css"

const Todo = () => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="images/Todo.png" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add list..."
                            value=""/>
                        <i className="fa fa-plus add-btn" title="Add Item" ></i>
                    </div>

                    <div className="showItems">
                        <div className="eachItem" >
                            <h3></h3>
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn" title="Edit Item" ></i>
                                <i className="far fa-trash-alt add-btn" title="Delete Item" ></i>
                            </div>
                        </div>
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" ><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo

