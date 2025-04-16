// Movie data with extended information
const movies = [
  {
      id: 1,
      title: "Dune: Part Two",
      image: "https://images.unsplash.com/photo-1547700055-b61cacebece9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Sci-Fi",
      rating: 4.8,
      type: "movie",
      year: 2024,
      duration: "166 min",
      description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      isNew: true,
      isTrending: true
  },
  {
      id: 2,
      title: "The Batman",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Action",
      rating: 4.5,
      type: "movie",
      year: 2022,
      duration: "176 min",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
      isNew: false,
      isTrending: true
  },
  {
      id: 3,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2925&ixlib=rb-4.0.3",
      category: "Thriller",
      rating: 4.9,
      type: "tv",
      year: 2022,
      duration: "4 Seasons",
      description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
      cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
      isNew: true,
      isTrending: true
  },
  {
      id: 4,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=3070&ixlib=rb-4.0.3",
      category: "Sci-Fi",
      rating: 4.7,
      type: "movie",
      year: 2014,
      duration: "169 min",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      isNew: false,
      isTrending: false
  },
  {
      id: 5,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Drama",
      rating: 4.6,
      type: "tv",
      year: 2023,
      duration: "6 Seasons",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
      isNew: true,
      isTrending: true
  },
  {
      id: 6,
      title: "Blade Runner 2049",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Sci-Fi",
      rating: 4.4,
      type: "movie",
      year: 2017,
      duration: "164 min",
      description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
      cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
      isNew: false,
      isTrending: false
  },
  {
      id: 7,
      title: "The Last of Us",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Drama",
      rating: 4.8,
      type: "tv",
      year: 2023,
      duration: "1 Season",
      description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      cast: ["Pedro Pascal", "Bella Ramsey"],
      isNew: true,
      isTrending: true
  },
  {
      id: 8,
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Action",
      rating: 4.9,
      type: "movie",
      year: 2008,
      duration: "152 min",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      isNew: false,
      isTrending: false
  },
  {
      id: 9,
      title: "Succession",
      image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Drama",
      rating: 4.8,
      type: "tv",
      year: 2023,
      duration: "4 Seasons",
      description: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
      cast: ["Brian Cox", "Jeremy Strong", "Sarah Snook"],
      isNew: true,
      isTrending: true
  },
  {
      id: 10,
      title: "Mad Max: Fury Road",
      image: "https://images.unsplash.com/photo-1508435234994-67cfd7690508?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Action",
      rating: 4.7,
      type: "movie",
      year: 2015,
      duration: "120 min",
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      isNew: false,
      isTrending: true
  },
  {
      id: 11,
      title: "The Grand Budapest Hotel",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Comedy",
      rating: 4.5,
      type: "movie",
      year: 2014,
      duration: "99 min",
      description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
      isNew: false,
      isTrending: false
  },
  {
      id: 12,
      title: "House of the Dragon",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      category: "Fantasy",
      rating: 4.9,
      type: "tv",
      year: 2022,
      duration: "1 Season",
      description: "The story of the House Targaryen set 200 years before the events of Game of Thrones.",
      cast: ["Paddy Considine", "Emma D'Arcy", "Matt Smith"],
      isNew: true,
      isTrending: true
  }
];

// Hero background rotation
const heroBackgrounds = [
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2925&ixlib=rb-4.0.3"
];

// Get DOM elements
const hero = document.getElementById('hero');
let currentBgIndex = 0;

// Authentication state
let isAuthenticated = false;
const USERS_KEY = 'movie_platform_users';
const CURRENT_USER_KEY = 'movie_platform_current_user';  

// Initialize users if not exists
if (!localStorage.getItem(USERS_KEY)) {
  localStorage.setItem(USERS_KEY, JSON.stringify([]));
}

// Auth pages
const authPages = document.getElementById('auth-pages');
const signinPage = document.getElementById('signin-page');
const signupPage = document.getElementById('signup-page');
const mainContent = document.getElementById('main-content');

// Show/hide auth pages
document.getElementById('show-signup').addEventListener('click', (e) => {
  e.preventDefault();
  signinPage.classList.add('hidden');
  signupPage.classList.remove('hidden');
});

document.getElementById('show-signin').addEventListener('click', (e) => {
  e.preventDefault();
  signupPage.classList.add('hidden');
  signinPage.classList.remove('hidden');
});

