// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const filterButtons = document.querySelectorAll(".filter-btn");
const artworksScrollTrack = document.getElementById("artworksScrollTrack");
const artistsScrollTrack = document.getElementById("artistsScrollTrack");
const galleryScrollTrack = document.getElementById("galleryScrollTrack");
const artworkModal = document.getElementById("artworkModal");
const closeModal = document.querySelector(".close-modal");
const loadingScreen = document.getElementById("loadingScreen");
const exploreGalleryBtn = document.getElementById("exploreGallery");
const viewExhibitionsBtn = document.getElementById("viewExhibitions");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");
const galleryScrollLeftBtn = document.getElementById("galleryScrollLeft");
const galleryScrollRightBtn = document.getElementById("galleryScrollRight");

// Sample data for artworks (10 examples)
const artworks = [
  {
    id: 1,
    title: "Ethereal Landscape",
    artist: "Sarah Chen",
    artistId: 1,
    category: "visual",
    medium: "Oil on Canvas",
    description:
      "A dreamlike interpretation of mountain landscapes, blending traditional techniques with contemporary color theory. The piece explores the relationship between memory and place.",
    dimensions: "120 × 90 cm",
    year: "2023",
    price: "$8,500",
  },
  {
    id: 2,
    title: "Urban Symphony",
    artist: "Marcus Rodriguez",
    artistId: 2,
    category: "visual",
    medium: "Mixed Media",
    description:
      "Collage and acrylic work capturing the rhythm and energy of city life through geometric abstraction and found materials.",
    dimensions: "100 × 150 cm",
    year: "2023",
    price: "$6,200",
  },
  {
    id: 3,
    title: "Silent Conversations",
    artist: "Aisha Patel",
    artistId: 3,
    category: "visual",
    medium: "Watercolor",
    description:
      "Delicate watercolor series exploring non-verbal communication and emotional connections through subtle color gradients.",
    dimensions: "60 × 45 cm",
    year: "2023",
    price: "$3,800",
  },
  {
    id: 4,
    title: "Whispers of the Forest",
    artist: "Eleanor Vance",
    artistId: 4,
    category: "literary",
    medium: "Poetry Collection",
    description:
      "A chapbook of nature-inspired poetry that explores themes of growth, decay, and renewal through seasonal metaphors.",
    dimensions: "48 pages",
    year: "2023",
    price: "$25",
  },
  {
    id: 5,
    title: "Metropolis Dreams",
    artist: "James Fitzgerald",
    artistId: 5,
    category: "literary",
    medium: "Short Stories",
    description:
      "Collection of interconnected stories about urban life, technology, and human connection in the digital age.",
    dimensions: "192 pages",
    year: "2023",
    price: "$18",
  },
  {
    id: 6,
    title: "Ceramic Vessels",
    artist: "Lena Petrov",
    artistId: 6,
    category: "applied",
    medium: "Stoneware",
    description:
      "Hand-thrown ceramic vessels with intricate glaze patterns inspired by traditional folk art and modern minimalism.",
    dimensions: "Various sizes",
    year: "2023",
    price: "$450-900",
  },
  {
    id: 7,
    title: "Woven Memories",
    artist: "Isabella Garcia",
    artistId: 7,
    category: "applied",
    medium: "Textile Art",
    description:
      "Handwoven tapestries incorporating natural dyes and traditional weaving techniques with contemporary designs.",
    dimensions: "200 × 150 cm",
    year: "2023",
    price: "$2,800",
  },
  {
    id: 8,
    title: "Kinetic Sculpture",
    artist: "David Kim",
    artistId: 8,
    category: "applied",
    medium: "Brass & Steel",
    description:
      "Interactive kinetic sculpture that responds to ambient light and movement, creating ever-changing shadow patterns.",
    dimensions: "60 × 60 × 120 cm",
    year: "2023",
    price: "$12,000",
  },
  {
    id: 9,
    title: "Dance of the Elements",
    artist: "Maya Collective",
    artistId: 9,
    category: "performance",
    medium: "Contemporary Dance",
    description:
      "Choreographed performance exploring the four classical elements through movement, light, and sound.",
    dimensions: "45-minute performance",
    year: "2023",
    price: "Commission",
  },
  {
    id: 10,
    title: "Digital Dreams",
    artist: "Alex Rivera",
    artistId: 10,
    category: "visual",
    medium: "Digital Art",
    description:
      "A vibrant exploration of digital consciousness through algorithmic art and generative design.",
    dimensions: "Digital",
    year: "2023",
    price: "$1,200",
  },
];

