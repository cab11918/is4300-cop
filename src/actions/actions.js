export const exampleAction = () => (
    {
        type: 'EXAMPLE'
    }
)

export const exampleActionTwo = (sampleData) => (
    {
        type: 'EXAMPLE-TWO',
        payload: sampleData
    }
)

export const compare = (user) => (
    {
        type: 'COMPARE',
        payload: user
    }
)

export const cancelBooking = (index) => (
    {
      type: 'CANCEL_BOOKING',
      payload: index
    }
)

export const viewBuilding = (id) => (
    {
      type: 'VIEW_BUILDING',
      payload: id
    }
)

export const viewRoom = (id) => (
    {
      type: 'VIEW_ROOM',
      payload: id
    }
)

export const bookRoom = (room) => (
    {
      type: 'BOOK_ROOM',
      payload: room
    }
)



