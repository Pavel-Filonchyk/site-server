import User from '../Schemes/User.js'

class ControllerEditPersonalData {                                       
    async editPersonalData(req, res) { 
        const user = req.body.userName
        const value = user.value    

        try {
            const users = await User.deleteMany({value})
            const userUpdate = await User.create(user) 
            res.status(200).json(userUpdate)                                    
        } catch (e) {
            console.log(e)
            res.status(500).json(e)                                       
        }
    }
}

export default new ControllerEditPersonalData()