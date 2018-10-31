import React, {component} from 'react';
import Checkbox from './Checkbox';
import Select from './Select';
import SingleInput from './SingleInput';

class CreateRoom extends React {

    constructor(props) {
        super(props);
        this.state = {
            roomname:'',
            roomnumber:'',
            facilitiesSelection:'',
            location:''
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
            if(this.state.facilitiesSelection.indexOf(newSelection) > -1) {
                newSelectionArray = this.state.facilitiesSelection.filter(s => s !== newSelection) 
            }
            else {
                newSelectionArray = [...this.state.selectedPets, newSelection];
            }
            this.setState({facilitiesSelection: newSelectionArray}, () => console.log('facilities', this.state.facilitiesSelection));
            }


        
    
    handleLocationChange(e) {
        this.setState({location: e.target.value}, () => console.log('location', this.state.location));
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            roomname: '',
            roomnumber: 0,
            facilitiesSelection: '',
            location: ''
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
        console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
    }

    render() {

        return(
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <h4>Create Room</h4>
                <SingleInput
                    inputType={'text'}
                    title={'Room name'}
                    name={'name'}
                    content={this.state.roomname}
                    controlFunc={this.handleRoomNameChange}
                    placeholder={'Type the room name here'} />
                <Select
					inputType={'number'}
					name={'RoomNumber'}
					controlFunc={this.handleRoomNumberChange}
					option={this.state.roomnumber}
					placeholder={'Room Number'} />
                <Checkbox
                    title={'Add the Facilities'}
                    setName={'facilities'}
                    type={Checkbox}
                    controlFunc={this.handleFacilitiesSelection}
					options={this.state.facilitiesSelection}
					selectedOptions={this.state.selectedFacilities} />
                <SingleInput
                    inputType={'text'}
                    title={'Type the location'}
                    name={'location'}
                    content={this.state.location}
                    controlFunc={this.handleLocationChange}
                    placeholder={'Type the location here'} />
                    />
                <input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
            </form>
        );
    }


}
export default CreateRoom;

