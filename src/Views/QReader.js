import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import '../Styles/QReader.css'

class QReader extends Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div className="qr-main-container">
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%', border: 'none' }}
                    
                />
                <p>{this.state.result}</p>
            </div>
        )
    }
}


export default QReader