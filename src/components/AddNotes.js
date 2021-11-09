import {GrAddCircle} from 'react-icons/gr'
import { IconContext } from "react-icons";
import { useState } from 'react';

const AddNotes = ({click}) => {

   return (
        <div>
            <div className="add-container">
                <GrAddCircle className="add-notes" onClick={click}/>
            </div>
            
        </div>
    )
}

export default AddNotes
