import React, { PureComponent } from 'react'

class NoSites extends PureComponent {
    render() {
        return (
            <div className="s12 m12">
                <div className="card" style={{ backgroundColor: this.props.color }}>
                    <div className="card-content white-text">
                        <span className="card-title center"
                              style={{
                                  display: 'block'
                              }}>Welcome to reactStartPage<sup>4</sup></span>
                        <p className="center">Click 'Add/Remove' in the top-left to get started!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoSites