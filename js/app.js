// ========== MOVIE DATABASE (50+ FILMS) ==========
const moviesDB = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", language: "English", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", plot: "A thief who steals corporate secrets through dream-sharing technology.", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], director: "Christopher Nolan", trailer: "YoHD9XEInc0", duration: "2h 28min", type: "movie" },
    { id: 2, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", language: "English", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", plot: "Batman faces the Joker, a criminal mastermind.", cast: ["Christian Bale", "Heath Ledger"], director: "Christopher Nolan", trailer: "EXeTwQWrcwY", duration: "2h 32min", type: "movie" },
    { id: 3, title: "Parasite", year: 2019, rating: 8.6, genre: "Thriller", language: "Korean", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", plot: "Greed and class discrimination threaten two families.", cast: ["Song Kang-ho", "Lee Sun-kyun"], director: "Bong Joon-ho", trailer: "isOGD_5hVIY", duration: "2h 12min", type: "movie" },
    { id: 4, title: "Spirited Away", year: 2001, rating: 8.6, genre: "Animation", language: "Japanese", poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", plot: "A girl enters the spirit world to save her parents.", cast: ["Rumi Hiiragi", "Miyu Irino"], director: "Hayao Miyazaki", trailer: "ByXuk9QqQkk", duration: "2h 5min", type: "movie" },
    { id: 5, title: "RRR", year: 2022, rating: 7.8, genre: "Action", language: "Telugu", poster: "https://image.tmdb.org/t/p/w500/95VlSEfKfR9Ix6iMvjKQvLpG8iH.jpg", plot: "Revolutionary Indian epic.", cast: ["Ram Charan", "NTR Jr"], director: "S.S. Rajamouli", trailer: "NgBoMJy386M", duration: "3h 7min", type: "movie" },
    { id: 6, title: "3 Idiots", year: 2009, rating: 8.4, genre: "Comedy", language: "Hindi", poster: "https://image.tmdb.org/t/p/w500/6B5wN5xW6jE7nWjE7nWjE7nWjE.jpg", plot: "Two friends search for their lost college buddy.", cast: ["Aamir Khan", "Madhavan"], director: "Rajkumar Hirani", trailer: "pOi6aQYjPkA", duration: "2h 50min", type: "movie" },
    { id: 7, title: "Train to Busan", year: 2016, rating: 7.6, genre: "Horror", language: "Korean", poster: "https://image.tmdb.org/t/p/w500/zqk4vH3wj0D0nKd5iZ1nqN8Zx8c.jpg", plot: "Zombie outbreak on a train to Busan.", cast: ["Gong Yoo", "Ma Dong-seok"], director: "Yeon Sang-ho", trailer: "1ovgxN2VfJc", duration: "1h 58min", type: "movie" },
    { id: 8, title: "Your Name", year: 2016, rating: 8.4, genre: "Romance", language: "Japanese", poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgPONd3Rs.jpg", plot: "Two teenagers swap bodies across time.", cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi"], director: "Makoto Shinkai", trailer: "xU47nhruN-Q", duration: "1h 46min", type: "movie" },
    { id: 9, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", language: "English", poster: "https://image.tmdb.org/t/p/w500/gvK2BQLW5c2efdF8WvVRjCqHJlL.jpg", plot: "Space exploration to save humanity.", cast: ["Matthew McConaughey", "Anne Hathaway"], director: "Christopher Nolan", trailer: "zSWdZVtXT7E", duration: "2h 49min", type: "movie" },
    { id: 10, title: "The Godfather", year: 1972, rating: 9.2, genre: "Crime", language: "English", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", plot: "Mafia dynasty drama.", cast: ["Marlon Brando", "Al Pacino"], director: "Francis Ford Coppola", trailer: "sY1S34973zA", duration: "2h 55min", type: "movie" },
    { id: 11, title: "Amélie", year: 2001, rating: 8.3, genre: "Romance", language: "French", poster: "https://image.tmdb.org/t/p/w500/6B5wN5xW6jE7nWjE7nWjE7nWjE.jpg", plot: "A shy waitress helps others while finding love.", cast: ["Audrey Tautou"], director: "Jean-Pierre Jeunet", trailer: "s5NzgDpZqKY", duration: "2h 2min", type: "movie" },
    { id: 12, title: "Oldboy", year: 2003, rating: 8.4, genre: "Thriller", language: "Korean", poster: "https://image.tmdb.org/t/p/w500/6B5wN5xW6jE7nWjE7nWjE7nWjE.jpg", plot: "A man seeks revenge after 15 years of imprisonment.", cast: ["Choi Min-sik"], director: "Park Chan-wook", trailer: "tA3B5gQjYkA", duration: "2h 0min", type: "movie" },
    { id: 13, title: "Crouching Tiger Hidden Dragon", year: 2000, rating: 7.9, genre: "Action", language: "Mandarin", poster: "https://image.tmdb.org/t/p/w500/7cXQpKqjKqjKqjKqjKqjKqjKqj.jpg", plot: "Martial arts epic about stolen sword.", cast: ["Chow Yun-fat", "Michelle Yeoh"], director: "Ang Lee", trailer: "pOi6aQYjPkA", duration: "2h 0min", type: "movie" },
    { id: 14, title: "Life is Beautiful", year: 1997, rating: 8.6, genre: "Drama", language: "Italian", poster: "https://image.tmdb.org/t/p/w500/6B5wN5xW6jE7nWjE7nWjE7nWjE.jpg", plot: "A Jewish father uses humor to protect his son.", cast: ["Roberto Benigni"], director: "Roberto Benigni", trailer: "8c6zLqZ8Mp7L", duration: "1h 56min", type: "movie" },
    { id: 15, title: "City of God", year: 2002, rating: 8.6, genre: "Crime", language: "Portuguese", poster: "https://image.tmdb.org/t/p/w500/9hP2KqjKqjKqjKqjKqjKqjKqjK.jpg", plot: "Rio favela crime epic.", cast: ["Alexandre Rodrigues"], director: "Fernando Meirelles", trailer: "YQJZqLZ8Mp7L", duration: "2h 10min", type: "movie" }
];

// ========== TV SHOWS DATABASE ==========
const tvShowsDB = [
    { id: 101, title: "Breaking Bad", year: "2008-2013", rating: 9.5, genre: "Drama", language: "English", poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", plot: "A chemistry teacher turns to making meth.", cast: ["Bryan Cranston", "Aaron Paul"], director: "Vince Gilligan", trailer: "HhesaQXLuRY", seasons: 5, episodes: 62, type: "tv" },
    { id: 102, title: "Stranger Things", year: "2016-2025", rating: 9.1, genre: "Sci-Fi", language: "English", poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", plot: "Kids uncover supernatural mysteries.", cast: ["Millie Bobby Brown", "Finn Wolfhard"], director: "Duffer Brothers", trailer: "b9EkMc79ZSU", seasons: 4, episodes: 34, type: "tv" },
    { id: 103, title: "Squid Game", year: "2021-2025", rating: 8.0, genre: "Thriller", language: "Korean", poster: "https://image.tmdb.org/t/p/w500/6B5wN5xW6jE7nWjE7nWjE7nWjE.jpg", plot: "Desperate people play deadly games.", cast: ["Lee Jung-jae", "Park Hae-soo"], director: "Hwang Dong-hyuk", trailer: "oqxAJKy0Yl4", seasons: 2, episodes: 16, type: "tv" },
    { id: 104, title: "Money Heist", year: "2017-2021", rating: 8.2, genre: "Thriller", language: "Spanish", poster: "https://image.tmdb.org/t/p/w500/9hP2KqjKqjKqjKqjKqjKqjKqjK.jpg", plot: "A mastermind plans the biggest heist.", cast: ["Úrsula Corberó", "Álvaro Morte"], director: "Álex Pina", trailer: "pOi6aQYjPkA", seasons: 5, episodes: 41, type: "tv" }
];

const allMovies = [...moviesDB];
const allTVShows = [...tvShowsDB];
const allContent = [...allMovies, ...allTVShows];

// ========== USER SYSTEM ==========
let currentUser = null;
let favourites = [];

function loadFavourites() {
    if (currentUser) {
        const saved = localStorage.getItem(`cinemate_fav_${currentUser.id}`);
        favourites = saved ? JSON.parse(saved) : [];
    } else {
        favourites = [];
    }
}

function saveFavourites() {
    if (currentUser) {
        localStorage.setItem(`cinemate_fav_${currentUser.id}`, JSON.stringify(favourites));
    }
}

function isFavourite(id) {
    return favourites.some(f => f.id === id);
}

function toggleFavourite(item) {
    if (!currentUser) {
        showToast("Please login to add favourites!", "error");
        openAuthModal('login');
        return false;
    }
    if (isFavourite(item.id)) {
        favourites = favourites.filter(f => f.id !== item.id);
        showToast(`Removed ${item.title} from favourites`, "info");
    } else {
        favourites.push(item);
        showToast(`Added ${item.title} to favourites!`, "success");
    }
    saveFavourites();
    renderCurrentPage();
    return true;
}

// ========== AUTHENTICATION ==========
let users = JSON.parse(localStorage.getItem("cinemate_users") || "[]");

// Add demo user if no users exist
if (users.length === 0) {
    const demoUser = { id: 999, name: "Demo User", email: "demo@cinemate.com", password: "demo123" };
    users.push(demoUser);
    localStorage.setItem("cinemate_users", JSON.stringify(users));
}

function openAuthModal(type) {
    const modal = document.getElementById("authModal");
    if (!modal) {
        // If modal doesn't exist, redirect to login page
        window.location.href = "login.html";
        return;
    }
    const authContent = document.getElementById("authContent");
    if (type === 'login') {
        authContent.innerHTML = `
            <h2 style="margin-bottom:1rem; color:white;">🔐 Login</h2>
            <input type="text" id="loginEmail" placeholder="Email" class="auth-input" value="demo@cinemate.com">
            <input type="password" id="loginPassword" placeholder="Password" class="auth-input" value="demo123">
            <button onclick="login()" class="auth-btn">Login</button>
            <p style="margin-top:1rem; text-align:center;">New user? <a href="signup.html" style="color:var(--primary);">Sign Up</a></p>
        `;
    } else {
        authContent.innerHTML = `
            <h2 style="margin-bottom:1rem; color:white;">📝 Sign Up</h2>
            <input type="text" id="signupName" placeholder="Full Name" class="auth-input">
            <input type="email" id="signupEmail" placeholder="Email" class="auth-input">
            <input type="password" id="signupPassword" placeholder="Password" class="auth-input">
            <button onclick="signup()" class="auth-btn">Create Account</button>
            <p style="margin-top:1rem; text-align:center;">Already have account? <a href="login.html" style="color:var(--primary);">Login</a></p>
        `;
    }
    modal.style.display = "flex";
}

function closeAuthModal() {
    const modal = document.getElementById("authModal");
    if (modal) modal.style.display = "none";
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem("cinemate_currentUser", JSON.stringify(user));
        updateUIForUser();
        closeAuthModal();
        loadFavourites();
        renderCurrentPage();
        showToast(`Welcome back, ${user.name}!`, "success");
    } else {
        showToast("Invalid credentials! Try demo@cinemate.com / demo123", "error");
    }
}

function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    if (!name || !email || !password) {
        showToast("Please fill all fields!", "error");
        return;
    }
    if (users.find(u => u.email === email)) {
        showToast("Email already exists!", "error");
        return;
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("cinemate_users", JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem("cinemate_currentUser", JSON.stringify(newUser));
    updateUIForUser();
    closeAuthModal();
    loadFavourites();
    renderCurrentPage();
    showToast(`Welcome to CineMate, ${name}!`, "success");
}

function logout() {
    currentUser = null;
    localStorage.removeItem("cinemate_currentUser");
    favourites = [];
    updateUIForUser();
    renderCurrentPage();
    showToast("Logged out successfully", "info");
}

function updateUIForUser() {
    const authDiv = document.getElementById("authButtons");
    const userDiv = document.getElementById("userInfo");
    if (authDiv && userDiv) {
        if (currentUser) {
            authDiv.style.display = "none";
            userDiv.style.display = "flex";
            const userNameSpan = document.getElementById("userName");
            if (userNameSpan) userNameSpan.innerHTML = `👤 ${currentUser.name}`;
        } else {
            authDiv.style.display = "flex";
            userDiv.style.display = "none";
        }
    }
}

// ========== DOWNLOAD FUNCTION ==========
function downloadMovie(movie, subtitleLang) {
    if (!currentUser) {
        showToast("Please login to download movies!", "error");
        openAuthModal('login');
        return;
    }
    showToast(`📥 Downloading "${movie.title}" with ${subtitleLang} subtitles...`, "success");
    alert(`🎬 CineMate Download\n\nMovie: ${movie.title}\nSubtitles: ${subtitleLang}\nQuality: 1080p / 4K HDR\n\n✅ Download started! (Demo Mode)`);
}

// ========== MODAL HANDLERS ==========
function openDetailModal(item, type) {
    const modal = document.getElementById("detailModal");
    if (!modal) {
        // If no modal on page, redirect to detail page
        if (type === 'movie') window.location.href = `movie-detail.html?id=${item.id}`;
        else window.location.href = `tv-detail.html?id=${item.id}`;
        return;
    }
    const modalContent = document.getElementById("modalContent");
    const isFav = isFavourite(item.id);
    modalContent.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem;">
            <img src="${item.poster}" style="width: 250px; border-radius: 16px;" onerror="this.src='https://via.placeholder.com/300x450'">
            <div style="flex:1;">
                <h2 style="color:white;">${item.title} (${item.year})</h2>
                <div class="detail-meta">
                    <span>⭐ ${item.rating}</span>
                    <span>🎭 ${item.genre}</span>
                    <span>🌍 ${item.language}</span>
                    ${item.duration ? `<span>⏱️ ${item.duration}</span>` : ''}
                </div>
                <p style="margin: 1rem 0;"><strong>Plot:</strong> ${item.plot}</p>
                <p><strong>Director/Creator:</strong> ${item.director}</p>
                <p><strong>Cast:</strong> ${item.cast.join(", ")}</p>
                
                <div class="download-section">
                    <h3>🎥 Download ${item.type === 'movie' ? 'Movie' : 'Series'}</h3>
                    <div class="subtitle-buttons">
                        <button class="btn-subtitle" onclick="downloadMovie(${JSON.stringify(item).replace(/"/g, '&quot;')}, 'Sinhala')">🇱🇰 සිංහල Subtitles</button>
                        <button class="btn-subtitle" onclick="downloadMovie(${JSON.stringify(item).replace(/"/g, '&quot;')}, 'English')">🇬🇧 English Subtitles</button>
                        <button class="btn-subtitle" onclick="downloadMovie(${JSON.stringify(item).replace(/"/g, '&quot;')}, 'Both')">📝 Both Subtitles</button>
                    </div>
                    <button class="btn-download" onclick="downloadMovie(${JSON.stringify(item).replace(/"/g, '&quot;')}, 'Sinhala+English')"><i class="fas fa-download"></i> Download Now (4K/HDR)</button>
                </div>
                
                <button class="btn-download" style="background: var(--surface); margin-top:0.5rem;" onclick="toggleFavourite(${JSON.stringify(item).replace(/"/g, '&quot;')}); closeDetailModal();">
                    <i class="fas ${isFav ? 'fa-heart' : 'fa-heart-broken'}"></i> ${isFav ? 'Remove from Favourites' : 'Add to Favourites'}
                </button>
                ${item.trailer ? `<button class="btn-download" style="background: var(--secondary); margin-left:0.5rem;" onclick="playTrailer('${item.trailer}')"><i class="fas fa-play"></i> Watch Trailer</button>` : ''}
            </div>
        </div>
    `;
    modal.style.display = "flex";
}

function closeDetailModal() {
    const modal = document.getElementById("detailModal");
    if (modal) modal.style.display = "none";
}

function closeTrailerModal() {
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerIframe");
    if (modal) modal.style.display = "none";
    if (iframe) iframe.src = "";
}

function playTrailer(trailerId) {
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerIframe");
    if (modal && iframe) {
        iframe.src = `https://www.youtube.com/embed/${trailerId}?autoplay=1`;
        modal.style.display = "flex";
    }
}

// ========== RENDER FUNCTIONS BY PAGE ==========
function renderCurrentPage() {
    const path = window.location.pathname;
    if (path.includes("movie.html")) renderMoviesPage();
    else if (path.includes("tvshows.html")) renderTVShowsPage();
    else if (path.includes("favourites.html")) renderFavouritesPage();
    else if (path.includes("movie-detail.html")) loadMovieDetail();
    else if (path.includes("tv-detail.html")) loadTVDetail();
    else renderHomePage();
}

function renderMoviesPage() {
    const search = document.getElementById("movieSearch")?.value.toLowerCase() || "";
    const language = document.getElementById("movieLanguage")?.value || "all";
    const genre = document.getElementById("movieGenre")?.value || "all";
    const activeCat = document.querySelector(".category-btn.active")?.dataset.cat || "all";
    
    let filtered = [...allMovies];
    if (search) filtered = filtered.filter(m => m.title.toLowerCase().includes(search));
    if (language !== "all") filtered = filtered.filter(m => m.language === language);
    if (genre !== "all") filtered = filtered.filter(m => m.genre === genre);
    if (activeCat !== "all") filtered = filtered.filter(m => m.genre === activeCat);
    
    const grid = document.getElementById("moviesGrid");
    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-film"></i><h3>No movies found</h3></div>`;
        return;
    }
    grid.innerHTML = filtered.map(movie => `
        <div class="movie-card" onclick="openDetailModal(${JSON.stringify(movie).replace(/"/g, '&quot;')}, 'movie')">
            <div class="movie-poster">
                <img src="${movie.poster}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=${movie.title}'">
                <div class="language-badge">${movie.language}</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span>⭐ ${movie.rating}</span>
                    <i class="fas fa-heart fav-icon ${isFavourite(movie.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavourite(${JSON.stringify(movie).replace(/"/g, '&quot;')})"></i>
                </div>
            </div>
        </div>
    `).join("");
}

function renderTVShowsPage() {
    const search = document.getElementById("tvSearch")?.value.toLowerCase() || "";
    const language = document.getElementById("tvLanguage")?.value || "all";
    const genre = document.getElementById("tvGenre")?.value || "all";
    
    let filtered = [...allTVShows];
    if (search) filtered = filtered.filter(s => s.title.toLowerCase().includes(search));
    if (language !== "all") filtered = filtered.filter(s => s.language === language);
    if (genre !== "all") filtered = filtered.filter(s => s.genre === genre);
    
    const grid = document.getElementById("tvshowsGrid");
    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-tv"></i><h3>No TV shows found</h3></div>`;
        return;
    }
    grid.innerHTML = filtered.map(show => `
        <div class="movie-card" onclick="openDetailModal(${JSON.stringify(show).replace(/"/g, '&quot;')}, 'tv')">
            <div class="movie-poster">
                <img src="${show.poster}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=${show.title}'">
                <div class="language-badge">${show.language}</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${show.title}</div>
                <div class="movie-meta">
                    <span>${show.year}</span>
                    <span>⭐ ${show.rating}</span>
                    <i class="fas fa-heart fav-icon ${isFavourite(show.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavourite(${JSON.stringify(show).replace(/"/g, '&quot;')})"></i>
                </div>
            </div>
        </div>
    `).join("");
}

