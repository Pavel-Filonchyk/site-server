import Customers from "../Schemes/Customers.js"

class ControllerDeleteCustomer {                                       
    async deleteCustomer(req, res) { 
        const id = req.body                                         
        try {
            const find = await Customers.find()
            const length = find.length
            const lastCustomers = find[length -1]
            const filter = lastCustomers.Customers.filter(item => {return item.id !== id.id})
            const customers = await Customers.create({ 
                Customers: filter
            })             
            res.status(200).json(customers.Customers)                                    
        } catch (e){
            console.log(e)
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerDeleteCustomer()