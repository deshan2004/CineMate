// ========== MOVIE & TV SHOW DATA ==========
const movies = [
    { id: 1, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", badge: "trending", type: "movie", poster: "qJ2tW6WMUDux911r6m7haRef0WH.jpg", detailId: "dark-knight", plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"], director: "Christopher Nolan", trailer: "EXeTwQWrcwY", duration: "2h 32min" },
    { id: 2, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", badge: "trending", type: "movie", poster: "9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", detailId: "inception", plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], director: "Christopher Nolan", trailer: "YoHD9XEInc0", duration: "2h 28min" },
    { id: 3, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", badge: "top", type: "movie", poster: "gvK2BQLW5c2efdF8WvVRjCqHJlL.jpg", detailId: "interstellar", plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], director: "Christopher Nolan", trailer: "zSWdZVtXT7E", duration: "2h 49min" },
    { id: 4, title: "Oppenheimer", year: 2023, rating: 8.9, genre: "Drama", badge: "new", type: "movie", poster: "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", detailId: "oppenheimer", plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"], director: "Christopher Nolan", trailer: "uYPbbksJxIg", duration: "3h 0min" },
    { id: 5, title: "Mad Max: Fury Road", year: 2015, rating: 8.8, genre: "Action", badge: null, type: "movie", poster: "8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", detailId: "mad-max", plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.", cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"], director: "George Miller", trailer: "hEJnMQG9ev8", duration: "2h 0min" },
    { id: 6, title: "John Wick", year: 2014, rating: 8.7, genre: "Action", badge: null, type: "movie", poster: "fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", detailId: "john-wick", plot: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.", cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"], director: "Chad Stahelski", trailer: "2AUmvWm5ZDQ", duration: "1h 41min" },
    { id: 7, title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi", badge: "classic", type: "movie", poster: "f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", detailId: "matrix", plot: "A computer hacker learns from mysterious rebels about the true nature of his reality.", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], director: "Lana Wachowski, Lilly Wachowski", trailer: "vKQi3bBA1y8", duration: "2h 16min" }
];

const tvShows = [
    { id: 101, title: "Breaking Bad", year: "2008-2013", rating: 9.5, genre: "Drama", badge: "trending", type: "tv", poster: "ggFHVNu6YYI5L9pCfOacjizRGt.jpg", detailId: "breaking-bad", plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.", cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"], director: "Vince Gilligan", trailer: "HhesaQXLuRY", seasons: 5, episodes: 62 },
    { id: 102, title: "Stranger Things", year: "2016-2025", rating: 9.1, genre: "Sci-Fi", badge: "trending", type: "tv", poster: "49WJfeN0moxb9IPfGn8AIqMGskD.jpg", detailId: "stranger-things", plot: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.", cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"], director: "Duffer Brothers", trailer: "b9EkMc79ZSU", seasons: 4, episodes: 34 },
    { id: 103, title: "The Office", year: "2005-2013", rating: 9.4, genre: "Comedy", badge: "top", type: "tv", poster: "qWnJwZvXpjp3RcUxtGQDHnQHtji.jpg", detailId: "the-office", plot: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes and inappropriate behavior.", cast: ["Steve Carell", "John Krasinski", "Jenna Fischer"], director: "Greg Daniels", trailer: "tNcDHWpselE", seasons: 9, episodes: 201 },
    { id: 104, title: "The Wire", year: "2002-2008", rating: 9.2, genre: "Drama", badge: "top", type: "tv", poster: "4mxUj5EsY3T4b7wFq5m7qVKz8yG.jpg", detailId: "the-wire", plot: "Baltimore drug scene, seen through the eyes of drug dealers and law enforcement.", cast: ["Dominic West", "Lance Reddick", "Idris Elba"], director: "David Simon", trailer: "RcTz6tkHjWA", seasons: 5, episodes: 60 },
    { id: 105, title: "Succession", year: "2018-2023", rating: 8.9, genre: "Drama", badge: "new", type: "tv", poster: "9yVYgrGJqRMbS6Jj8z5y5b8hqMp.jpg", detailId: "succession", plot: "The Roy family fights for control of a global media empire.", cast: ["Brian Cox", "Jeremy Strong", "Sarah Snook"], director: "Jesse Armstrong", trailer: "DI0Rj2p7qG4", seasons: 4, episodes: 39 }
];

// ========== FAVOURITES MANAGEMENT ==========
let favourites = [];

function loadFavourites() {
    try {
        const saved = localStorage.getItem("cinemate_favourites");
        if (saved) favourites = JSON.parse(saved);
    } catch(e) { favourites = []; }
}

function saveFavourites() {
    localStorage.setItem("cinemate_favourites", JSON.stringify(favourites));
}

function isFavourite(id) {
    return favourites.some(fav => fav.id === id);
}

function toggleFavourite(item) {
    if (isFavourite(item.id)) {
        favourites = favourites.filter(fav => fav.id !== item.id);
        saveFavourites();
        showToast(`${item.title} removed from favourites`, "error");
        return false;
    } else {
        favourites.push(item);
        saveFavourites();
        showToast(`${item.title} added to favourites!`, "success");
        return true;
    }
}

// ========== TOAST NOTIFICATIONS ==========
let toastTimeout;
function showToast(message, type = "success") {
    const existingToast = document.querySelector(".toast");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : "fa-heart-broken"}"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 10);
    
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ========== HELPER FUNCTIONS ==========
function getPosterUrl(poster) {
    return `https://image.tmdb.org/t/p/w500/${poster}`;
}

function getRatingClass(rating) {
    if (rating >= 8.5) return "high";
    if (rating >= 7.0) return "mid";
    return "low";
}

function getBadgeText(badge) {
    switch(badge) {
        case "trending": return "🔥 Trending";
        case "new": return "✨ New";
        case "top": return "⭐ Top Rated";
        case "classic": return "🎬 Classic";
        default: return "";
    }
}