// Sample data for artists (connected to artworks)
const artists = [
  {
    id: 1,
    name: "Sarah Chen",
    specialty: "Visual Artist",
    bio: "Sarah's work explores the intersection of traditional painting techniques and contemporary digital aesthetics.",
    artworks: [1],
    initial: "S",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    specialty: "Mixed Media Artist",
    bio: "Marcus creates urban-inspired artworks using found materials and traditional media.",
    artworks: [2],
    initial: "M",
  },
  {
    id: 3,
    name: "Aisha Patel",
    specialty: "Watercolor Artist",
    bio: "Aisha's delicate watercolor works focus on themes of memory and emotional landscapes.",
    artworks: [3],
    initial: "A",
  },
  {
    id: 4,
    name: "Eleanor Vance",
    specialty: "Poet & Writer",
    bio: "Eleanor's poetry explores the relationship between nature and human experience.",
    artworks: [4],
    initial: "E",
  },
  {
    id: 5,
    name: "James Fitzgerald",
    specialty: "Fiction Writer",
    bio: "James writes interconnected stories about modern urban life and digital culture.",
    artworks: [5],
    initial: "J",
  },
  {
    id: 6,
    name: "Lena Petrov",
    specialty: "Ceramic Artist",
    bio: "Lena combines traditional pottery techniques with contemporary design principles.",
    artworks: [6],
    initial: "L",
  },
  {
    id: 7,
    name: "Isabella Garcia",
    specialty: "Textile Artist",
    bio: "Isabella creates handwoven tapestries using natural dyes and traditional techniques.",
    artworks: [7],
    initial: "I",
  },
  {
    id: 8,
    name: "David Kim",
    specialty: "Sculptor",
    bio: "David creates interactive kinetic sculptures that respond to environmental factors.",
    artworks: [8],
    initial: "D",
  },
  {
    id: 9,
    name: "Maya Collective",
    specialty: "Performance Group",
    bio: "A collaborative group exploring contemporary dance and multimedia performance.",
    artworks: [9],
    initial: "M",
  },
  {
    id: 10,
    name: "Alex Rivera",
    specialty: "Digital Artist",
    bio: "Alex creates generative art that explores the intersection of technology and creativity.",
    artworks: [10],
    initial: "A",
  },
];

// Gallery information for horizontal scrolling
const galleryInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    content: "123 Gallery District<br>Cultural Center, Metro City",
  },
  {
    icon: "fas fa-clock",
    title: "Hours",
    content: "Tuesday - Sunday: 10AM - 6PM<br>Friday: 10AM - 8PM",
  },
  {
    icon: "fas fa-phone",
    title: "Contact",
    content: "+1 (555) 123-4567<br>info@artisangallery.com",
  },
  {
    icon: "fas fa-ticket-alt",
    title: "Admission",
    content: "General: $15<br>Students & Seniors: $10<br>Members: Free",
  },
  {
    icon: "fas fa-bus",
    title: "Transportation",
    content: "Metro Line B - Gallery Station<br>Bus Routes: 12, 24, 36",
  },
  {
    icon: "fas fa-wheelchair",
    title: "Accessibility",
    content: "Fully wheelchair accessible<br>Audio guides available",
  },
];

// Initialize the gallery
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 2000);

  // Load content
  loadArtworks();
  loadConnectedArtists();
  loadGalleryInfo();

  // Set up event listeners
  setupEventListeners();

  // Check for saved theme
  checkSavedTheme();
});

// Set up all event listeners
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Mobile menu toggle
  menuToggle.addEventListener("click", toggleMobileMenu);

  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      // Filter artworks
      filterArtworks(this.dataset.filter);
    });
  });

  // Modal close
  closeModal.addEventListener("click", closeArtworkModal);

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === artworkModal) {
      closeArtworkModal();
    }
  });

  // Navigation smooth scrolling
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        navMenu.classList.remove("active");

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // CTA buttons
  if (exploreGalleryBtn) {
    exploreGalleryBtn.addEventListener("click", function () {
      document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  if (viewExhibitionsBtn) {
    viewExhibitionsBtn.addEventListener("click", function () {
      document.querySelector("#exhibitions").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Category cards interaction
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.dataset.category;
      // Update filter buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector(`.filter-btn[data-filter="${category}"]`)
        .classList.add("active");
      // Filter artworks
      filterArtworks(category);
      // Scroll to gallery
      document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll controls for artists
  if (scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener("click", () => scrollArtists(-300));
    scrollRightBtn.addEventListener("click", () => scrollArtists(300));
  }

  // Scroll controls for gallery
  if (galleryScrollLeftBtn && galleryScrollRightBtn) {
    galleryScrollLeftBtn.addEventListener("click", () => scrollGallery(-400));
    galleryScrollRightBtn.addEventListener("click", () => scrollGallery(400));
  }

  // Touch/swipe support for mobile
  let startX;
  if (artistsScrollTrack) {
    artistsScrollTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    artistsScrollTrack.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        scrollArtists(diff > 0 ? -300 : 300);
      }
    });
  }

  if (galleryScrollTrack) {
    galleryScrollTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    galleryScrollTrack.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        scrollGallery(diff > 0 ? -400 : 400);
      }
    });
  }
}

