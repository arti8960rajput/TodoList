import React from'react';
import './ListItems.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';


function ListItems(props){
    const items =props.items;
    const listItems=items.map((item, i) =>
        {
            console.log(item);
            return (<Draggable draggableId = {"draggable-"+item.key} index = {i}>
                {(provided) => (
                    <div className="list" key={item.key} ref = {provided.innerRef}
                    {...provided.draggableProps} {...provided.dragHandleProps} index = {i}>
                    <p>
                    <input type="checkbox" 
                        id = {item.key}
                        checked = {!item.isChecked}
                        onChange = {
                            (e) => {
                                props.handleCheckboxChange(!item.isChecked,item.key)
                            }
                        }
                    />
                    <input type="text" 
                    id={item.key} 
                    value={item.text}
                    onChange ={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }/>
                <span>
                    <FontAwesomeIcon className="faicons"
                    icon='trash'
                    onClick={ () => props.deleteItem(item.key)
                    }/>
                </span>
                </p>
        
            </div>
                )}
            </Draggable>)
        })
        return(
            <DragDropContext onDragEnd = {props.onDragEnd}>
                <Droppable droppableId = "droppable-1">
                    {(provided) => (
                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                            {listItems}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
}
export default ListItems;