import './card.css';

// const cardStyle = {
//     backgroundColor: '#777', 
//     marginBottom: '1em', 
//     padding: '0.5em 1em', 
//     borderRadius: '2em'
// }

function Card (props) {
    return (
        // <div style = {cardStyle}>
        <div className="card">
       {/* </div> <div style = {{'backgroundColor': '#777', marginBottom: '1em', padding: '0.5em 1em', borderRadius: '2em'}}> */}
            <div>
                <h3>{props.title}</h3>
                by {props.userId}
            </div>
            <div>
                {props.completed ? 'Complete' : 'Pending'}
            </div>
        </div>
    )
}

export default Card