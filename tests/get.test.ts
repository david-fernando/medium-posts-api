import axios from 'axios'

describe('Get data from Medium Posts API', ()=>{
    test('Should returns 200', async()=>{
        const dataMedium = await axios.get(`http://localhost:3333/?usermedium=davidfernandodamata21`) 
        
        expect(dataMedium.status).toBe(200)
    })

    test('Should returns all data from API', async()=>{
        const dataMedium = await axios.get(`http://localhost:3333/?usermedium=davidfernandodamata21`) 

        const data = dataMedium.data.dataMedium[0]

        const existTitle = data.hasOwnProperty('title')
        const existDate = data.hasOwnProperty('date')
        const existLink = data.hasOwnProperty('link')
        const existImage = data.hasOwnProperty('image')
        const existDescription = data.hasOwnProperty('description')
        const existTags = data.hasOwnProperty('tags')

        function existAllData(){
            if(!existTitle){
                return;
            }

            if(!existDate){
                return;
            }
            
            if(!existLink){
                return;
            }

            if(!existImage){
                return;
            }

            if(!existDescription){
                return;
            }

            if(!existTags){
                return;
            }

            return true
        }
        
        expect(existAllData()).toBe(true)
    })
} )