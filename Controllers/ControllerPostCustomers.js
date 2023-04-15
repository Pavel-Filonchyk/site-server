import Customers from "../Schemes/Customers.js"
import data from '../data/data.js'

class ControllerPostCustomers {                                       
    async postAll(req, res) {                                                                                        
        try {
            const post = await Customers.create({ 
                Customers: data
            })                            
            res.status(200).json(post.Customers)                                    
        } catch (e){
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerPostCustomers()