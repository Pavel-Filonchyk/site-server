import Customers from "../Schemes/Customers.js"

class ControllerAddCustomer {                                       
    async postCustomer(req, res) { 
        const customer = req.body                                                 
        try {
            const find = await Customers.find()
            const length = find.length
            const lastCustomers = find[length -1] 
            const filter = lastCustomers.Customers.filter(item => {return item.id === customer.id})
            let newCustomers
            if(filter?.length >= 0){
                const filter = lastCustomers.Customers.filter(item => {return item.id !== customer.id})
                newCustomers = [...filter, customer]
            }else{
                newCustomers = [...lastCustomers.Customers, customer]
            }
            const customers = await Customers.create({ 
                Customers: newCustomers
            })               
            res.status(200).json(customers.Customers)                                    
        } catch (e){
            console.log(e)
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerAddCustomer()