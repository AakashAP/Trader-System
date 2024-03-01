import Dashboard from './Dashboard/Dashboard.jsx'
import Trade from './Trade/Trade.jsx'


function Board(props) {
    return (
        <div className="Board d-flex flex-grow-1">
            {props.Page == 'Dashboard' && <Dashboard /> }
            {props.Page == 'Trade' && <Trade /> }
        </div>
    )
}

export default Board