const accessKey = "aWQ0cPGtTSGC0RLdoQcI5MqSIIzGYYBEIOGS1Vx6gUY";

async function fetchUnsplashImages(query, count = 5) {
    try {
        const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${accessKey}`
        );
        const data = await res.json();


        return data.results.map(img => img.urls.small);
    } catch (err) {
        console.error("Unsplash fetch error:", err);


        return Array(3).fill("https://via.placeholder.com/400x300");
    }
}

export default fetchUnsplashImages;