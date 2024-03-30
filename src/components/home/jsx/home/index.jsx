import { useState } from "react"

const HomeJSX = ( props ) => {

    const [ price, updatePrice ] = useState("default value")

    const { bitcoin_price } = props
    // console.log( bitcoin_price )

    const fetchBitcoinPrice = async () => {

        const bitcoin_price = await fetch("https://mempool.space/api/v1/prices")
        const bitcoin_price_json = await bitcoin_price.json()
        console.log( bitcoin_price_json )
        updatePrice( bitcoin_price_json.USD )

    }

    return (
        <div className="text-2xl font-light" onClick={ () => fetchBitcoinPrice() }>Bitcoin Price is : { price }</div>
    )

}

export default HomeJSX
