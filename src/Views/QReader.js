import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import '../Styles/QReader.css'

import { Button } from 'antd'

const QReader = () => {
    const [qresult, setQresult] = useState("")

    const handleScan = data => {
        setTimeout(() => {
            if (data) {
                setQresult(data)
            }
        }, 1000)
    }

    const handleError = err => {
        setTimeout(() => console.log(err), 1000)
    }
    return (
        <div className="qr-main-container">
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%', border: 'none' }}
            />
            <p>{qresult}</p>
            <Button style={{position: 'absolute', top: '-20%'}} onClick={() => alert()}>Check</Button>
        </div>
    )
}


export default QReader