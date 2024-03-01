import Search from './Search.jsx'
import Summary from './Summary.jsx'


function Dashboard() {
    return (
        <div className="Dashboard d-flex flex-row flex-grow-1">
            <Search />
            <Summary />
        </div>
    )
}

export default Dashboard