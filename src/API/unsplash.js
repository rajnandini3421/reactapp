import React from 'react'
import axios from 'axios'

export default axios.create({
baseURL:'https://api.unsplash.com',
headers:{
    Authorization:'Client-ID 9lXlWv3L92QJv0NXlMeQyt5RS7612X3r5q0a5wLsa1I'
   }
}
);
