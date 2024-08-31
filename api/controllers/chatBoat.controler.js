import { GoogleGenerativeAI } from "@google/generative-ai";
import ytsr from 'ytsr';
import { image_search, image_search_generator } from 'duckduckgo-images-api';




export const chatReaponce = async (req,res,next)=>{
    try {
        const {question,historyall} = req.body;
        const genAI = new GoogleGenerativeAI("AIzaSyBJgpvGQCMHqK9CKZXJgss69LjH86c0mQY");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat({            
            history:historyall
          ,
          generationConfig: {
            // responseMimeType: "application/json",
            // topP: 0.95,
            // topK: 64,
            // temperature: 1
          },
        });
        console.log(historyall)
        const result = await chat.sendMessage(question);
        const response = result.response;
        res.setHeader('Content-Type', 'text/html');
        // res.status(200).json(JSON.parse(response.text()));
        res.status(200).json(response.text());
    } catch (error) {
        next(error)
    }
    

}


export const youtubeSearch = async (req,res,next)=>{
  try {
    const {query} = req.body;
    const searchResults = await ytsr(query, {limit: 10});
    res.status(200).send(searchResults.items.map(item =>{
      return {
        id: item.id,
        title: item.title,
        url: item.url
      }
    }))
  } catch (error) {
    next(error)
  }
  
}


export const photosSearch = async (req,res,next)=>{
  try {
    const {query} = req.body;
    const results = await image_search({ query, moderate: true, iterations: 1 });
    const imageUrlsAll = results.map((result,i) => {
        return result.image
    });
    // const imageUrls = imageUrlsAll.filter((result,i) => {
    //   if(i<10){
    //     return result
    //   }
    // });

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const imageUrls = []
    for(let i=0;i<10;i++){
      imageUrls.push(imageUrlsAll[getRandomInt(50)])
    }
    res.status(200).json(imageUrls)
  } catch (error) {
    next(error)
  }
  
}