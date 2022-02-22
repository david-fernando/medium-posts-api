import axios from 'axios'

describe('Get data from Medium Posts API', ()=>{
    test('Check if it returns 200', async()=>{
        const dataMedium = await axios.get('https://mediumpostapi.herokuapp.com/?usermedium=davidfernandodamata21') 
        
        expect(dataMedium.status).toBe(200)
    })
} )