// ========== CARD RENDERING ==========
function renderCards(items, containerId, showFavIcons = true) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (!items.length) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-film"></i><h3>No items found</h3><p>Try adjusting your search or filters</p></div>`;
        return;
    }
    
    container.innerHTML = items.map(item => {
        const posterUrl = getPosterUrl(item.poster);
        const ratingClass = getRatingClass(item.rating);
        const favActive = isFavourite(item.id) ? 'active' : '';
        const badgeText = getBadgeText(item.badge);
        const detailPage = item.type === "movie" ? "movie-detail.html" : "tv-detail.html";
        const shortTitle = item.title.length > 22 ? item.title.substring(0, 19) + "…" : item.title;
        
        return `
            <div class="movie-card">
                <a href="${detailPage}?id=${item.detailId}" class="movie-link">
                    <div class="movie-poster">
                        <img src="${posterUrl}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/1e1e1e/bb86fc?text=No+Image'">
                        <div class="poster-overlay">
                            ${item.badge ? `<span class="badge ${item.badge}">${badgeText}</span>` : ''}
                            <span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>
                        </div>
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">
                            ${shortTitle}
                            <span class="movie-year">${item.year}</span>
                        </div>
                        <div class="movie-meta">
                            <span class="movie-rating ${ratingClass}"><i class="fas fa-star"></i> ${item.rating}</span>
                            <span class="movie-genre">${item.genre}</span>
                            ${showFavIcons ? `<i class="fas fa-heart fav-icon ${favActive}" data-id="${item.id}" data-type="${item.type}" data-title="${item.title}"></i>` : ''}
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join("");
    
    if (showFavIcons) {
        attachFavouriteListeners();
    }
}

function attachFavouriteListeners() {
    document.querySelectorAll(".fav-icon").forEach(icon => {
        icon.removeEventListener("click", handleFavouriteClick);
        icon.addEventListener("click", handleFavouriteClick);
    });
}

function handleFavouriteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const icon = e.currentTarget;
    const itemId = parseInt(icon.dataset.id);
    const allItems = [...movies, ...tvShows];
    const item = allItems.find(i => i.id === itemId);
    
    if (item) {
        const isNowFavourite = toggleFavourite(item);
        icon.classList.toggle("active", isNowFavourite);
        
        // Refresh favourites page if on it
        if (window.location.pathname.includes("favourites.html")) {
            renderFavouritesPage();
        }
    }
}

// ========== FILTERING ==========
function filterMovies() {
    const searchTerm = document.getElementById("movie-search-box")?.value.toLowerCase() || "";
    const genre = document.getElementById("movie-genre")?.value || "All Genres";
    const year = document.getElementById("movie-year")?.value || "All Years";
    
    return movies.filter(movie => {
        if (searchTerm && !movie.title.toLowerCase().includes(searchTerm)) return false;
        if (genre !== "All Genres" && movie.genre !== genre) return false;
        if (year !== "All Years") {
            const movieYear = parseInt(movie.year);
            const filterYear = parseInt(year);
            if (movieYear !== filterYear) return false;
        }
        return true;
    });
}

function filterTVShows() {
    const searchTerm = document.getElementById("tv-search-box")?.value.toLowerCase() || "";
    const genre = document.getElementById("tv-genre")?.value || "All Genres";
    const year = document.getElementById("tv-year")?.value || "All Years";
    
    return tvShows.filter(show => {
        if (searchTerm && !show.title.toLowerCase().includes(searchTerm)) return false;
        if (genre !== "All Genres" && show.genre !== genre) return false;
        if (year !== "All Years") {
            const showStartYear = parseInt(show.year.split("-")[0]);
            const filterYear = parseInt(year);
            if (showStartYear !== filterYear) return false;
        }
        return true;
    });
}

function filterHome() {
    const searchTerm = document.getElementById("home-search")?.value.toLowerCase() || "";
    const genre = document.getElementById("home-genre")?.value || "All Genres";
    const year = document.getElementById("home-year")?.value || "All Years";
    
    const allItems = [...movies, ...tvShows];
    return allItems.filter(item => {
        if (searchTerm && !item.title.toLowerCase().includes(searchTerm)) return false;
        if (genre !== "All Genres" && item.genre !== genre) return false;
        if (year !== "All Years") {
            const itemYear = parseInt(item.year.toString().split("-")[0]);
            const filterYear = parseInt(year);
            if (itemYear !== filterYear) return false;
        }
        return true;
    }).slice(0, 12);
}

// ========== DETAIL PAGE FUNCTIONS ==========
function loadMovieDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    const movie = movies.find(m => m.detailId === movieId);
    
    if (!movie) return;
    
    document.getElementById("detailTitle").textContent = movie.title;
    document.getElementById("detailYear").textContent = movie.year;
    document.getElementById("detailRating").textContent = movie.rating;
    document.getElementById("detailGenre").textContent = movie.genre;
    document.getElementById("detailPlot").textContent = movie.plot;
    document.getElementById("detailDirector").textContent = movie.director;
    document.getElementById("detailPoster").src = getPosterUrl(movie.poster);
    
    const castContainer = document.getElementById("detailCast");
    castContainer.innerHTML = movie.cast.map(c => `<span>${c}</span>`).join("");
    
    // Update favourite button
    const favBtn = document.getElementById("favouriteBtn");
    if (isFavourite(movie.id)) {
        favBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favourites';
    } else {
        favBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favourites';
    }
    
    favBtn.onclick = (e) => {
        e.preventDefault();
        const newState = toggleFavourite(movie);
        if (newState) {
            favBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favourites';
        } else {
            favBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favourites';
        }
    };
    
    // Trailer modal
    const watchBtn = document.getElementById("watchTrailerBtn");
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerIframe");
    const closeModal = document.querySelector(".close-modal");
    
    watchBtn.onclick = (e) => {
        e.preventDefault();
        iframe.src = `https://www.youtube.com/embed/${movie.trailer}?autoplay=1`;
        modal.classList.add("show");
    };
    
    closeModal.onclick = () => {
        modal.classList.remove("show");
        iframe.src = "";
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            iframe.src = "";
        }
    };
    
    // Similar movies
    const similar = movies.filter(m => m.genre === movie.genre && m.id !== movie.id).slice(0, 4);
    renderCards(similar, "similar-grid", true);
}

function loadTVDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const showId = urlParams.get('id');
    const show = tvShows.find(s => s.detailId === showId);
    
    if (!show) return;
    
    document.getElementById("detailTitle").textContent = show.title;
    document.getElementById("detailYear").textContent = show.year;
    document.getElementById("detailRating").textContent = show.rating;
    document.getElementById("detailGenre").textContent = show.genre;
    document.getElementById("detailPlot").textContent = show.plot;
    document.getElementById("detailDirector").textContent = show.director;
    document.getElementById("detailPoster").src = getPosterUrl(show.poster);
    
    if (document.getElementById("detailSeasons")) {
        document.getElementById("detailSeasons").textContent = `${show.seasons} Seasons`;
        document.getElementById("detailEpisodes").textContent = `${show.episodes} Episodes`;
    }
    
    const castContainer = document.getElementById("detailCast");
    castContainer.innerHTML = show.cast.map(c => `<span>${c}</span>`).join("");
    
    // Seasons grid
    const seasonsGrid = document.getElementById("seasonsGrid");
    if (seasonsGrid) {
        seasonsGrid.innerHTML = "";
        for (let i = 1; i <= show.seasons; i++) {
            seasonsGrid.innerHTML += `
                <div class="season-card">
                    <div class="season-number">Season ${i}</div>
                    <div class="season-episodes">${i === 1 ? Math.ceil(show.episodes / show.seasons) : Math.ceil(show.episodes / show.seasons)} Episodes</div>
                    <div class="season-year">${parseInt(show.year.split("-")[0]) + i - 1}</div>
                </div>
            `;
        }
    }
    
    // Update favourite button
    const favBtn = document.getElementById("favouriteBtn");
    if (isFavourite(show.id)) {
        favBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favourites';
    } else {
        favBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favourites';
    }
    
    favBtn.onclick = (e) => {
        e.preventDefault();
        const newState = toggleFavourite(show);
        if (newState) {
            favBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favourites';
        } else {
            favBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favourites';
        }
    };
    
    // Trailer modal
    const watchBtn = document.getElementById("watchTrailerBtn");
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerIframe");
    const closeModal = document.querySelector(".close-modal");
    
    watchBtn.onclick = (e) => {
        e.preventDefault();
        iframe.src = `https://www.youtube.com/embed/${show.trailer}?autoplay=1`;
        modal.classList.add("show");
    };
    
    closeModal.onclick = () => {
        modal.classList.remove("show");
        iframe.src = "";
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            iframe.src = "";
        }
    };
    
    // Similar shows
    const similar = tvShows.filter(s => s.genre === show.genre && s.id !== show.id).slice(0, 4);
    renderCards(similar, "similar-grid", true);
}

