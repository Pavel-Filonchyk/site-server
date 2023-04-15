import Customers from "../Schemes/Customers.js"

class ControllerGetCustomers {  
                                         
    async getAll(req, res) {                                                                                      
        try {
            const find = await Customers.find()
            const length = find.length
            const customers = find[length -1]               
            res.status(200).json(customers.Customers)                                    
        } catch (e){
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerGetCustomers()