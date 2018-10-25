import React, { Component} from 'react';
import roomsList from './rooms.json';

import { Input, Footer, Card, CardBody, CardTitle, } from 'react';
import blankImg from './logo.jpg';


class SearchPage extends Component {


    state = {
        search : ""
    }


    renderRoom = room =>{
        const {search} = this.state;
        var num = room.num.toLowerCase()

        /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/

        return <div className="col-md-3" style={{ marginTop : '20px' }}>
            <Card>
                <CardBody>
                    <p className=""><img src={blankImg} className={ "flag flag-"+num } alt={room.name} /></p>
                    <CardTitle title={room.name}>{room.name.substring(0, 15)}{ room.name.length > 15 && "..."}</CardTitle>
                </CardBody>
            </Card>
        </div>
    }

    onchange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {

        const {search} = this.state;
        const filteredRooms = roomsList.filter( room =>{
            return room.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div className="flyout">
            <main style={{marginTop: '4rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Input label="Search Rooms" icon="search" onChange={this.onchange}/>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        {
                            filteredRooms.map( room =>{
                                return this.renderRoom(room)
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer color="indigo">
                <p className="footer-copyright mb-0">
                &copy; {(new Date().getFullYear())} Copyright
                </p>
            </Footer>
            </div>
        );
    }
}











    //renderRoom = room=>{
      //  const {search} = this.state;
        //var num = room
    //}
    //render() {
      //  return (<div>
        //    This is search page
          //  </div>)
    //}
//}

export default SearchPage;