// ========== FAVOURITES PAGE ==========
function renderFavouritesPage() {
    const container = document.getElementById("favourites-grid");
    if (!container) return;
    
    if (favourites.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>No favourites yet</h3>
                <p>Start adding movies and TV shows to your favourites by clicking the ❤ icon</p>
            </div>
        `;
        return;
    }
    
    renderCards(favourites, "favourites-grid", true);
}

function setupFavouritesSearch() {
    const searchInput = document.getElementById("favourites-search");
    if (!searchInput) return;
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = favourites.filter(item => item.title.toLowerCase().includes(query));
        renderCards(filtered, "favourites-grid", true);
    });
}

// ========== FEATURED SECTION ==========
function loadFeatured() {
    const featuredMovie = movies[2]; // Interstellar
    const container = document.getElementById("featured-card");
    if (!container) return;
    
    const isFav = isFavourite(featuredMovie.id);
    
    container.innerHTML = `
        <div class="featured-poster">
            <img src="${getPosterUrl(featuredMovie.poster)}" alt="${featuredMovie.title}">
        </div>
        <div class="featured-info">
            <h3>${featuredMovie.title}</h3>
            <p>${featuredMovie.plot.substring(0, 200)}...</p>
            <div class="featured-buttons">
                <a href="movie-detail.html?id=${featuredMovie.detailId}" class="btn-primary">View Details</a>
                <a href="#" class="btn-secondary favourite-featured" id="featuredFavBtn"><i class="${isFav ? 'fas' : 'far'} fa-heart"></i> ${isFav ? 'Favourited' : 'Favourite'}</a>
            </div>
        </div>
    `;
    
    const featuredFavBtn = document.getElementById("featuredFavBtn");
    if (featuredFavBtn) {
        featuredFavBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const newState = toggleFavourite(featuredMovie);
            if (newState) {
                featuredFavBtn.innerHTML = '<i class="fas fa-heart"></i> Favourited';
            } else {
                featuredFavBtn.innerHTML = '<i class="far fa-heart"></i> Favourite';
            }
        });
    }
}

// ========== HOME PAGE TABS ==========
let currentTab = "all";

function setupHomeTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentTab = tab.dataset.filter;
            loadHomeContent();
        });
    });
}

function loadHomeContent() {
    let items = [...movies, ...tvShows];
    
    if (currentTab === "trending") {
        items = items.filter(i => i.badge === "trending");
    } else if (currentTab === "new") {
        items = items.filter(i => i.badge === "new");
    } else if (currentTab === "top") {
        items = items.filter(i => i.badge === "top");
    }
    
    items = items.slice(0, 12);
    renderCards(items, "movies-grid", true);
}

// ========== CATEGORY FILTERS ==========
function setupMovieCategories() {
    const btns = document.querySelectorAll("#movie-categories .category-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.dataset.cat;
            const genreSelect = document.getElementById("movie-genre");
            if (genreSelect) {
                genreSelect.value = category === "All" ? "All Genres" : category;
                const event = new Event("change");
                genreSelect.dispatchEvent(event);
            }
            applyMovieFilters();
        });
    });
}

function setupTVCategories() {
    const btns = document.querySelectorAll("#tv-categories .category-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.dataset.cat;
            const genreSelect = document.getElementById("tv-genre");
            if (genreSelect) {
                genreSelect.value = category === "All" ? "All Genres" : category;
                const event = new Event("change");
                genreSelect.dispatchEvent(event);
            }
            applyTVFilters();
        });
    });
}

function applyMovieFilters() {
    const filtered = filterMovies();
    renderCards(filtered, "movies-grid", true);
}

function applyTVFilters() {
    const filtered = filterTVShows();
    renderCards(filtered, "tvshows-grid", true);
}

function applyHomeFilters() {
    const filtered = filterHome();
    renderCards(filtered, "movies-grid", true);
}

// ========== GLOBAL SEARCH ==========
function setupGlobalSearch() {
    const searchInput = document.getElementById("global-search");
    if (!searchInput) return;
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const currentPage = window.location.pathname;
        
        if (currentPage.includes("movie.html")) {
            const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
            renderCards(filtered, "movies-grid", true);
        } else if (currentPage.includes("tvshows.html")) {
            const filtered = tvShows.filter(s => s.title.toLowerCase().includes(query));
            renderCards(filtered, "tvshows-grid", true);
        } else if (currentPage.includes("favourites.html")) {
            const filtered = favourites.filter(f => f.title.toLowerCase().includes(query));
            renderCards(filtered, "favourites-grid", true);
        } else {
            const allItems = [...movies, ...tvShows];
            const filtered = allItems.filter(i => i.title.toLowerCase().includes(query)).slice(0, 12);
            renderCards(filtered, "movies-grid", true);
        }
    });
}

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
    loadFavourites();
    
    const currentPage = window.location.pathname;
    
    if (currentPage.includes("index.html") || currentPage === "/" || currentPage.endsWith("/")) {
        loadFeatured();
        loadHomeContent();
        setupHomeTabs();
        setupGlobalSearch();
        
        const homeSearchBtn = document.getElementById("home-search-btn");
        const homeSearch = document.getElementById("home-search");
        const homeGenre = document.getElementById("home-genre");
        const homeYear = document.getElementById("home-year");
        
        const updateHome = () => applyHomeFilters();
        if (homeSearchBtn) homeSearchBtn.addEventListener("click", updateHome);
        if (homeSearch) homeSearch.addEventListener("keyup", (e) => { if (e.key === "Enter") updateHome(); });
        if (homeGenre) homeGenre.addEventListener("change", updateHome);
        if (homeYear) homeYear.addEventListener("change", updateHome);
        
    } else if (currentPage.includes("movie.html")) {
        renderCards(movies, "movies-grid", true);
        setupMovieCategories();
        setupGlobalSearch();
        
        const searchBtn = document.getElementById("movie-search-btn");
        const searchBox = document.getElementById("movie-search-box");
        const genreSelect = document.getElementById("movie-genre");
        const yearSelect = document.getElementById("movie-year");
        
        const updateMovies = () => applyMovieFilters();
        if (searchBtn) searchBtn.addEventListener("click", updateMovies);
        if (searchBox) searchBox.addEventListener("keyup", (e) => { if (e.key === "Enter") updateMovies(); });
        if (genreSelect) genreSelect.addEventListener("change", updateMovies);
        if (yearSelect) yearSelect.addEventListener("change", updateMovies);
        
    } else if (currentPage.includes("tvshows.html")) {
        renderCards(tvShows, "tvshows-grid", true);
        setupTVCategories();
        setupGlobalSearch();
        
        const searchBtn = document.getElementById("tv-search-btn");
        const searchBox = document.getElementById("tv-search-box");
        const genreSelect = document.getElementById("tv-genre");
        const yearSelect = document.getElementById("tv-year");
        
        const updateTVShows = () => applyTVFilters();
        if (searchBtn) searchBtn.addEventListener("click", updateTVShows);
        if (searchBox) searchBox.addEventListener("keyup", (e) => { if (e.key === "Enter") updateTVShows(); });
        if (genreSelect) genreSelect.addEventListener("change", updateTVShows);
        if (yearSelect) yearSelect.addEventListener("change", updateTVShows);
        
    } else if (currentPage.includes("favourites.html")) {
        renderFavouritesPage();
        setupFavouritesSearch();
        setupGlobalSearch();
        
    } else if (currentPage.includes("movie-detail.html")) {
        loadMovieDetail();
        setupGlobalSearch();
        
    } else if (currentPage.includes("tv-detail.html")) {
        loadTVDetail();
        setupGlobalSearch();
    }
});