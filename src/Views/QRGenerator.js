import React, {useState, useEffect, useContext} from 'react' 
import QRCode from 'qrcode.react'
import {Button, Input} from 'antd'

const QRGenerator = () => {

    const main = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const qrgen_style = {
        background: 'white',
        padding: '1em'
    }

    const [inputValue, setInputValue] = useState('')
    const [qrValue, setQrValue] = useState('main')



    return (
        <div style={main}>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1em'}}>
                <Input onChange={e => setInputValue(e.target.value)} />
                <Button onClick={() => setQrValue(inputValue)}> Generate </Button>
            </div>
            <div style={qrgen_style}>
                
                
                <QRCode value={qrValue} size='100' fgColor='#282828' />
            </div>
        </div>
    )
}

export default QRGenerator