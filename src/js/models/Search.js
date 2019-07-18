import axios from "axios";

export default class Search {
    constructor (query) {
        this.query = query;

    }
    async getResults () {
        const url = `https://www.food2fork.com/api/search?key=d574d1b590e169e5d2f81039c9b220ad&q=${this.query}`
        try {
            const response = await axios(url)
            //console.log(response)
            this.result = response.data.recipes
            //console.log(this.result)
        }
        catch (error) {
            alert(error)
        
        }
    }

}