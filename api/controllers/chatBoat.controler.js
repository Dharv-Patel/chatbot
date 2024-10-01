import { GoogleGenerativeAI } from "@google/generative-ai";
import ytsr from "ytsr";
import { image_search, image_search_generator } from "duckduckgo-images-api";

export const chatReaponce = async (req, res, next) => {
  try {
    const { question, historyall } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({
      history: historyall,
      generationConfig: {
        // responseMimeType: "application/json",
        // topP: 0.95,
        // topK: 64,
        // temperature: 1
      },
    });
    // console.log(historyall);
    const result = await chat.sendMessage(question);
    const response = result.response;
    res.setHeader("Content-Type", "text/html");
    // res.status(200).json(JSON.parse(response.text()));
    res.status(200).json(response.text());
  } catch (error) {
    next(error);
  }
};

export const dayPlanReaponce = async (req, res, next) => {
  try {
    const { historyall } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({
      history: historyall,
      generationConfig: {
        responseMimeType: "application/json",
      },
    });
    const prompt = 'generate Travel plan for location: {{take location from my chat historys recent questions}} for 3 days for 2 people with a any budget,suggest itinerary with placename, Place Details, Place Image Url, Geo coordinates, ticket pricing, Time travel each of the location for 2 days with each day plan with best time to visit in JSON formate :{"destination": "","duration": "","travelers": "","budget": "","itinerary": [{"day": 1,"places": [{"time" : "","name": "","description": "","place_details": "","imageUrl": "","coordinates": "","ticketPrice": "","travelTime": ""]},]}'
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();
    res.status(200).json(JSON.parse(text));
  } catch (error) {
    next(error);
  }
};

export const youtubeSearch = async (req, res, next) => {
  try {
    const { query } = req.body;
    const searchResults = await ytsr(query, { limit: 10 });
    res.status(200).send(
      searchResults.items.map((item) => {
        return {
          id: item.id,
          title: item.title,
          url: item.url,
        };
      })
    );
  } catch (error) {
    next(error);
  }
};

export const photosSearch = async (req, res, next) => {
  try {
    const { query } = req.body;
    const results = await image_search({
      query,
      moderate: true,
      iterations: 1,
    });
    const imageUrlsAll = results.map((result, i) => {
      return result.image;
    });
    // const imageUrls = imageUrlsAll.filter((result,i) => {
    //   if(i<10){
    //     return result
    //   }
    // });

    // function getRandomInt(max) {
    //   return Math.floor(Math.random() * max);
    // }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
      imageUrls.push(imageUrlsAll[i]);
    }
    res.status(200).json(imageUrls);
  } catch (error) {
    next(error);
  }
};
