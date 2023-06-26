import User from '../Schemes/User.js'

class ControllerGetPersonalData {                                       
    async getPersonalData(req, res) { 
        const userName = req.body.userName                                    
        try {
            const userData = await User.findOne({userName})           
            res.status(200).json(userData)                                    
        } catch (e){
            console.log(e)
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerGetPersonalData()