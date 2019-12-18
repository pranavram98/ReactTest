import axios from 'axios';
const KEY="AIzaSyDnhrGLPiIBVkVFQCb_iPyH0m_Ou7yFN_Q";

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
  };
  
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'

});

