import React, {Component, useCallback} from "react";

import Scheduler, {
    ViewTypes,
    DATE_FORMAT
} from "react-big-scheduler";
import "../../css/style.css";
import PropTypes from "prop-types";
import withDragDropContext from "./withDnDContext";
import moment from "moment";
import SchedulerData from '../Schedule/SchedulerData'

import axios from "../../axios-bookings";
import DemoData from "../Data/DemoData";
import {getAllResources} from "../../action/resourcesAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {constants} from "../../constants/redoucers";


class CalendarScheduler extends Component {
    constructor(props){
        super(props);

        let schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes.Day, false, false, {
            headerEnabled: true,
            customCellWidth: 30,
            nonAgendaDayCellHeaderFormat: 'M/D|HH:mm',
            views: [
                {viewName: 'Two days', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false}
            ],
        });
        schedulerData.localeMoment.locale('en');
        schedulerData.setMinuteStep(30);
       // schedulerData.setResources(DemoData.resources);
        //schedulerData.setEvents(DemoData.events);

        this.state = {
            viewModel: [],
            schedulerData: schedulerData,
            events: [],
            token: null,
            resource: null,
            resourceList: []
        }
    }

    componentWillMount() {
        this.props.getAllResources();
    }

    componentDidMount() {
        const body = {
               // grant_type: client_credentials,
                client_id: 'c2cc8510-4e7e-404f-b261-21cf904e0b0c',
                client_secret: '~T6Hgg.2.nXd_iU.R.nSXP.QA_je1U1I0N',
                //TenantID: '4b025103-c272-40bb-bd86-5527e6a9d31b',
               // UserId: '22ed0e24-0cdb-4bf4-83eb-2338b756d774',
                scope: 'https://graph.microsoft.com/.default'
             };
        axios.post('https://login.microsoftonline.com/68b0e49e-93c5-44a3-b62d-836f5fee538f/oauth2/v2.0/token', body)
        .then(response => this.setState({ token: response.data.id }))

        let resourceList = [];
        if (this.state.resource) {
            resourceList = this.state.resource.value.map(({fullname, ...other}, id) =>
                ({id: "r" + id, name: fullname}));
        }
            console.log(resourceList);


            let schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes.Day, false, false, {
                headerEnabled: true,
                customCellWidth: 30,
                nonAgendaDayCellHeaderFormat: 'M/D|HH:mm',
                views: [
                    {viewName: 'Two days', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false}
                ],
            });
            schedulerData.localeMoment.locale('en');
            schedulerData.setMinuteStep(30);
            schedulerData.setResources(DemoData.resou);
            schedulerData.setEvents(DemoData.events);

            this.setState({ schedulerData: schedulerData});


    };

    render() {
       // this.setState({ viewModel: schedulerData});

       const { schedulerData } = this.state;


        return (
            <div>
                <Scheduler
                    schedulerData={schedulerData}
                    prevClick={this.prevClick}
                    nextClick={this.nextClick}
                    onSelectDate={this.onSelectDate}
                    newEvent={this.newEvent}
                    moveEvent={this.moveEvent}
                    updateEventStart={this.updateEventStart}
                    updateEventEnd={this.updateEventEnd}
                    onViewChange={this.onViewChange}
                    onScrollLeft={this.onScrollLeft}
                    onScrollRight={this.onScrollRight}
                />
            </div>
        );
    }

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        if(window.confirm(`Do you want to create a new event? {slotName: ${slotName}, start: ${start}, end: ${end}}`)){
             let newFreshId = 0;
             schedulerData.events.forEach((item) => {
                 if(item.id >= newFreshId)
                     newFreshId = item.id + 1;
             });

             let newEvent = {
                 id: newFreshId,
                 title: '',
                 start: start,
                 end: end,
                 resourceId: slotId,
                 bgColor: 'purple'
             }
             schedulerData.addEvent(newEvent);
             this.setState({
                 schedulerData: schedulerData
             })
             const booking = {
                 id: newFreshId,
                 title: 'New event you just created',
                 start: start,
                 end: end,
                 resourceId: slotId,
                 customer: {
                     name: 'Joey',
                     ic: 'S12345678C',
                     mobile: '98765432',
                 }
             }
             axios.post('/bookings.json', booking)
                 .then(response => console.log(response))
                 .catch(error => console.log("hello"));
         }
    };

    updateEventStart = (schedulerData, event, newStart) => {
        if(window.confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
            schedulerData.updateEventStart(event, newStart);
        }
        this.setState({
            viewModel: schedulerData
        })
    };

    updateEventEnd = (schedulerData, event, newEnd) => {
        if(window.confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
            schedulerData.updateEventEnd(event, newEnd);
        }
        this.setState({
            viewModel: schedulerData
        })
    };

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        if(window.confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
            schedulerData.moveEvent(event, slotId, slotName, start, end);
            this.setState({
                viewModel: schedulerData
            })
        }
    };

    prevClick = schedulerData => {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        });
    };

    nextClick = schedulerData => {
        schedulerData.next();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        });
    };

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        });
    };

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    };

    onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
        if(schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.next();
            schedulerData.setEvents(DemoData.events);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = maxScrollLeft - 10;
        }
    };

    onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
        if(schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.prev();
            schedulerData.setEvents(DemoData.events);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = 10;
        }
    };
}


CalendarScheduler.propTypes = {
    getAllResources: PropTypes.func.isRequired,
    resources: PropTypes.array
};


const mapStateToProps = (state) => ({
    //resources: state.resources.items,
});


const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getAllResources
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(withDragDropContext(CalendarScheduler));
