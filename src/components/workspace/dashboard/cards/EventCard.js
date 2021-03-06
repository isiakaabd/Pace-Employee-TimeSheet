import { Component } from "react";

class EventCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            event: [
                {
                    title: "I will be coming home soon", 
                    eventDate: Date.now()
                },
                {
                    title: "2020 TIIDELab Hackathon",
                    eventDate: "30 Dec 2020"
                },

            ]
        }
    }

    render(){
        const { event } = this.state;
        return(
            <>
                <div className="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                    <div className="flex-grow-1 d-flex align-items-center">
                        <div className="dot mr-3 bg-green"></div>
                        <div className="text">
                            <h6 className="mb-0">{event[0].title}</h6><span className="text-gray">{event[0].eventDate}</span>
                        </div>
                    </div>
                </div>

            </>
        )
    };
};


export default EventCard;