import { useState } from "react"
import Header from './Header.jsx'
import Candle from './Candle.jsx'
import Transaction from './Transaction.jsx'


function Trade() {
    const [Visible, toVisible] = useState(true)
    const Toggle = () => { toVisible(prev => !prev) }

    return (
        <div className="Trade w-100 d-flex">
            <div className="bg-black d-flex flex-column flex-grow-1">
                <Header Switch={Toggle} />
                <Candle />
            </div>
            {Visible && <Transaction />}
        </div>
    )
}

export default Trade