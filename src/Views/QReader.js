import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import '../Styles/QReader.css'

const QReader = () => {
    const [qresult, setQresult] = useState("")

    const handleScan = data => {
        if (data) {
            setQresult(data)
        }
    }

    const handleError = err => {
        console.error(err)
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
        </div>
    )
}


export default QReader