// Sign up form
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const users = JSON.parse(localStorage.getItem(USERS_KEY));
  
  const newUser = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  
  isAuthenticated = true;
  showMainContent();
});

// Sign in form
document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const users = JSON.parse(localStorage.getItem(USERS_KEY));
  
  const user = users.find(u => 
      u.email === formData.get('email') && 
      u.password === formData.get('password')
  );

  if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      isAuthenticated = true;
      showMainContent();
  } else {
      alert('Invalid credentials');
  }
});

// Sign out
document.getElementById('signout-button').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem(CURRENT_USER_KEY);
  isAuthenticated = false;
  showAuthPages();
});

// Background rotation function
function rotateBackground() {
  currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
  if (hero) {
      hero.style.backgroundImage = `url(${heroBackgrounds[currentBgIndex]})`;
  }
}

// Create movie card
function createMovieCard(movie, showDetails = false) {
  const card = `
      <div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-image-container">
              <img src="${movie.image}" alt="${movie.title}" loading="lazy" class="movie-image">
          </div>
          <div class="movie-overlay"></div>
          <div class="movie-info">
              <h3 class="movie-title">${movie.title}</h3>
              <div class="movie-meta">
                  <i data-lucide="star" class="text-yellow-500"></i>
                  <span class="movie-rating">${movie.rating}</span>
                  <span class="movie-category">• ${movie.category}</span>
                  ${movie.isNew ? '<span class="new-badge">NEW</span>' : ''}
              </div>
              ${showDetails ? `
                  <div class="movie-details">
                      <p class="movie-year">${movie.year} • ${movie.duration}</p>
                      <p class="movie-description">${movie.description}</p>
                      <div class="movie-cast">
                          <strong>Cast:</strong> ${movie.cast.join(', ')}
                      </div>
                  </div>
              ` : ''}
          </div>
      </div>
  `;
  return card;
}

// Filter movies based on type and criteria
function filterMovies(type = 'all', criteria = '') {
  let filtered = movies;

  // Filter by type
  if (type !== 'all') {
      filtered = filtered.filter(movie => movie.type === type);
  }

  // Filter by criteria
  switch (criteria) {
      case 'new':
          filtered = filtered.filter(movie => movie.isNew);
          break;
      case 'trending':
          filtered = filtered.filter(movie => movie.isTrending);
          break;
  }

  return filtered;
}

// Populate movie grid
function populateMovieGrid(containerId, type = 'all', criteria = '', start = 0, count = 4) {
  const container = document.getElementById(containerId);
  if (container) {
      const filteredMovies = filterMovies(type, criteria);
      const movieSlice = count ? filteredMovies.slice(start, start + count) : filteredMovies;
      container.innerHTML = movieSlice.map(movie => createMovieCard(movie)).join('');
      // Reinitialize Lucide icons for the new content
      lucide.createIcons();
  }
}

// Initialize main content
function initializeMainContent() {
  // Start background rotation
  rotateBackground();
  setInterval(rotateBackground, 8000);

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // Initialize navigation
  initializeNavigation();

  // Populate initial view (home)
  showHomeContent();

  // Initialize Lucide icons
  lucide.createIcons();

  // Add intersection observer for lazy loading
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target.querySelector('img');
              if (img && img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
              }
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  document.querySelectorAll('.movie-card').forEach(card => {
      observer.observe(card);
  });
}

// Navigation functions
function initializeNavigation() {
  const navLinks = {
      'home-link': showHomeContent,
      'tvshows-link': showTVShowsContent,
      'movies-link': showMoviesContent,
      'new-popular-link': showNewAndPopularContent
  };

  Object.entries(navLinks).forEach(([id, handler]) => {
      const link = document.getElementById(id);
      if (link) {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              handler();
          });
      }
  });
}

