let defaultState = {
  buildings: [
    {

      name: "Shillman Hall",
      image: "https://www.emporis.com/images/show/433317-Large-exterior-from-centennial-quad.jpg",
      numberOfRooms: 10,
      address: {
        line: "115 Forsyth St",
        loc: {
          lat: 42.337559,
          lng: -71.090191
        }
      },
      rooms: [{
        name: 101,
        numberOfPeople: 3
      },
        {
          name: 304,
          numberOfPeople: 4
        },
        {
          name: 609,
          numberOfPeople: 2
        }]
    },
    {

      name: "Behrakis Health Science Center",
      image: "https://geo3.ggpht.com/cbk?panoid=F64XEi8kWGXBP7E9amUdAQ&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=284.9656&pitch=0&thumbfov=100",
      numberOfRooms: 5,
      address: {
        line: "30 Leon St",
        loc: {
          lat: 42.336889,
          lng: -71.091546
        }
      },
      rooms: [{
        name: 108,
        numberOfPeople: 8
      },
        {
          name: 109,
          numberOfPeople: 9
        },
        {
          name: 102,
          numberOfPeople: 2
        },
        {
          name: 100,
          numberOfPeople: 10
        }]
    },

    {

      name: "Blackman Auditorium",
      numberOfRooms: 17,
      image: "https://lh5.googleusercontent.com/p/AF1QipMPOk0yv-bd4Y9gimS14nNj-FOIKMCq4TVgAwf7=w408-h306-k-no",
      address: {
        line: "346 Huntington Ave",
        loc: {
          lat: 42.339547,
          lng: -71.087872
        }
      },
      rooms: [{
        name: 301,
        numberOfPeople: 0
      },
        {
          name: 305,
          numberOfPeople: 10
        },
        {
          name: 707,
          numberOfPeople: 5
        }]
    },
    {

      name: "Cargill Hall",
      numberOfRooms: 23,
      image: "https://geo0.ggpht.com/cbk?panoid=gyibKi0TtJhHokFPKN1UIw&output=thumbnail&cb_client=search.gws-prod/maps/local-details-getcard.gps&thumb=2&w=408&h=240&yaw=151.09865&pitch=0&thumbfov=100",
      address: {
        line: "45 Forsyth St",
        loc: {
          lat: 42.338971,
          lng: -71.091637
        }
      },
      rooms: [{
        name: 201,
        numberOfPeople: 2
      },
        {
          name: 207,
          numberOfPeople: 1
        },
        {
          name: 301,
          numberOfPeople: 1
        }]
    },
    {

      name: "Churchill Hall",
      numberOfRooms: 4,
      image: "https://repository.library.northeastern.edu/downloads/neu:114886?datastream_id=thumbnail_5",
      address: {
        line: "380 Huntington Ave",
        loc: {
          lat: 42.338805,
          lng: -71.088924
        }
      },
      rooms: [{
        name: 1101,
        numberOfPeople: 3
      },
        {
          name: 1203,
          numberOfPeople: 10
        },
      ]
    },

    {

      name: "Curry Student Center",
      numberOfRooms: 28,
      image: "https://lh5.googleusercontent.com/p/AF1QipMninYKOaAnHBONO9HwMkkFBt5EEW319dIOnp8a=w408-h266-k-no",
      address: {
        line: "346 Huntington Ave",
        loc: {
          lat: 42.339169,
          lng: -71.087558
        }
      },
      rooms: [{
        name: 111,
        numberOfPeople: 5
      },
        {
          name: 211,
          numberOfPeople: 4
        },
        {
          name: 203,
          numberOfPeople: 5
        }]
    },

    {

      name: "Dodge Hall",
      numberOfRooms: 12,
      image: "https://lh5.googleusercontent.com/p/AF1QipPC_I-FyI8coROK8tq2d58Dnr4vwOd8qe9v7P_6=w408-h306-k-no",
      address: {
        line: "360 Huntington Ave",
        loc: {
          lat: 42.340356,
          lng: -71.087839
        }
      },
      rooms: [{
        name: 302,
        numberOfPeople: 10
      },
        {
          name: 220,
          numberOfPeople: 7
        },
        {
          name: 109,
          numberOfPeople: 1
        },
        {
          name: 110,
          numberOfPeople: 4
        }]

    },

    {

      name: "East Village",
      numberOfRooms: 21,
      image: "https://lh5.googleusercontent.com/p/AF1QipOKhr1RyIuN8b1xHUHn2EeWJpiI2bnX1kUhkAHt=w408-h306-k-no",
      address: {
        line: "291 St Botolph St",
        loc: {
          lat: 42.340484,
          lng: -71.086868
        }
      },
      rooms: [{
        name: 1102,
        numberOfPeople: 7
      },
        {
          name: 1302,
          numberOfPeople: 9
        },
        {
          name: 2003,
          numberOfPeople: 4
        }]
    },

    {

      name: "Ell hall",
      numberOfRooms: 7,
      image: "https://geo2.ggpht.com/cbk?panoid=tM4QKyqaWeOdMv8P05iRtQ&output=thumbnail&cb_client=search.gws-prod/maps/local-details-getcard.gps&thumb=2&w=408&h=240&yaw=151.22263&pitch=0&thumbfov=100",
      address: {
        line: "346 Huntington Ave",
        loc: {
          lat: 42.339389,
          lng: -71.087772
        }
      },
      rooms: [
        {
          name: 302,
          numberOfPeople: 8
        },
        {
          name: 506,
          numberOfPeople: 1
        }]
    },

  ],
  isLoggedIn: false,
  defaultUser: {username: 'abc', password: 123},
  curViewingBuilding: -1,
  curViewingRoom: -1,
  bookings: [{
    building: "ShillmanHall",
    room: 102,
    numberOfPeople: 5,
    time: "13:00-14:35 2018-04-23"
  },
    {
      building: "SnellLibrary",
      room: 237,
      numberOfPeople: 3,
      time: "8:00-12:00 2017-05-24"
    },
    {
      building: "Nightingale Hall",
      room: 132,
      numberOfPeople: 10,
      time: "9:20-12:30 2013-03-03"
    }
  ]
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...state,
        examplePropOne: 'newPropOne'
      }
    case 'COMPARE':
      return {
        ...state,
        isLoggedIn: action.payload.username == state.defaultUser.username
        && action.payload.password == state.defaultUser.password ? true : false
      }
    case 'CANCEL_BOOKING':
      return {
        ...state,
        bookings: [
          ...state.bookings.slice(0, action.payload),
          ...state.bookings.slice(action.payload + 1)
        ]

      }
    case 'VIEW_BUILDING':
      return {
        ...state,
        curViewingBuilding: action.payload
      }
    case 'VIEW_ROOM':

      return {
        ...state,
        curViewingRoom: action.payload
      }
    case 'BOOK_ROOM':
      return {
        ...state,
        bookings: [...state.bookings, action.payload]

      }
    default:
      return state;
  }
}

export default reducers;