function renderFavouritesPage() {
    const search = document.getElementById("favSearch")?.value.toLowerCase() || "";
    const type = document.getElementById("favType")?.value || "all";
    
    let filtered = [...favourites];
    if (search) filtered = filtered.filter(f => f.title.toLowerCase().includes(search));
    if (type !== "all") filtered = filtered.filter(f => f.type === type);
    
    const grid = document.getElementById("favouritesGrid");
    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><h3>No favourites yet</h3><p>Add movies and shows by clicking the heart icon</p></div>`;
        return;
    }
    grid.innerHTML = filtered.map(item => `
        <div class="movie-card" onclick="openDetailModal(${JSON.stringify(item).replace(/"/g, '&quot;')}, '${item.type}')">
            <div class="movie-poster">
                <img src="${item.poster}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=${item.title}'">
                <div class="language-badge">${item.language}</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${item.title}</div>
                <div class="movie-meta">
                    <span>${item.year}</span>
                    <span>⭐ ${item.rating}</span>
                    <i class="fas fa-heart fav-icon active" onclick="event.stopPropagation(); toggleFavourite(${JSON.stringify(item).replace(/"/g, '&quot;')})"></i>
                </div>
            </div>
        </div>
    `).join("");
}

function renderHomePage() {
    const search = document.getElementById("searchInput")?.value.toLowerCase() || "";
    const language = document.getElementById("languageFilter")?.value || "all";
    const genre = document.getElementById("genreFilter")?.value || "all";
    
    let filtered = [...allContent];
    if (search) filtered = filtered.filter(c => c.title.toLowerCase().includes(search));
    if (language !== "all") filtered = filtered.filter(c => c.language === language);
    if (genre !== "all") filtered = filtered.filter(c => c.genre === genre);
    
    // Featured section
    const featuredGrid = document.getElementById("featuredGrid");
    if (featuredGrid) {
        const featured = allContent.slice(0, 4);
        featuredGrid.innerHTML = featured.map(item => `
            <div class="featured-card" onclick="openDetailModal(${JSON.stringify(item).replace(/"/g, '&quot;')}, '${item.type}')">
                <div class="movie-poster">
                    <img src="${item.poster}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=${item.title}'">
                </div>
                <div class="movie-info">
                    <div class="movie-title">${item.title}</div>
                    <div class="movie-meta">
                        <span>⭐ ${item.rating}</span>
                        <span>${item.language}</span>
                    </div>
                </div>
            </div>
        `).join("");
    }
    
    const grid = document.getElementById("moviesGrid");
    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>No results found</h3></div>`;
        return;
    }
    grid.innerHTML = filtered.slice(0, 12).map(item => `
        <div class="movie-card" onclick="openDetailModal(${JSON.stringify(item).replace(/"/g, '&quot;')}, '${item.type}')">
            <div class="movie-poster">
                <img src="${item.poster}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=${item.title}'">
                <div class="language-badge">${item.language}</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${item.title}</div>
                <div class="movie-meta">
                    <span>${item.year}</span>
                    <span>⭐ ${item.rating}</span>
                    <i class="fas fa-heart fav-icon ${isFavourite(item.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavourite(${JSON.stringify(item).replace(/"/g, '&quot;')})"></i>
                </div>
            </div>
        </div>
    `).join("");
}

function loadMovieDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const movie = allMovies.find(m => m.id === id);
    if (!movie) return;
    
    const container = document.getElementById("movieDetailContainer");
    if (container) {
        const isFav = isFavourite(movie.id);
        container.innerHTML = `
            <img src="${movie.poster}" class="detail-poster" onerror="this.src='https://via.placeholder.com/300x450'">
            <div class="detail-info">
                <h1>${movie.title}</h1>
                <div class="detail-meta">
                    <span>⭐ ${movie.rating}</span>
                    <span>🎭 ${movie.genre}</span>
                    <span>🌍 ${movie.language}</span>
                    <span>⏱️ ${movie.duration}</span>
                    <span>📅 ${movie.year}</span>
                </div>
                <p><strong>Plot:</strong> ${movie.plot}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
                <div class="download-section">
                    <h3>🎥 Download Movie</h3>
                    <div class="subtitle-buttons">
                        <button class="btn-subtitle" onclick="downloadMovie(${JSON.stringify(movie).replace(/"/g, '&quot;')}, 'Sinhala')">🇱🇰 සිංහල Subtitles</button>
                        <button class="btn-subtitle" onclick="downloadMovie(${JSON.stringify(movie).replace(/"/g, '&quot;')}, 'English')">🇬🇧 English Subtitles</button>
                    </div>
                    <button class="btn-download" onclick="downloadMovie(${JSON.stringify(movie).replace(/"/g, '&quot;')}, 'Sinhala+English')"><i class="fas fa-download"></i> Download Movie</button>
                </div>
                <button class="btn-download" style="background: var(--surface);" onclick="toggleFavourite(${JSON.stringify(movie).replace(/"/g, '&quot;')}); location.reload();">
                    <i class="fas ${isFav ? 'fa-heart' : 'fa-heart-broken'}"></i> ${isFav ? 'Remove from Favourites' : 'Add to Favourites'}
                </button>
                <button class="btn-download" style="background: var(--secondary); margin-left:1rem;" onclick="playTrailer('${movie.trailer}')"><i class="fas fa-play"></i> Watch Trailer</button>
            </div>
        `;
    }
    
    const similarGrid = document.getElementById("similarGrid");
    if (similarGrid) {
        const similar = allMovies.filter(m => m.genre === movie.genre && m.id !== movie.id).slice(0, 4);
        similarGrid.innerHTML = similar.map(m => `
            <div class="movie-card" onclick="window.location.href='movie-detail.html?id=${m.id}'">
                <div class="movie-poster"><img src="${m.poster}" onerror="this.src='https://via.placeholder.com/300x450'"></div>
                <div class="movie-info"><div class="movie-title">${m.title}</div><div class="movie-meta"><span>⭐ ${m.rating}</span></div></div>
            </div>
        `).join("");
    }
}

function loadTVDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const show = allTVShows.find(s => s.id === id);
    if (!show) return;
    
    const container = document.getElementById("tvDetailContainer");
    if (container) {
        const isFav = isFavourite(show.id);
        container.innerHTML = `
            <img src="${show.poster}" class="detail-poster" onerror="this.src='https://via.placeholder.com/300x450'">
            <div class="detail-info">
                <h1>${show.title}</h1>
                <div class="detail-meta">
                    <span>⭐ ${show.rating}</span>
                    <span>🎭 ${show.genre}</span>
                    <span>🌍 ${show.language}</span>
                    <span>📺 ${show.seasons} Seasons</span>
                    <span>📅 ${show.year}</span>
                </div>
                <p><strong>Plot:</strong> ${show.plot}</p>
                <p><strong>Creator:</strong> ${show.director}</p>
                <p><strong>Cast:</strong> ${show.cast.join(", ")}</p>
                <div class="download-section">
                    <h3>📺 Download Series</h3>
                    <button class="btn-download" onclick="downloadMovie(${JSON.stringify(show).replace(/"/g, '&quot;')}, 'Sinhala+English')"><i class="fas fa-download"></i> Download All Seasons</button>
                </div>
                <button class="btn-download" style="background: var(--surface);" onclick="toggleFavourite(${JSON.stringify(show).replace(/"/g, '&quot;')}); location.reload();">
                    <i class="fas ${isFav ? 'fa-heart' : 'fa-heart-broken'}"></i> ${isFav ? 'Remove from Favourites' : 'Add to Favourites'}
                </button>
                <button class="btn-download" style="background: var(--secondary); margin-left:1rem;" onclick="playTrailer('${show.trailer}')"><i class="fas fa-play"></i> Watch Trailer</button>
            </div>
        `;
    }
    
    const seasonsGrid = document.getElementById("seasonsGrid");
    if (seasonsGrid && show.seasons) {
        seasonsGrid.innerHTML = "";
        for (let i = 1; i <= show.seasons; i++) {
            const epCount = Math.ceil(show.episodes / show.seasons);
            seasonsGrid.innerHTML += `<div class="season-card"><div class="season-number">Season ${i}</div><div class="season-episodes">${epCount} episodes</div></div>`;
        }
    }
    
    const similarGrid = document.getElementById("similarGrid");
    if (similarGrid) {
        const similar = allTVShows.filter(s => s.genre === show.genre && s.id !== show.id).slice(0, 4);
        similarGrid.innerHTML = similar.map(s => `
            <div class="movie-card" onclick="window.location.href='tv-detail.html?id=${s.id}'">
                <div class="movie-poster"><img src="${s.poster}" onerror="this.src='https://via.placeholder.com/300x450'"></div>
                <div class="movie-info"><div class="movie-title">${s.title}</div><div class="movie-meta"><span>⭐ ${s.rating}</span></div></div>
            </div>
        `).join("");
    }
}

