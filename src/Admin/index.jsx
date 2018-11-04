import React, {Component} from 'react';
import Checkbox from '../common/Checkbox';
import SingleInput from '../common/SingleInput';


class CreateRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roomname:'',
            roomnumber:'',
            facilitiesSelection:[],
            location:'',
            selectedFacilities:[],
        };
       
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleFacilitiesSelection = this.handleFacilitiesSelection.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
        this.handleRoomNumberChange = this.handleRoomNumberChange.bind(this);
    }

    componentDidMount(){
        fetch('./dummy.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    roomname : data.roomname,
                    roomnumber : data.roomnumber,
                    facilitiesSelection : data.facilitiesSelection,
                    location : data.location
                });
            });

    }

    handleRoomNameChange(e) {
        this.setState({roomname: e.target.value}, () => console.log('name:', this.state.roomname));
    }

    handleRoomNumberChange(e) {
        this.setState({roomnumber: e.target.value}, () => console.log('RoomNumber', this.state.roomnumber));
    }
    handleFacilitiesSelection(e) {
            const newSelection = e.target.value;
            let newSelectionArray;
            if(this.state.selectedFacilities.indexOf(newSelection) > -1) {
                newSelectionArray = this.state.selectedFacilities.filter(s => s !== newSelection) 
            }
            else {
                newSelectionArray = [...this.state.selectedFacilities, newSelection];
            }
            this.setState({selectedFacilities: newSelectionArray}, () => console.log('facilities', this.state.selectedFacilities));
            }


        
    
    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            roomname: '',
            roomnumber: 0,
            selectedFacilities: [],
            location: '',
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const formPayload = {
            roomname: this.state.roomname,
            roomnumber: this.state.roomnumber,
            facilitiesSelection: this.state.facilitiesSelection,
            location: this.state.location
        };
        // fetch('http://localhost:9000/api/room/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formPayload)
        // }).then(res => res.json())
        // .then(data => console.log(data));
		this.handleClearForm(e);
    }

    render() {

        return(
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <h4>Create Room</h4>
                <table>
                    <tr>
                        <td>
                            <label>Room Name</label>
                        </td>
                        <td>
                        <SingleInput
                            inputType={'text'}
                            name={'name'}
                            content={this.state.roomname}
                            controlFunc={this.handleRoomNameChange}
                            placeholder={'Type the room name here'} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Room Number</label>
                        </td>
                        <td>
                <SingleInput
					inputType={'number'}
                    name={'Room Number'}
                    content={this.state.roomnumber}
					controlFunc={this.handleRoomNumberChange}
					placeholder={'Room Number'} />
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Add the facilities</label>
                        </td>
                        <td>
                <Checkbox
                    setName={'facilities'}
                    type='checkbox'
                    controlFunc={this.handleFacilitiesSelection}
					options={this.state.facilitiesSelection}
					selectedOptions={this.state.selectedFacilities} />
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Location</label>
                        </td>
                        <td>

                <SingleInput
                    inputType={'text'}
                    name={'location'}
                    content={this.state.location}
                    controlFunc={this.handleLocationChange}
                    placeholder={'Type the location here'} />
                    </td>
                    </tr>
                    </table>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
        <input
					type="submit"
					className="btn btn-primary float-left"
					value="Submit"/>
            </form>
        );
    }


}
export default CreateRoom;
