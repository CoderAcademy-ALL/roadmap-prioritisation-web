import { modalUnstyledClasses } from "@mui/material";

const production = {
    baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
}

const development = {
    baseURL: "http://localhost:4000",
}

const config = {
    production,
    development,
}

const load  = () => {
    if(process.env.NODE_ENV == 'development') {
        return config.development
    }
    return config.production
}


export default {load}