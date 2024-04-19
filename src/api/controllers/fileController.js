import FileServices from "../../services/fileServices.js";

class FileController {

    static async getFormatedFiles(req, res){
        const { fileName } = req.query
        // console.log("Query Param ====>", fileName)
        try {
            const response = await FileServices.getFormatedFiles(fileName)
            if(response.success){
                return res.status(response.code).send(response.res)
            }
            return res.status(response.code).send(response.error)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async getFiles(req, res){
        try {
            const response = await FileServices.getFiles()
            if(response.success){
                console.log("RESPONSE======>",response)
                return res.status(response.code).send(response.res)
            }
            return res.status(response.code).send(response.error)
        } catch (error) {
            console.log('error ====>',error)
            return res.status(500).send(error.message)
        }
    }

}

export default FileController;