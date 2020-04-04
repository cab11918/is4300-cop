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