export default class APIResponse {
    status_code = 0
    success = false
    message = ""
    data = {}
    err = false

    constructor(response) {        
        this.response = response
        this.setStatusCode(response.status)
        this.validateResponse()
    }

    setError = (err) => this.err = err
    setMessage = (message) => this.message = message
    setErrorMessage = (message) => {
        this.message = message
        this.err = true
    }

    setStatusCode = (status_code) => this.status_code = status_code
    validateResponse = () => {}
    getData = async () => {
        return this.err ? {
            success: false,
            message: this.message
        } : await this.response.json()
    }
}