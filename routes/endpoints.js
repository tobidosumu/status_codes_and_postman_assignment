import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const endpointId = uuidv4()

const endpoints = [
    {
        "id": endpointId,
        "status": "Not Extended",
        "statusCode": 510,
        "meaning": "Further extensions to the request are required for the server to fulfill it."
    }, 

    {
        "id": endpointId,
        "status": "Network Authentication Required",
        "statusCode": 511,
        "meaning": "Indicates that the client needs to authenticate to gain network access."
    },    
    
    {
        "id": endpointId,
        "status": "HTTP Version Not Supported",
        "statusCode": 505,
        "meaning": "The HTTP version used in the request is not supported by the server."
    },    
    
    {
        "id": endpointId,
        "status": "Gateway Timeout",
        "statusCode": 504,
        "meaning": "This error response is given when the server is acting as a gateway and cannot get a response in time."
    }
]

router.get('/', (req, res) => {
    res.send(endpoints)
})

router.post('/', (req, res) => {
    const endpoint = req.body

    res.send(`Endpoint with the status code ${status} has been added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundEndpoint = endpoints.find((endpoint) => endpoint.id === id) 

    res.send(foundEndpoint)
})

export default router