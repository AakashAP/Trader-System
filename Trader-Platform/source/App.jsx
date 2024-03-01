import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Board from './module/Board.jsx'
import Status from './module/Status.jsx'

function App() {
	const [Page, toPage] = useState('Trade')

	return (
		<div className="App bg-black vw-100 vh-100 d-flex flex-column">
			<Board Page={Page} />
			<Status Update={toPage} />
		</div>
	)
}

export default App