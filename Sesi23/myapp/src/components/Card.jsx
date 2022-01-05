import cardStyle from './styles/card.module.css'

// const cardStyle = {
//     backgroundColor:'#777', 
//     marginBottom: '1em', 
//     padding: '0.5em 1em',
//     borderRadius:'2em'}


function Card(props) {
    return (
        // <div style={{...cardStyle, fontSize: '0.8em'}}>
        <div className={cardStyle.card}>
            <div>
            <h3>{props.title} </h3>
            by {props.userId}
            </div>
            <div>
            status : {props.completed? 'Completed' : 'Pending'}
            </div>
        </div>
    )
}

export default Card