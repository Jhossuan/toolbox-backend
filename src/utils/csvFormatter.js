import { parse } from "csv-parse/sync";

const convertArrayToJson = (arrayFiles) => {
    const headers = arrayFiles.shift()
    const jsonData = arrayFiles.map(data => {
        let obj = {}
        headers.forEach((header, index) => {
            obj[header] = data[index]
        })
        return obj
    })

    // console.log('JSON DATA=====>', jsonData)

    const formatData = {
        file: jsonData[0].file,
        lines: []
    }

    jsonData.filter(
        item => item.number !== "" &&
        item.hex !== "" &&
        item.text !== ""
    ).forEach(line => {
        const { text, number, hex } = line
        formatData.lines.push({ text, number, hex })
    })

    return formatData
}

export const convertCsvToArray = (file) => {
    const records = parse(file, {
        trim: true,
        skip_empty_lines: true,
        skip_records_with_empty_values: true,
        skip_records_with_error: true,
    });

    if(records.length <= 1){
        return undefined
    }

    // console.log('records===>', records)

    return convertArrayToJson(records)
}