function showHomeContent() {
  const categories = document.querySelector('.categories');
  if (categories) {
      categories.innerHTML = `
          <section class="category">
              <div class="category-header">
                  <i data-lucide="flame"></i>
                  <h2>Popular Now</h2>
              </div>
              <div class="movie-grid" id="popular-movies"></div>
          </section>
          <section class="category">
              <div class="category-header">
                  <i data-lucide="star"></i>
                  <h2>Top Rated</h2>
              </div>
              <div class="movie-grid" id="top-rated-movies"></div>
          </section>
          <section class="category">
              <div class="category-header">
                  <i data-lucide="clock"></i>
                  <h2>Coming Soon</h2>
              </div>
              <div class="movie-grid" id="coming-soon-movies"></div>
          </section>
          <section class="category">
              <div class="category-header">
                  <i data-lucide="trending-up"></i>
                  <h2>Trending</h2>
              </div>
              <div class="movie-grid" id="trending-movies"></div>
          </section>
      `;

      populateMovieGrid('popular-movies', 'all', 'trending', 0, 4);
      populateMovieGrid('top-rated-movies', 'all', '', 4, 4);
      populateMovieGrid('coming-soon-movies', 'all', 'new', 8, 4);
      populateMovieGrid('trending-movies', 'all', 'trending', 2, 4);

      lucide.createIcons();
  }
}

function showTVShowsContent() {
  const categories = document.querySelector('.categories');
  if (categories) {
      categories.innerHTML = `
          <section class="category">
              <div class="category-header">
                  <i data-lucide="tv"></i>
                  <h2>TV Shows</h2>
              </div>
              <div class="movie-grid" id="tv-shows-grid"></div>
          </section>
      `;

      populateMovieGrid('tv-shows-grid', 'tv');
      lucide.createIcons();
  }
}

function showMoviesContent() {
  const categories = document.querySelector('.categories');
  if (categories) {
      categories.innerHTML = `
          <section class="category">
              <div class="category-header">
                  <i data-lucide="film"></i>
                  <h2>Movies</h2>
              </div>
              <div class="movie-grid" id="movies-grid"></div>
          </section>
      `;

      populateMovieGrid('movies-grid', 'movie');
      lucide.createIcons();
  }
}

function showNewAndPopularContent() {
  const categories = document.querySelector('.categories');
  if (categories) {
      categories.innerHTML = `
          <section class="category">
              <div class="category-header">
                  <i data-lucide="sparkles"></i>
                  <h2>New Releases</h2>
              </div>
              <div class="movie-grid" id="new-releases-grid"></div>
          </section>
          <section class="category">
              <div class="category-header">
                  <i data-lucide="trending-up"></i>
                  <h2>Popular</h2>
              </div>
              <div class="movie-grid" id="popular-grid"></div>
          </section>
      `;

      populateMovieGrid('new-releases-grid', 'all', 'new');
      populateMovieGrid('popular-grid', 'all', 'trending');
      lucide.createIcons();
  }
}

// Show/hide pages
function showMainContent() {
  if (authPages && mainContent) {
      authPages.classList.add('hidden');
      mainContent.classList.remove('hidden');
      initializeMainContent();
  }
}

function showAuthPages() {
  if (mainContent && authPages && signinPage && signupPage) {
      mainContent.classList.add('hidden');
      authPages.classList.remove('hidden');
      signinPage.classList.remove('hidden');
      signupPage.classList.add('hidden');
  }
}

// Search functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchResultsGrid = document.getElementById('search-results-grid');
const categories = document.querySelector('.categories');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      if (searchTerm.length > 0) {
          const filteredMovies = movies.filter(movie =>
              movie.title.toLowerCase().includes(searchTerm) ||
              movie.category.toLowerCase().includes(searchTerm) ||
              movie.description.toLowerCase().includes(searchTerm) ||
              movie.cast.some(actor => actor.toLowerCase().includes(searchTerm))
          );
          
          if (searchResults && categories && searchResultsGrid) {
              searchResults.classList.remove('hidden');
              categories.classList.add('hidden');
              
              searchResultsGrid.innerHTML = filteredMovies
                  .map(movie => createMovieCard(movie, true))
                  .join('');
                  
              // Reinitialize Lucide icons for search results
              lucide.createIcons();
              
              // Observe new movie cards
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('visible');
                      }
                  });
              }, {
                  threshold: 0.1
              });

              document.querySelectorAll('.movie-card').forEach(card => {
                  observer.observe(card);
              });
          }
      } else if (searchResults && categories) {
          searchResults.classList.add('hidden');
          categories.classList.remove('hidden');
      }
  });
}

// Check authentication status on load
const currentUser = localStorage.getItem(CURRENT_USER_KEY);
if (currentUser) {
  isAuthenticated = true;
  showMainContent();
} else {
  showAuthPages();
}