// Toggle between light and dark themes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);

  // Update theme toggle icon
  const icon = themeToggle.querySelector("i");
  icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";

  // Save theme preference to localStorage
  localStorage.setItem("theme", newTheme);
}

// Toggle mobile menu
function toggleMobileMenu() {
  navMenu.classList.toggle("active");

  // Animate hamburger icon
  const spans = menuToggle.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
}

// Load artworks into the horizontal scroll
function loadArtworks() {
  artworksScrollTrack.innerHTML = "";

  // Create multiple sets of artworks for seamless looping
  const artworksToShow = [...artworks, ...artworks, ...artworks];

  artworksToShow.forEach((artwork) => {
    const artworkCard = document.createElement("div");
    artworkCard.className = `artwork-card ${artwork.category}`;
    artworkCard.setAttribute("data-category", artwork.category);
    artworkCard.setAttribute("data-artwork-id", artwork.id);
    artworkCard.setAttribute("data-artist-id", artwork.artistId);

    artworkCard.innerHTML = `
            <div class="artwork-image">
                <div class="artwork-preview">
                    ${generateArtworkPreview(artwork.category)}
                </div>
            </div>
            <div class="artwork-info">
                <h3>${artwork.title}</h3>
                <p class="artwork-artist">${artwork.artist}</p>
                <p class="artwork-category">${getCategoryName(
                  artwork.category
                )}</p>
                <p class="artwork-description">${artwork.description}</p>
            </div>
        `;

    // Add click event to open artwork modal
    artworkCard.addEventListener("click", () => openArtworkModal(artwork));

    artworksScrollTrack.appendChild(artworkCard);
  });
}

// Load connected artists with horizontal scroll
function loadConnectedArtists() {
  artistsScrollTrack.innerHTML = "";

  // Create multiple sets of artists for seamless looping
  const artistsToShow = [...artists, ...artists, ...artists];

  artistsToShow.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.className = "artist-scroll-card";
    artistCard.setAttribute("data-artist-id", artist.id);

    // Get artist's artworks
    const artistArtworks = artworks.filter(
      (artwork) => artwork.artistId === artist.id
    );

    artistCard.innerHTML = `
            <div class="artist-scroll-header">
                <div class="artist-scroll-avatar">
                    ${artist.initial}
                </div>
                <div class="artist-scroll-info">
                    <h3>${artist.name}</h3>
                    <p class="artist-scroll-specialty">${artist.specialty}</p>
                </div>
            </div>
            <p class="artist-bio">${artist.bio}</p>
            <div class="artist-scroll-artworks">
                ${artistArtworks
                  .map(
                    (artwork) => `
                    <div class="artist-artwork-preview" data-artwork-id="${
                      artwork.id
                    }">
                        ${artwork.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .toUpperCase()}
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // Add click event to scroll to artist's artwork
    artistCard.addEventListener("click", () => {
      if (artistArtworks.length > 0) {
        const firstArtworkId = artistArtworks[0].id;
        const artworkElement = document.querySelector(
          `[data-artwork-id="${firstArtworkId}"]`
        );
        if (artworkElement) {
          artworkElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          // Add highlight effect
          artworkElement.style.transform = "scale(1.05)";
          artworkElement.style.boxShadow = "0 10px 30px rgba(44, 62, 80, 0.3)";
          setTimeout(() => {
            artworkElement.style.transform = "";
            artworkElement.style.boxShadow = "";
          }, 2000);
        }
      }
    });

    artistsScrollTrack.appendChild(artistCard);
  });
}

// Load gallery information with horizontal scroll
function loadGalleryInfo() {
  galleryScrollTrack.innerHTML = "";

  // Create multiple sets of gallery info for seamless looping
  const galleryInfoToShow = [...galleryInfo, ...galleryInfo, ...galleryInfo];

  galleryInfoToShow.forEach((info) => {
    const galleryCard = document.createElement("div");
    galleryCard.className = "gallery-info-card";

    galleryCard.innerHTML = `
            <div class="gallery-info-header">
                <div class="gallery-info-icon">
                    <i class="${info.icon}"></i>
                </div>
                <div class="gallery-info-content">
                    <h3>${info.title}</h3>
                    <p>${info.content}</p>
                </div>
            </div>
        `;

    galleryScrollTrack.appendChild(galleryCard);
  });
}

