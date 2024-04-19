import axios from "axios";
import { convertCsvToArray } from "../utils/csvFormatter.js";

class FileServices {

    static async getFiles() {
        try {
            const files = await axios.get(
                `${process.env.GET_FILES}`,
                {
                    headers: {
                        "Authorization": `Bearer ${process.env.SECRET_KEY}`
                    }
                }
            )

            if(files.status !== 200){
                return {
                    sucess: false,
                    code: 404,
                    error: {
                        message: "Data not found"
                    }
                }
            }

            return {
                success: true,
                code: 200,
                res: files.data.files
            }
        } catch (error) {
            // console.log("Error at getFiles====+>",error)
            return {
                success: false,
                code: 500,
                error: {
                    message: "Error at getFiles"
                }
            }
        }
    }

    static async getFilteredFile(file){
        try {
            const response = await axios.get(
                `${process.env.GET_FILE}/${file}`,
                {
                    headers: {
                        "Authorization": `Bearer ${process.env.SECRET_KEY}`
                    }
                }
            )
            return convertCsvToArray(response.data)
        } catch (error) {
            // console.log("Error getFilteredFile ====>", error)
            return null
        }
    }

    static async getMultipleFiles() {
        const files = await this.getFiles()
        if(!files.success){
            return {
                success: false,
                code: 404,
                error: {
                    message: "Data not found"
                }
            }
        }
        const promises = files.res.map(async (file) => {
            return await this.getFilteredFile(file)
        })
        return Promise.all(promises)
    }

    static async getFormatedFiles(fileName) {

        let response;
        if(fileName){
            response = await this.getFilteredFile(fileName)
            if(!response || response.lines.length === 0){
                return {
                    success: false,
                    code: 404,
                    error: {
                        message: 'Data not found'
                    }
                }
            }
            return {
                success: true,
                code: 200,
                res: response
            }
        }
        response = await this.getMultipleFiles()

        try {
            return {
                success: true,
                code: 200,
                res : response.filter(
                    item => item != null &&
                    item.lines.length > 0
                )
            }
        } catch (error) {
            console.log('Error ======>', error)
            return {
                sucess: false,
                code: 500,
                error: {
                    message: "Error at getFormatedFiles"
                }
            }
        }
    }

}

export default FileServices;