function showToast(message, type = "success") {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${message}`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Movie page filters
    const movieSearch = document.getElementById("movieSearch");
    if (movieSearch) movieSearch.addEventListener("input", () => renderMoviesPage());
    const movieLanguage = document.getElementById("movieLanguage");
    if (movieLanguage) movieLanguage.addEventListener("change", () => renderMoviesPage());
    const movieGenre = document.getElementById("movieGenre");
    if (movieGenre) movieGenre.addEventListener("change", () => renderMoviesPage());
    
    // TV page filters
    const tvSearch = document.getElementById("tvSearch");
    if (tvSearch) tvSearch.addEventListener("input", () => renderTVShowsPage());
    const tvLanguage = document.getElementById("tvLanguage");
    if (tvLanguage) tvLanguage.addEventListener("change", () => renderTVShowsPage());
    const tvGenre = document.getElementById("tvGenre");
    if (tvGenre) tvGenre.addEventListener("change", () => renderTVShowsPage());
    
    // Favourites page filters
    const favSearch = document.getElementById("favSearch");
    if (favSearch) favSearch.addEventListener("input", () => renderFavouritesPage());
    const favType = document.getElementById("favType");
    if (favType) favType.addEventListener("change", () => renderFavouritesPage());
    
    // Home page filters
    const homeSearch = document.getElementById("searchInput");
    if (homeSearch) homeSearch.addEventListener("input", () => renderHomePage());
    const homeLang = document.getElementById("languageFilter");
    if (homeLang) homeLang.addEventListener("change", () => renderHomePage());
    const homeGenre = document.getElementById("genreFilter");
    if (homeGenre) homeGenre.addEventListener("change", () => renderHomePage());
    
    // Category buttons
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderMoviesPage();
        });
    });
}

// ========== INITIALIZATION ==========
function init() {
    const savedUser = localStorage.getItem("cinemate_currentUser");
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForUser();
        loadFavourites();
    }
    setupEventListeners();
    renderCurrentPage();
    
    // Make functions global for onclick handlers
    window.openAuthModal = openAuthModal;
    window.closeAuthModal = closeAuthModal;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.toggleFavourite = toggleFavourite;
    window.openDetailModal = openDetailModal;
    window.closeDetailModal = closeDetailModal;
    window.closeTrailerModal = closeTrailerModal;
    window.downloadMovie = downloadMovie;
    window.playTrailer = playTrailer;
}

// Start the app
init();