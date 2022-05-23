import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


const CardTwo = (props) => {
    return ( 
        <div className="styleSecondCard">
            <FontAwesomeIcon className="styleIcon" icon={props.icon}></FontAwesomeIcon>
            <div className="displaySecondCardText">
            <p className="secondCardText">{props.text}</p>
            <a href="/start" className="startLink">{props.startBtn}</a>
            </div>
        </div>
     );
}
 
export default CardTwo;