import axios from 'axios';

const NEWS_API_KEY = '16d0f3ab975c473c8cd756a028cc7bda';
const GUARDIAN_API_KEY = '587d1f36-7368-471f-9835-18e0e2b8aa67';
const NYT_API_KEY = '5FZM7evBepD7vQpBSLY0mKY1InlVlO7M';

/* Fetch articles from NewsAPI */
export const fetchNewsAPIArticles = async (query,filters) => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=${filters.sortBy}&apiKey=${NEWS_API_KEY}`);
    return response.data.articles;
};

// Fetch articles from The Guardian
export const fetchGuardianArticles = async (query,filters) => {
    const response = await axios.get(`https://content.guardianapis.com/search?q=${query}&section=${filters.category}&api-key=${GUARDIAN_API_KEY}`);
    return response.data.response.results;
};

/* Fetch articles from New York Times */
export const fetchNYTArticles = async (query,filters) => {
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=section_name:${filters.category}&sort=${filters.sortBy}&&api-key=${NYT_API_KEY}`);
    return response.data.response.docs;
};