// Scroll artists horizontally
function scrollArtists(distance) {
  artistsScrollTrack.style.animationPlayState = "paused";

  const currentScroll =
    artistsScrollTrack.scrollLeft ||
    parseInt(getComputedStyle(artistsScrollTrack).transform.split(",")[4]) ||
    0;
  const newScroll = currentScroll + distance;

  artistsScrollTrack.style.transform = `translateX(${newScroll}px)`;

  // Resume animation after manual scroll
  setTimeout(() => {
    artistsScrollTrack.style.animationPlayState = "running";
  }, 3000);
}

// Scroll gallery horizontally
function scrollGallery(distance) {
  galleryScrollTrack.style.animationPlayState = "paused";

  const currentScroll =
    galleryScrollTrack.scrollLeft ||
    parseInt(getComputedStyle(galleryScrollTrack).transform.split(",")[4]) ||
    0;
  const newScroll = currentScroll + distance;

  galleryScrollTrack.style.transform = `translateX(${newScroll}px)`;

  // Resume animation after manual scroll
  setTimeout(() => {
    galleryScrollTrack.style.animationPlayState = "running";
  }, 3000);
}

// Filter artworks by category
function filterArtworks(category) {
  const allArtworks = document.querySelectorAll(".artwork-card");

  allArtworks.forEach((artwork) => {
    if (category === "all" || artwork.dataset.category === category) {
      artwork.style.display = "block";
      setTimeout(() => {
        artwork.style.opacity = "1";
        artwork.style.transform = "translateY(0)";
      }, 100);
    } else {
      artwork.style.opacity = "0";
      artwork.style.transform = "translateY(20px)";
      setTimeout(() => {
        artwork.style.display = "none";
      }, 300);
    }
  });
}

// Generate artwork preview based on category
function generateArtworkPreview(category) {
  const previews = {
    visual: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="visualGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" fill="url(#visualGradient)" rx="8"/>
                <circle cx="30" cy="30" r="8" fill="#e74c3c"/>
                <rect x="60" y="25" width="20" height="10" fill="#f1c40f" rx="2"/>
                <path d="M25,65 L45,45 L75,75" stroke="#2ecc71" stroke-width="3" fill="none"/>
            </svg>
        `,
    literary: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="literaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#9b59b6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#8e44ad;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect x="15" y="15" width="70" height="70" fill="url(#literaryGradient)" rx="4"/>
                <rect x="25" y="25" width="50" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="35" width="40" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="45" width="45" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="55" width="35" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="65" width="50" height="5" fill="#ecf0f1" rx="2"/>
            </svg>
        `,
    applied: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="appliedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#e67e22;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#d35400;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="40" r="15" fill="url(#appliedGradient)"/>
                <path d="M35,60 Q50,80 65,60" fill="none" stroke="#34495e" stroke-width="4"/>
                <rect x="40" y="60" width="20" height="25" fill="#34495e" rx="2"/>
            </svg>
        `,
    performance: `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#e74c3c;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#c0392b;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="35" fill="url(#performanceGradient)"/>
                <path d="M35,35 L45,45 M65,35 L55,45 M35,65 L45,55 M65,65 L55,55" stroke="#ecf0f1" stroke-width="3" fill="none"/>
                <circle cx="50" cy="50" r="8" fill="#ecf0f1"/>
            </svg>
        `,
  };

  return previews[category] || previews.visual;
}

// Get full category name
function getCategoryName(category) {
  const names = {
    visual: "Visual Arts",
    literary: "Literary Arts",
    applied: "Applied Arts",
    performance: "Performance Arts",
  };

  return names[category] || "Visual Arts";
}

// Open artwork modal with details
function openArtworkModal(artwork) {
  document.getElementById("modalTitle").textContent = artwork.title;
  document.getElementById("modalArtist").textContent = artwork.artist;
  document.getElementById("modalCategory").textContent = getCategoryName(
    artwork.category
  );
  document.getElementById("modalDescription").textContent = artwork.description;
  document.getElementById("modalMedium").textContent = artwork.medium;
  document.getElementById("modalDimensions").textContent = artwork.dimensions;
  document.getElementById("modalYear").textContent = artwork.year;

  // Set modal artwork
  const modalArtwork = document.getElementById("modalArtwork");
  modalArtwork.innerHTML = generateArtworkPreview(artwork.category);

  // Display modal
  artworkModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Close artwork modal
function closeArtworkModal() {
  artworkModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Check for saved theme preference
function checkSavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    const icon = themeToggle.querySelector("i");
    icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}
