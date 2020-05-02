import React from 'react';
import {Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';



const FavoriteActions = (props) => {
    const disable = props.toggleActive ? true : false;
    return (
        <>
            {
                props.getStatus(props.id) ?
                    <Button color="primary" onClick={() => {props.toggle(props.id)}} disabled={disable} size="sm"><FontAwesomeIcon icon={fasStar} /></Button>
                    : <Button outline color="primary"  onClick={() => {props.toggle(props.id)}} disabled={disable} size="sm"><FontAwesomeIcon icon={farStar} /></Button>
            }
        </>
        
    );
};

export default FavoriteActions;