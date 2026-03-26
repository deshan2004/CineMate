
const movies = [
    { id: 1, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", badge: "trending", type: "movie", poster: "qJ2tW6WMUDux911r6m7haRef0WH.jpg", detailId: "dark-knight" },
    { id: 2, title: "Mad Max: Fury Road", year: 2015, rating: 8.8, genre: "Action", badge: "trending", type: "movie", poster: "8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", detailId: "mad-max" },
    { id: 3, title: "John Wick", year: 2014, rating: 8.7, genre: "Action", badge: null, type: "movie", poster: "fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", detailId: "john-wick" },
    { id: 4, title: "John Wick: Chapter 2", year: 2017, rating: 8.5, genre: "Action", badge: null, type: "movie", poster: "hXWBc0ioZP3cN4MMLXnIwz7qP4Z.jpg", detailId: "john-wick-2" },
    { id: 5, title: "John Wick: Chapter 3", year: 2019, rating: 8.6, genre: "Action", badge: null, type: "movie", poster: "ziEuG1essDuWuC5lpWUawZBs8dW.jpg", detailId: "john-wick-3" },
    { id: 6, title: "Mission: Impossible - Fallout", year: 2018, rating: 8.7, genre: "Action", badge: "top", type: "movie", poster: "AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", detailId: "mission-impossible-fallout" },
    { id: 7, title: "The Matrix", year: 1999, rating: 8.7, genre: "Action", badge: "classic", type: "movie", poster: "f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", detailId: "matrix" },
    { id: 8, title: "Gladiator", year: 2000, rating: 8.5, genre: "Action", badge: "classic", type: "movie", poster: "g5aTxrcabUfqRcLkP5M3yFpG8sZ.jpg", detailId: "gladiator" },
    { id: 9, title: "The Bourne Ultimatum", year: 2007, rating: 8.4, genre: "Action", badge: null, type: "movie", poster: "tElnYQH4uBYZ5uXfUyE2w2q8pRk.jpg", detailId: "bourne-ultimatum" },
    { id: 10, title: "Casino Royale", year: 2006, rating: 8.4, genre: "Action", badge: null, type: "movie", poster: "u4YyPe3L7sWgYtXqQfN8nRxk0pP.jpg", detailId: "casino-royale" },
    
    { id: 11, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", badge: "trending", type: "movie", poster: "9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", detailId: "inception" },
    { id: 12, title: "Dune: Part Two", year: 2024, rating: 8.5, genre: "Sci-Fi", badge: "new", type: "movie", poster: "8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg", detailId: "dune" },
    { id: 13, title: "Blade Runner 2049", year: 2017, rating: 8.6, genre: "Sci-Fi", badge: null, type: "movie", poster: "gajvu2N00NkH3jfBj98aeu2kG1Q.jpg", detailId: "blade-runner" },
    { id: 14, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", badge: "trending", type: "movie", poster: "gvK2BQLW5c2efdF8WvVRjCqHJlL.jpg", detailId: "interstellar" },
    { id: 15, title: "Arrival", year: 2016, rating: 8.3, genre: "Sci-Fi", badge: null, type: "movie", poster: "hTEx1t6JpWlM4vLqYvLqZf4xNvA.jpg", detailId: "arrival" },
    { id: 16, title: "The Martian", year: 2015, rating: 8.4, genre: "Sci-Fi", badge: null, type: "movie", poster: "5aGhaIHYuQbqlHWvWYqLrZcYp8M.jpg", detailId: "martian" },
    { id: 17, title: "Gravity", year: 2013, rating: 8.2, genre: "Sci-Fi", badge: null, type: "movie", poster: "kXjfJZvYqLrWp8MnBvCxZaLqWpY.jpg", detailId: "gravity" },
    { id: 18, title: "Ex Machina", year: 2014, rating: 8.3, genre: "Sci-Fi", badge: null, type: "movie", poster: "bYqLrWp8MnBvCxZaLqWpYkXjfJ.jpg", detailId: "ex-machina" },
    
    { id: 19, title: "Oppenheimer", year: 2023, rating: 8.9, genre: "Drama", badge: "new", type: "movie", poster: "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", detailId: "oppenheimer" },
    { id: 20, title: "The Shawshank Redemption", year: 1994, rating: 8.3, genre: "Drama", badge: "classic", type: "movie", poster: "q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", detailId: "shawshank" },
    { id: 21, title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Drama", badge: "classic", type: "movie", poster: "d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", detailId: "pulp-fiction" },
    { id: 22, title: "The Godfather", year: 1972, rating: 9.2, genre: "Drama", badge: "classic", type: "movie", poster: "rPdtLWNsZmAtoZl9PK7S2wE3qi4.jpg", detailId: "godfather" },
    { id: 23, title: "The Godfather Part II", year: 1974, rating: 9.0, genre: "Drama", badge: "classic", type: "movie", poster: "bVq65mQzYgLpRcXwNvBmKjHtGy.jpg", detailId: "godfather-2" },
    { id: 24, title: "Fight Club", year: 1999, rating: 8.8, genre: "Drama", badge: "classic", type: "movie", poster: "pB8BM7pdSp6B6Ih7QfH3LcYqMv.jpg", detailId: "fight-club" },
    { id: 25, title: "The Social Network", year: 2010, rating: 8.4, genre: "Drama", badge: null, type: "movie", poster: "n0m1kXqLpWrYtZuIvBcXzAqW.jpg", detailId: "social-network" },
    { id: 26, title: "Whiplash", year: 2014, rating: 8.5, genre: "Drama", badge: null, type: "movie", poster: "6P3cXqLpWrYtZuIvBcXzAqWm.jpg", detailId: "whiplash" },
    
    { id: 27, title: "Parasite", year: 2019, rating: 8.5, genre: "Thriller", badge: "top", type: "movie", poster: "7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", detailId: "parasite" },
    { id: 28, title: "Gone Girl", year: 2014, rating: 8.4, genre: "Thriller", badge: null, type: "movie", poster: "g5I2tUZ3jf4Gdqv6s7s6n3hP1f.jpg", detailId: "gone-girl" },
    { id: 29, title: "Se7en", year: 1995, rating: 8.2, genre: "Thriller", badge: "classic", type: "movie", poster: "6yoghtyTpznpBik8EngEmJskVUO.jpg", detailId: "se7en" },
    { id: 30, title: "Prisoners", year: 2013, rating: 8.1, genre: "Thriller", badge: null, type: "movie", poster: "t6zpTzJqZpPfG7E7nD2sO6TzQYc.jpg", detailId: "prisoners" },
    { id: 31, title: "The Silence of the Lambs", year: 1991, rating: 8.6, genre: "Thriller", badge: "classic", type: "movie", poster: "uLmYqWpRcXzAvBnMkLjhGfDs.jpg", detailId: "silence-lambs" },
    { id: 32, title: "Zodiac", year: 2007, rating: 8.3, genre: "Thriller", badge: null, type: "movie", poster: "yPqLrWmXzAvBnCkLjhGfDsQt.jpg", detailId: "zodiac" },
    
    { id: 33, title: "The Grand Budapest Hotel", year: 2014, rating: 8.1, genre: "Comedy", badge: null, type: "movie", poster: "pBqLrWmXzAvCnMkLjhGfDsQ.jpg", detailId: "grand-budapest" },
    { id: 34, title: "Superbad", year: 2007, rating: 7.9, genre: "Comedy", badge: null, type: "movie", poster: "nCqLrWmXzAvBnMkLjhGfDsQ.jpg", detailId: "superbad" },
    { id: 35, title: "The Hangover", year: 2009, rating: 7.8, genre: "Comedy", badge: null, type: "movie", poster: "mDqLrWmXzAvBnMkLjhGfDsQ.jpg", detailId: "hangover" },
    
    { id: 36, title: "Get Out", year: 2017, rating: 8.2, genre: "Horror", badge: null, type: "movie", poster: "oEqLrWmXzAvBnMkLjhGfDsQ.jpg", detailId: "get-out" },
    { id: 37, title: "Hereditary", year: 2018, rating: 7.9, genre: "Horror", badge: null, type: "movie", poster: "pFrLrWmXzAvBnMkLjhGfDsQ.jpg", detailId: "hereditary" },
    { id: 38, title: "The Conjuring", year: 2013, rating: 7.8, genre: "Horror", badge: null, type: "movie", poster: "qGsLrWmXzAvBnMkLjhGfDsQ.jpg", detailId: "conjuring" }
];

const tvShows = [
    { id: 101, title: "Breaking Bad", year: "2008-2013", rating: 9.5, genre: "Drama", badge: "trending", type: "tv", poster: "ggFHVNu6YYI5L9pCfOacjizRGt.jpg", detailId: "breaking-bad" },
    { id: 102, title: "The Wire", year: "2002-2008", rating: 9.2, genre: "Drama", badge: "top", type: "tv", poster: "4mxUj5EsY3T4b7wFq5m7qVKz8yG.jpg", detailId: "the-wire" },
    { id: 103, title: "Succession", year: "2018-2023", rating: 8.9, genre: "Drama", badge: "new", type: "tv", poster: "9yVYgrGJqRMbS6Jj8z5y5b8hqMp.jpg", detailId: "succession" },
    { id: 104, title: "Better Call Saul", year: "2015-2022", rating: 9.0, genre: "Drama", badge: "top", type: "tv", poster: "fC2HDm5tEJkHkZ8qLpWrYx.jpg", detailId: "better-call-saul" },
    { id: 105, title: "The Sopranos", year: "1999-2007", rating: 9.2, genre: "Drama", badge: "classic", type: "tv", poster: "rLOBuKsjPZ59jQuhVjgIfwDlKYC.jpg", detailId: "sopranos" },
    { id: 106, title: "Mad Men", year: "2007-2015", rating: 8.7, genre: "Drama", badge: "classic", type: "tv", poster: "nPqLrWmXzAvBnMkLjhGfDs.jpg", detailId: "mad-men" },
    { id: 107, title: "The Crown", year: "2016-2023", rating: 8.6, genre: "Drama", badge: null, type: "tv", poster: "oRqLrWmXzAvBnMkLjhGfDs.jpg", detailId: "crown" },
    { id: 108, title: "House of Cards", year: "2013-2018", rating: 8.4, genre: "Drama", badge: null, type: "tv", poster: "pSsLrWmXzAvBnMkLjhGfDs.jpg", detailId: "house-of-cards" },
    
    { id: 109, title: "Stranger Things", year: "2016-2025", rating: 9.1, genre: "Sci-Fi", badge: "trending", type: "tv", poster: "49WJfeN0moxb9IPfGn8AIqMGskD.jpg", detailId: "stranger-things" },
    { id: 110, title: "Black Mirror", year: "2011-2023", rating: 8.8, genre: "Sci-Fi", badge: null, type: "tv", poster: "5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg", detailId: "black-mirror" },
    { id: 111, title: "The Expanse", year: "2015-2022", rating: 8.7, genre: "Sci-Fi", badge: null, type: "tv", poster: "8lB2dslYhbVQI3EwsZ6IhDj5WJp.jpg", detailId: "the-expanse" },
    { id: 112, title: "Westworld", year: "2016-2022", rating: 8.6, genre: "Sci-Fi", badge: null, type: "tv", poster: "qTtLrWmXzAvBnMkLjhGfDs.jpg", detailId: "westworld" },
    { id: 113, title: "The Mandalorian", year: "2019-2024", rating: 8.9, genre: "Sci-Fi", badge: "new", type: "tv", poster: "rUuLrWmXzAvBnMkLjhGfDs.jpg", detailId: "mandalorian" },
    { id: 114, title: "Star Trek: Strange New Worlds", year: "2022-2024", rating: 8.5, genre: "Sci-Fi", badge: "new", type: "tv", poster: "sVvLrWmXzAvBnMkLjhGfDs.jpg", detailId: "star-trek-snw" },
    
    { id: 115, title: "The Office", year: "2005-2013", rating: 9.4, genre: "Comedy", badge: "top", type: "tv", poster: "qWnJwZvXpjp3RcUxtGQDHnQHtji.jpg", detailId: "the-office" },
    { id: 116, title: "Brooklyn Nine-Nine", year: "2013-2021", rating: 8.9, genre: "Comedy", badge: null, type: "tv", poster: "hgRMSOt7a1b8qyQR68vU3JPYkfj.jpg", detailId: "brooklyn-nine-nine" },
    { id: 117, title: "Ted Lasso", year: "2020-2023", rating: 8.7, genre: "Comedy", badge: "new", type: "tv", poster: "3pDJoZ4TtX9NcQ7J3xJXv8L2m9S.jpg", detailId: "ted-lasso" },
    { id: 118, title: "Parks and Recreation", year: "2009-2015", rating: 8.6, genre: "Comedy", badge: "classic", type: "tv", poster: "tWwLrWmXzAvBnMkLjhGfDs.jpg", detailId: "parks-recreation" },
    { id: 119, title: "The Good Place", year: "2016-2020", rating: 8.5, genre: "Comedy", badge: null, type: "tv", poster: "uXxLrWmXzAvBnMkLjhGfDs.jpg", detailId: "good-place" },
    { id: 120, title: "Fleabag", year: "2016-2019", rating: 8.8, genre: "Comedy", badge: "top", type: "tv", poster: "vYyLrWmXzAvBnMkLjhGfDs.jpg", detailId: "fleabag" },
    
    { id: 121, title: "Rick and Morty", year: "2013-2024", rating: 9.3, genre: "Animation", badge: "trending", type: "tv", poster: "8kOWDBK6XlPUzckyHx43kJLQlFk.jpg", detailId: "rick-morty" },
    { id: 122, title: "BoJack Horseman", year: "2014-2020", rating: 8.9, genre: "Animation", badge: null, type: "tv", poster: "pB9L0jAnEQLMKgexq4oc1xkpe0e.jpg", detailId: "bojack-horseman" },
    { id: 123, title: "Arcane", year: "2021-2024", rating: 8.6, genre: "Animation", badge: "new", type: "tv", poster: "fqldf2t8ztc9jwnif2L5jYeOxPZ.jpg", detailId: "arcane" },
    { id: 124, title: "Avatar: The Last Airbender", year: "2005-2008", rating: 9.3, genre: "Animation", badge: "classic", type: "tv", poster: "wZzLrWmXzAvBnMkLjhGfDs.jpg", detailId: "avatar" },
    { id: 125, title: "Attack on Titan", year: "2013-2023", rating: 9.1, genre: "Animation", badge: "top", type: "tv", poster: "xAaLrWmXzAvBnMkLjhGfDs.jpg", detailId: "attack-on-titan" },
    { id: 126, title: "One Punch Man", year: "2015-2019", rating: 8.8, genre: "Animation", badge: null, type: "tv", poster: "yBbLrWmXzAvBnMkLjhGfDs.jpg", detailId: "one-punch-man" },
    
    { id: 127, title: "Mindhunter", year: "2017-2019", rating: 8.6, genre: "Thriller", badge: null, type: "tv", poster: "zCcLrWmXzAvBnMkLjhGfDs.jpg", detailId: "mindhunter" },
    { id: 128, title: "True Detective", year: "2014-2019", rating: 8.9, genre: "Thriller", badge: "top", type: "tv", poster: "aDdLrWmXzAvBnMkLjhGfDs.jpg", detailId: "true-detective" },
    { id: 129, title: "The Night Of", year: "2016", rating: 8.4, genre: "Thriller", badge: null, type: "tv", poster: "bEeLrWmXzAvBnMkLjhGfDs.jpg", detailId: "night-of" },
    
    { id: 130, title: "Game of Thrones", year: "2011-2019", rating: 9.2, genre: "Action", badge: "top", type: "tv", poster: "u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", detailId: "game-of-thrones" },
    { id: 131, title: "The Boys", year: "2019-2024", rating: 8.8, genre: "Action", badge: "trending", type: "tv", poster: "cFfLrWmXzAvBnMkLjhGfDs.jpg", detailId: "the-boys" },
    { id: 132, title: "Daredevil", year: "2015-2018", rating: 8.7, genre: "Action", badge: null, type: "tv", poster: "dGgLrWmXzAvBnMkLjhGfDs.jpg", detailId: "daredevil" }
];

let favourites = [];

function loadFavourites() {
    const saved = localStorage.getItem("cinemate_favourites");
    if (saved) {
        favourites = JSON.parse(saved);
    }
}

function saveFavourites() {
    localStorage.setItem("cinemate_favourites", JSON.stringify(favourites));
}

function isFavourite(itemId) {
    return favourites.some(fav => fav.id === itemId);
}

function addToFavourites(item) {
    if (!isFavourite(item.id)) {
        favourites.push(item);
        saveFavourites();
        showToast(`${item.title} added to favourites!`, "success");
        return true;
    }
    return false;
}

function removeFromFavourites(itemId) {
    const index = favourites.findIndex(fav => fav.id === itemId);
    if (index !== -1) {
        const removed = favourites[index];
        favourites.splice(index, 1);
        saveFavourites();
        showToast(`${removed.title} removed from favourites`, "error");
        return true;
    }
    return false;
}

function toggleFavourite(item) {
    if (isFavourite(item.id)) {
        removeFromFavourites(item.id);
        return false;
    } else {
        addToFavourites(item);
        return true;
    }
}

let toastTimeout;
function showToast(message, type = "success") {
    const existingToast = document.querySelector(".toast");
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 10);
    
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getRatingClass(rating) {
    if (rating >= 8.5) {
        return "high";
    } else if (rating >= 7.0) {
        return "mid";
    } else {
        return "low";
    }
}

function getBadgeHTML(badge) {
    switch (badge) {
        case "trending":
            return `<span class="badge trending">🔥 Trending</span>`;
        case "new":
            return `<span class="badge new">✨ New</span>`;
        case "top":
            return `<span class="badge top">⭐ Top Rated</span>`;
        case "classic":
            return `<span class="badge classic">🎬 Classic</span>`;
        default:
            return "";
    }
}

function createCardHTML(item) {
    const ratingClass = getRatingClass(item.rating);
    const badgeHTML = getBadgeHTML(item.badge);
    const posterUrl = `https://image.tmdb.org/t/p/w500/${item.poster}`;
    const detailPage = item.type === "movie" ? "movie-detail.html" : "tv-detail.html";
    const isFav = isFavourite(item.id);
    
    return `
        <div class="movie-card" data-id="${item.id}" data-type="${item.type}">
            <a href="${detailPage}?id=${item.detailId}" class="movie-link">
                <div class="movie-poster">
                    <img src="${posterUrl}" alt="${item.title}" loading="lazy">
                    <div class="poster-overlay">
                        ${badgeHTML}
                        <span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>
                    </div>
                </div>
                <div class="movie-info">
                    <div class="movie-title">
                        ${item.title.length > 25 ? item.title.substring(0, 22) + '...' : item.title}
                        <span class="movie-year">${item.year}</span>
                    </div>
                    <div class="movie-meta">
                        <span class="movie-rating ${ratingClass}"><i class="fas fa-star"></i> ${item.rating}</span>
                        <span class="movie-genre">${item.genre}</span>
                        <i class="fas ${isFav ? 'fa-heart active' : 'fa-heart'} fav-icon" data-id="${item.id}" data-title="${item.title}" data-type="${item.type}"></i>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function createEmptyStateHTML(message = "No items found") {
    return `
        <div class="empty-state">
            <i class="fas fa-film"></i>
            <h3>${message}</h3>
            <p>Try adjusting your search or filters</p>
        </div>
    `;
}

function renderCards(dataArray, targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;
    
    if (dataArray.length === 0) {
        container.innerHTML = createEmptyStateHTML();
        return;
    }
    
    let allCardsHTML = "";
    for (let i = 0; i < dataArray.length; i++) {
        allCardsHTML += createCardHTML(dataArray[i]);
    }
    container.innerHTML = allCardsHTML;
    
    attachFavouriteListeners();
}

function attachFavouriteListeners() {
    document.querySelectorAll('.fav-icon').forEach(icon => {
        icon.removeEventListener('click', handleFavouriteClick);
        icon.addEventListener('click', handleFavouriteClick);
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
        if (isNowFavourite) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    }
}

let currentGenreFilter = "All";
let currentSearchQuery = "";
let currentYearFilter = "All";

function filterItems(items) {
    return items.filter(item => {
        if (currentGenreFilter !== "All" && item.genre !== currentGenreFilter) {
            return false;
        }
        
        if (currentYearFilter !== "All" && typeof item.year === "number") {
            if (item.year !== parseInt(currentYearFilter)) {
                return false;
            }
        }
        
        if (currentSearchQuery) {
            return item.title.toLowerCase().includes(currentSearchQuery.toLowerCase());
        }
        
        return true;
    });
}

function setupFilters() {
    const searchInput = document.querySelector('.search-box input');
    const genreSelect = document.querySelector('.filter-select:first-of-type');
    const yearSelect = document.querySelector('.filter-select:last-of-type');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                currentSearchQuery = searchInput.value;
                applyFilters();
            }
        });
    }
    
    if (genreSelect) {
        genreSelect.addEventListener('change', (e) => {
            currentGenreFilter = e.target.value;
            applyFilters();
        });
    }
    
    if (yearSelect) {
        yearSelect.addEventListener('change', (e) => {
            currentYearFilter = e.target.value;
            applyFilters();
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchInput) {
                currentSearchQuery = searchInput.value;
                applyFilters();
            }
        });
    }
}

function applyFilters() {
    const currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html" || currentPage === "") {
        const filtered = filterItems(movies.filter(m => m.rating > 8.0));
        renderCards(filtered, "movies-grid");
    } else if (currentPage === "movie.html") {
        const filtered = filterItems(movies);
        renderCards(filtered, "movies-grid");
    } else if (currentPage === "tvshows.html") {
        const filtered = filterItems(tvShows);
        renderCards(filtered, "movies-grid");
    }
}

function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const genre = btn.textContent;
            currentGenreFilter = genre === "All" ? "All" : genre;
            applyFilters();
        });
    });
}

function setupTabFilters() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.dataset.filter || tab.textContent.toLowerCase();
            
            if (filter === 'all' || filter === 'all') {
                currentGenreFilter = "All";
            } else if (filter === 'trending') {
                currentGenreFilter = "All";
            } else if (filter === 'new') {
                currentGenreFilter = "All";
            } else if (filter === 'top') {
                currentGenreFilter = "All";
            }
            
            applyFilters();
        });
    });
}

function renderFavouritesPage() {
    const container = document.getElementById("favourites-grid");
    if (!container) return;
    
    if (favourites.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>No favourites yet</h3>
                <p>Start adding movies and TV shows to your favourites by clicking the heart icon</p>
            </div>
        `;
        return;
    }
    
    renderCards(favourites, "favourites-grid");
}

function setupFavouritesSearch() {
    const searchInput = document.getElementById("favourites-search");
    if (!searchInput) return;
    
    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = favourites.filter(item => 
            item.title.toLowerCase().includes(query)
        );
        renderCards(filtered, "favourites-grid");
    });
}

function initPage() {
    const currentPage = window.location.pathname.split("/").pop();
    
    loadFavourites();
    
    if (currentPage === "index.html" || currentPage === "" || 
        currentPage === "movie.html" || currentPage === "tvshows.html") {
        setupFilters();
        setupCategoryFilters();
        setupTabFilters();
    }
    
    if (currentPage === "index.html" || currentPage === "") {
        const highRatedMovies = movies.filter(m => m.rating > 8.0);
        renderCards(highRatedMovies, "movies-grid");
    } else if (currentPage === "movie.html") {
        renderCards(movies, "movies-grid");
    } else if (currentPage === "tvshows.html") {
        renderCards(tvShows, "movies-grid");
    } else if (currentPage === "favourites.html") {
        renderFavouritesPage();
        setupFavouritesSearch();
    }
}

document.addEventListener("DOMContentLoaded", initPage);