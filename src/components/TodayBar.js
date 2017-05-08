import React, { PureComponent } from 'react'

import moment from 'moment'

class TodayBar extends PureComponent {

    /**
     * Gets the current date
     * 
     * @return {String} The current date (using momentjs)
     */
    getDate() {
        return moment().format('LLLL')
    }

    /**
     * Gets the time of day (morning, afternoon, evening)
     * 
     * @return {String} The "time of day"
     */
    getDaySection() {
        if (moment().hour() < 12) {
            return "morning"
        } else if (moment().hour() >= 12 && moment().hour() < 18) {
            return "afternoon"
        } else if (moment().hour() >= 18) {
            return "evening"
        }
    }

    render() {
        return (
            <section className="day-overview cyan darken-1">
                <div className="container">
                    <div className="s12 m12">
                        <p style={{
                            lineHeight: "2em",
                            paddingTop: ".5em",
                            paddingBottom: ".5em",
                            textAlign: "center",
                            marginTop: 0
                        }}>
                            <span className="white-text">
                                Good { this.getDaySection() }!
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default TodayBar