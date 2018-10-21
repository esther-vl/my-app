import React, { Component } from 'react';
import './style.css';

const HOURS_IN_A_DAY = 24;

const BookingItem = (props) => {
    const { hour, isBooked, onRowClicked, isSelected} = props;
    let time = "12 AM"
    if (hour > 0 && hour <= 12) {
        time = hour + " AM";
    } else if (hour > 12) {
        time = (hour % 12) + " PM"
    }


    let style = "booking-row";
    if (isBooked) {
        style = "booking-row-booked";
    } else if (isSelected) {
        style = "booking-row-selected";
    }

    const onBookingRowClicked = () => {
        if (!isBooked) {
            onRowClicked(hour);
        }
    }

    return (<div className={style} onClick={onBookingRowClicked}>
        {time}
        </div>
    );
}

class BookingContainer extends Component {

    constructor(props) {
        super(props);
        const { slots } = props;
        this.state = {
            slots: slots,
            selectionStart: -1,
        };
        this.initializeBookingLookup(slots);
        this.onRowClicked = this.onRowClicked.bind(this);
    }

    onRowClicked(hour) {
        if (this.state.selectionStart == -1) {
            // Beginning of the selection
            this.setState({selectionStart: hour});
        } else {
            // Ongoing selection
            // Check if its a valid
            let startRange;
            let endRange;
            if (this.state.selectionStart <= hour) {
                startRange = this.state.selectionStart;
                endRange = hour;
            } else {
                startRange = hour;
                endRange = this.state.selectionStart;
            }

            for (let i = startRange; i <= endRange; i++) {
                if (this.bookingLookup.get(i)) {
                    alert('Invalid range. Please select again.')
                    this.setState({
                        selectionStart: -1,
                    });
                    return;
                }
            }

            const newSlot = {
                startTime: startRange,
                endTime: endRange + 1,
            }

            // Make server call to create the slot in the database.

            // const newSlots = this.state.slots.concat([newSlot]);
            const newSlots = [...this.state.slots, newSlot];
            this.initializeBookingLookup(newSlots);

            this.setState({
                slots: newSlots,
                selectionStart: -1,
            });
        }
    }

    initializeBookingLookup(slots) {
        this.bookingLookup = new Map();
        for (const slot of slots) {
            const { startTime, endTime } = slot;
            for (let i = startTime; i < endTime; i += 1) {
                this.bookingLookup.set(i, true);
            }
        }
    }
    
    render() {
        const rows = [];
        for (let i = 0; i < HOURS_IN_A_DAY; i++) {
            rows.push(
            <BookingItem
                hour={i}
                isBooked={this.bookingLookup.get(i)}
                onRowClicked={this.onRowClicked}
                isSelected={this.state.selectionStart==i}
            />)
        }
        return (
            <div className="booking-container">
                <h2>Bookings</h2>
                {rows}
            </div>
        )
    }
}

export default BookingContainer;