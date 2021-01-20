const DemoData = {
    resources: [
        {
            id: 'r0',
            name: 'john@skoda.com',

        },
        {
            id: 'r1',
            name: 'sarah@skoda.com',

        },
        {
            id: 'r2',
            name: 'jimmy@skoda.com',

        },
        {
            id: 'r3',
            name: 'martin@skoda.com',

        },
        {
            id: 'r4',
            name: 'filip@skoda.com',
        },
        {
            id: 'r5',
            name: 'milan@skoda.com',
        },
        {
            id: 'r6',
            name: 'marek@skoda.com',
        },
        {
            id: 'r7',
            name: 'george@skoda.com',
        }
    ],
    resou: [
        {
            id: 'r0',
            name: 'john@skoda.com',

        },
        {
            id: 'r1',
            name: 'sarah@skoda.com',

        },
        {
            id: 'r2',
            name: 'jimmy@skoda.com',

        },
        {
            id: 'r3',
            name: 'martin@skoda.com',

        },
        {
            id: 'r4',
            name: 'filip@skoda.com',
        }
    ],
    events: [
        {
            id: 1,
            start: '2021-01-18 09:30:00',
            end: '2021-01-19 23:30:00',
            resourceId: 'r1',
            title: '',
            bgColor: '#D9D9D9'
        },
        {
            id: 2,
            start: '2021-01-18 12:30:00',
            end: '2021-01-26 23:30:00',
            resourceId: 'r2',
            title: '',
            resizable: false
        },
        {
            id: 3,
            start: '2021-01-19 12:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r3',
            title: ''
        },
        {
            id: 4,
            start: '2021-01-19 14:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r4',
            title: '',
            startResizable: false,
        },
        {
            id: 5,
            start: '2021-01-19 15:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r5',
            title: '',
            endResizable: false
        },
        {
            id: 6,
            start: '2021-01-19 15:35:00',
            end: '2021-01-19 23:30:00',
            resourceId: 'r6',
            title: ''
        },
        {
            id: 7,
            start: '2021-01-19 15:40:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r7',
            title: '',
            bgColor: '#FA9E95'
        }
    ],
    eventsForTaskView: [
        {
            id: 1,
            start: '2021-01-18 09:30:00',
            end: '2021-01-18 23:30:00',
            resourceId: 'r1',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 2,
            start: '2021-01-18 12:30:00',
            end: '2021-01-26 23:30:00',
            resourceId: 'r2',
            title: '',
            resizable: false,
            groupId: 2,
            groupName: 'Task2'
        },
        {
            id: 3,
            start: '2021-01-19 12:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r3',
            title: '',
            movable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 7,
            start: '2021-01-19 15:40:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r7',
            title: '',
            bgColor: '#FA9E95',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 4,
            start: '2021-01-20 14:30:00',
            end: '2021-01-21 23:30:00',
            resourceId: 'r4',
            title: '',
            startResizable: false,
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 5,
            start: '2021-01-21 15:30:00',
            end: '2021-01-22 23:30:00',
            resourceId: 'r5',
            title: '',
            endResizable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 9,
            start: '2021-01-21 16:30:00',
            end: '2021-01-21 23:30:00',
            resourceId: 'r1',
            title: '',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 6,
            start: '2021-01-22 15:35:00',
            end: '2021-01-23 23:30:00',
            resourceId: 'r6',
            title: '',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 8,
            start: '2021-01-25 15:50:00',
            end: '2021-01-26 23:30:00',
            resourceId: 'r1',
            title: '',
            movable: false,
            resizable: false,
            bgColor: 'red',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 10,
            start: '2021-01-26 18:30:00',
            end: '2021-01-26 23:30:00',
            resourceId: 'r2',
            title: '',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 11,
            start: '2021-01-27 18:30:00',
            end: '2021-01-27 23:30:00',
            resourceId: 'r14',
            title: '',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 12,
            start: '2021-01-28 18:30:00',
            end: '2021-01-28 23:30:00',
            resourceId: 'r6',
            title: '',
            groupId: 3,
            groupName: 'Task3'
        },
    ],
    eventsForCustomEventStyle: [
        {
            id: 1,
            start: '2021-01-18 09:30:00',
            end: '2021-01-19 23:30:00',
            resourceId: 'r1',
            title: '',
            bgColor: '#D9D9D9',
            type: 1
        },
        {
            id: 2,
            start: '2021-01-18 12:30:00',
            end: '2021-01-26 23:30:00',
            resourceId: 'r2',
            title: '',
            resizable: false,
            type: 2
        },
        {
            id: 3,
            start: '2021-01-19 12:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r3',
            title: '',
            movable: false,
            type: 3
        },
        {
            id: 4,
            start: '2021-01-19 14:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r4',
            title: '',
            startResizable: false,
            type: 1
        },
        {
            id: 5,
            start: '2021-01-19 15:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r5',
            title: '',
            endResizable: false,
            type: 2
        },
        {
            id: 6,
            start: '2021-01-19 15:35:00',
            end: '2021-01-19 23:30:00',
            resourceId: 'r6',
            title: '',
            type: 3
        },
        {
            id: 7,
            start: '2021-01-19 15:40:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r7',
            title: '',
            bgColor: '#FA9E95',
            type: 1
        },
        {
            id: 8,
            start: '2021-01-19 15:50:00',
            end: '2021-01-19 23:30:00',
            resourceId: 'r1',
            title: '',
            movable: false,
            resizable: false,
            bgColor: 'red',
            type: 2
        },
        {
            id: 9,
            start: '2021-01-19 16:30:00',
            end: '2021-01-27 23:30:00',
            resourceId: 'r1',
            title: '',
            type: 3
        },
        {
            id: 10,
            start: '2021-01-20 18:30:00',
            end: '2021-01-20 23:30:00',
            resourceId: 'r1',
            title: '',
            type: 1
        },
        {
            id: 11,
            start: '2021-01-21 18:30:00',
            end: '2021-01-22 23:30:00',
            resourceId: 'r1',
            title: '',
            type: 2
        },
        {
            id: 12,
            start: '2021-01-23 18:30:00',
            end: '2021-01-27 23:30:00',
            resourceId: 'r1',
            title: '',
            type: 3
        },
    ],
}

export default DemoData
