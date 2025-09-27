const accessKey = "aWQ0cPGtTSGC0RLdoQcI5MqSIIzGYYBEIOGS1Vx6gUY"; // replace this with your Unsplash access key

async function fetchUnsplashImage(query) {
    try {
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=${accessKey}`);
        const data = await res.json();
        return data.results[0]?.urls.small || "https://via.placeholder.com/400x300"; // fallback
    } catch (err) {
        console.error("Unsplash fetch error:", err);
        return "https://via.placeholder.com/400x300"; // fallback
    }
}
export default fetchUnsplashImage