const X1 = document.getElementById("themeToggle");
const X2 = document.getElementById("menuToggle");
const X3 = document.querySelector(".nav-menu");
const X4 = document.querySelectorAll(".filter-btn");
const X5 = document.getElementById("artworksScrollTrack");
const X6 = document.getElementById("artistsScrollTrack");
const X7 = document.getElementById("galleryScrollTrack");
const X8 = document.getElementById("artworkModal");
const X9 = document.querySelector(".close-modal");
const Xa = document.getElementById("loadingScreen");
const Xb = document.getElementById("exploreGallery");
const Xc = document.getElementById("viewExhibitions");
const Xd = document.getElementById("scrollLeft");
const Xe = document.getElementById("scrollRight");
const Xf = document.getElementById("galleryScrollLeft");
const Xg = document.getElementById("galleryScrollRight");

const DATA_A = [...[
  {id:1,title:"Ethereal Landscape",artist:"Sarah Chen",artistId:1,category:"visual",medium:"Oil on Canvas",
    description:"A dreamlike interpretation...",dimensions:"120 × 90 cm",year:"2023",price:"$8,500"},
  {id:2,title:"Urban Symphony",artist:"Marcus Rodriguez",artistId:2,category:"visual",medium:"Mixed Media",
    description:"Collage and acrylic work...",dimensions:"100 × 150 cm",year:"2023",price:"$6,200"},
  {id:3,title:"Silent Conversations",artist:"Aisha Patel",artistId:3,category:"visual",medium:"Watercolor",
    description:"Delicate watercolor series...",dimensions:"60 × 45 cm",year:"2023",price:"$3,800"},
  {id:4,title:"Whispers of the Forest",artist:"Eleanor Vance",artistId:4,category:"literary",medium:"Poetry Collection",
    description:"A chapbook of nature...",dimensions:"48 pages",year:"2023",price:"$25"},
  {id:5,title:"Metropolis Dreams",artist:"James Fitzgerald",artistId:5,category:"literary",medium:"Short Stories",
    description:"Collection of stories...",dimensions:"192 pages",year:"2023",price:"$18"},
  {id:6,title:"Ceramic Vessels",artist:"Lena Petrov",artistId:6,category:"applied",medium:"Stoneware",
    description:"Hand-thrown ceramic vessels...",dimensions:"Various sizes",year:"2023",price:"$450-900"},
  {id:7,title:"Woven Memories",artist:"Isabella Garcia",artistId:7,category:"applied",medium:"Textile Art",
    description:"Handwoven tapestries...",dimensions:"200 × 150 cm",year:"2023",price:"$2,800"},
  {id:8,title:"Kinetic Sculpture",artist:"David Kim",artistId:8,category:"applied",medium:"Brass & Steel",
    description:"Interactive kinetic sculpture...",dimensions:"60 × 60 × 120 cm",year:"2023",price:"$12,000"},
  {id:9,title:"Dance of the Elements",artist:"Maya Collective",artistId:9,category:"performance",medium:"Contemporary Dance",
    description:"Choreographed performance...",dimensions:"45-minute performance",year:"2023",price:"Commission"},
  {id:10,title:"Digital Dreams",artist:"Alex Rivera",artistId:10,category:"visual",medium:"Digital Art",
    description:"A vibrant exploration...",dimensions:"Digital",year:"2023",price:"$1,200"},
]]];

const DATA_B = [
  {id:1,name:"Sarah Chen",specialty:"Visual Artist",bio:"Sarah's work explores...",artworks:[1],initial:"S"},
  {id:2,name:"Marcus Rodriguez",specialty:"Mixed Media Artist",bio:"Marcus creates urban...",artworks:[2],initial:"M"},
  {id:3,name:"Aisha Patel",specialty:"Watercolor Artist",bio:"Aisha's delicate...",artworks:[3],initial:"A"},
  {id:4,name:"Eleanor Vance",specialty:"Poet & Writer",bio:"Eleanor's poetry...",artworks:[4],initial:"E"},
  {id:5,name:"James Fitzgerald",specialty:"Fiction Writer",bio:"James writes...",artworks:[5],initial:"J"},
  {id:6,name:"Lena Petrov",specialty:"Ceramic Artist",bio:"Lena combines...",artworks:[6],initial:"L"},
  {id:7,name:"Isabella Garcia",specialty:"Textile Artist",bio:"Isabella creates...",artworks:[7],initial:"I"},
  {id:8,name:"David Kim",specialty:"Sculptor",bio:"David creates...",artworks:[8],initial:"D"},
  {id:9,name:"Maya Collective",specialty:"Performance Group",bio:"A collaborative group...",artworks:[9],initial:"M"},
  {id:10,name:"Alex Rivera",specialty:"Digital Artist",bio:"Alex creates...",artworks:[10],initial:"A"},
];

const DATA_C = [
  {icon:"fas fa-map-marker-alt",title:"Location",content:"123 Gallery District<br>Cultural Center, Metro City"},
  {icon:"fas fa-clock",title:"Hours",content:"Tuesday - Sunday: 10AM - 6PM<br>Friday: 10AM - 8PM"},
  {icon:"fas fa-phone",title:"Contact",content:"+1 (555) 123-4567<br>info@artisangallery.com"},
  {icon:"fas fa-ticket-alt",title:"Admission",content:"General: $15<br>Students & Seniors: $10<br>Members: Free"},
  {icon:"fas fa-bus",title:"Transportation",content:"Metro Line B - Gallery Station<br>Bus Routes: 12, 24, 36"},
  {icon:"fas fa-wheelchair",title:"Accessibility",content:"Fully wheelchair accessible<br>Audio guides available"},
];

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(()=>{Xa.style.opacity="0";setTimeout(()=>Xa.style.display="none",500)},2000);
  Z0(); Z1(); Z2(); Z3(); Z9();
});

function Z3(){
  X1.addEventListener("click",Z4);
  X2.addEventListener("click",Z5);

  X4.forEach(q=>q.addEventListener("click",function(){
    X4.forEach(v=>v.classList.remove("active"));
    this.classList.add("active");
    Z7(this.dataset.filter);
  }));

  X9.addEventListener("click",Z8);

  window.addEventListener("click",e=>{
    e.target===X8 && Z8();
  });

  document.querySelectorAll(".nav-link").forEach(k=>{
    k.addEventListener("click",function(e){
      e.preventDefault();
      const d = document.querySelector(this.getAttribute("href"));
      d && (X3.classList.remove("active"),window.scrollTo({top:d.offsetTop-80,behavior:"smooth"}));
    });
  });

  Xb && Xb.addEventListener("click",()=>document.querySelector("#gallery").scrollIntoView({behavior:"smooth"}));
  Xc && Xc.addEventListener("click",()=>document.querySelector("#exhibitions").scrollIntoView({behavior:"smooth"}));

  document.querySelectorAll(".category-card").forEach(c=>{
    c.addEventListener("click",function(){
      let z=this.dataset.category;
      X4.forEach(v=>v.classList.remove("active"));
      document.querySelector(`.filter-btn[data-filter="${z}"]`).classList.add("active");
      Z7(z);
      document.querySelector("#gallery").scrollIntoView({behavior:"smooth"});
    });
  });

  Xd && Xe && (Xd.addEventListener("click",()=>Z10(-300)),Xe.addEventListener("click",()=>Z10(300)));
  Xf && Xg && (Xf.addEventListener("click",()=>Z11(-400)),Xg.addEventListener("click",()=>Z11(400)));

  let T0;

  X6 && (X6.addEventListener("touchstart",(e)=>T0=e.touches[0].clientX),
  X6.addEventListener("touchend",(e)=>{
    let R=e.changedTouches[0].clientX, D=T0-R;
    Math.abs(D)>50 && Z10(D>0?-300:300);
  }));

  X7 && (X7.addEventListener("touchstart",(e)=>T0=e.touches[0].clientX),
  X7.addEventListener("touchend",(e)=>{
    let R=e.changedTouches[0].clientX, D=T0-R;
    Math.abs(D)>50 && Z11(D>0?-400:400);
  }));
}

function Z4(){
  const x=document.documentElement.getAttribute("data-theme");
  const y=x==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",y);
  X1.querySelector("i").className = y==="dark"?"fas fa-sun":"fas fa-moon";
  localStorage.setItem("theme",y);
}

function Z5(){
  X3.classList.toggle("active");
  const s=X2.querySelectorAll("span");
  if(X3.classList.contains("active")){
    s[0].style.transform="rotate(45deg) translate(5px,5px)";
    s[1].style.opacity="0";
    s[2].style.transform="rotate(-45deg) translate(7px,-6px)";
  } else {
    s[0].style.transform="none";
    s[1].style.opacity="1";
    s[2].style.transform="none";
  }
}

function Z0(){
  X5.innerHTML="";
  let T=[...DATA_A,...DATA_A,...DATA_A];

  T.forEach(w=>{
    let d=document.createElement("div");
    d.className=`artwork-card ${w.category}`;
    d.dataset.category=w.category;
    d.dataset.artworkId=w.id;
    d.dataset.artistId=w.artistId;

    d.innerHTML=`
      <div class="artwork-image">
        <div class="artwork-preview">${Z6(w.category)}</div>
      </div>
      <div class="artwork-info">
        <h3>${w.title}</h3>
        <p class="artwork-artist">${w.artist}</p>
        <p class="artwork-category">${Z12(w.category)}</p>
        <p class="artwork-description">${w.description}</p>
      </div>`;

    d.addEventListener("click",()=>Z8b(w));
    X5.appendChild(d);
  });
}

function Z1(){
  X6.innerHTML="";
  let V=[...DATA_B,...DATA_B,...DATA_B];

  V.forEach(r=>{
    const card=document.createElement("div");
    card.className="artist-scroll-card";
    card.dataset.artistId=r.id;

    const w=DATA_A.filter(a=>a.artistId===r.id);

    card.innerHTML=`
      <div class="artist-scroll-header">
        <div class="artist-scroll-avatar">${r.initial}</div>
        <div class="artist-scroll-info">
          <h3>${r.name}</h3>
          <p class="artist-scroll-specialty">${r.specialty}</p>
        </div>
      </div>
      <p class="artist-bio">${r.bio}</p>
      <div class="artist-scroll-artworks">
        ${w.map(t=>`<div class="artist-artwork-preview" data-artwork-id="${t.id}">${t.title.split(" ").map(z=>z[0]).join("").toUpperCase()}</div>`).join("")}
      </div>`;

    card.addEventListener("click",()=>{
      if(w.length){
        const id=w[0].id;
        let el=document.querySelector(`[data-artwork-id="${id}"]`);
        if(el){
          el.scrollIntoView({behavior:"smooth",block:"center"});
          el.style.transform="scale(1.05)";
          el.style.boxShadow="0 10px 30px rgba(44,62,80,0.3)";
          setTimeout(()=>{el.style.transform="";el.style.boxShadow=""},2000);
        }
      }
    });
    X6.appendChild(card);
  });
}

function Z2(){
  X7.innerHTML="";
  let z=[...DATA_C,...DATA_C,...DATA_C];

  z.forEach(i=>{
    let c=document.createElement("div");
    c.className="gallery-info-card";
    c.innerHTML=`
      <div class="gallery-info-header">
        <div class="gallery-info-icon"><i class="${i.icon}"></i></div>
        <div class="gallery-info-content"><h3>${i.title}</h3><p>${i.content}</p></div>
      </div>`;
    X7.appendChild(c);
  });
}

function Z10(dist){
  X6.style.animationPlayState="paused";
  let cur = X6.scrollLeft || parseInt(getComputedStyle(X6).transform.split(",")[4]) || 0;
  X6.style.transform=`translateX(${cur+dist}px)`;
  setTimeout(()=>X6.style.animationPlayState="running",3000);
}

function Z11(dist){
  X7.style.animationPlayState="paused";
  let cur = X7.scrollLeft || parseInt(getComputedStyle(X7).transform.split(",")[4]) || 0;
  X7.style.transform=`translateX(${cur+dist}px)`;
  setTimeout(()=>X7.style.animationPlayState="running",3000);
}

function Z7(cat){
  document.querySelectorAll(".artwork-card").forEach(a=>{
    if(cat==="all" || a.dataset.category===cat){
      a.style.display="block";
      setTimeout(()=>{a.style.opacity="1";a.style.transform="translateY(0)"},100);
    } else {
      a.style.opacity="0";
      a.style.transform="translateY(20px)";
      setTimeout(()=>a.style.display="none",300);
    }
  });
}

function Z6(k){
  const P={
    visual:`<svg width="100%" height="100%" viewBox="0 0 100 100"><defs><linearGradient id="visualGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3498db;stop-opacity:1"/><stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1"/></linearGradient></defs><rect x="10" y="10" width="80" height="80" fill="url(#visualGradient)" rx="8"/><circle cx="30" cy="30" r="8" fill="#e74c3c"/><rect x="60" y="25" width="20" height="10" fill="#f1c40f" rx="2"/><path d="M25,65 L45,45 L75,75" stroke="#2ecc71" stroke-width="3" fill="none"/></svg>`,
    literary:`<svg width="100%" height="100%" viewBox="0 0 100 100"><defs><linearGradient id="literaryGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9b59b6;stop-opacity:1"/><stop offset="100%" style="stop-color:#8e44ad;stop-opacity:1"/></linearGradient></defs><rect x="15" y="15" width="70" height="70" fill="url(#literaryGradient)" rx="4"/><rect x="25" y="25" width="50" height="5" fill="#ecf0f1" rx="2"/><rect x="25" y="35" width="40" height="5" fill="#ecf0f1" rx="2"/><rect x="25" y="45" width="45" height="5" fill="#ecf0f1" rx="2"/><rect x="25" y="55" width="35" height="5" fill="#ecf0f1" rx="2"/><rect x="25" y="65" width="50" height="5" fill="#ecf0f1" rx="2"/></svg>`,
    applied:`<svg width="100%" height="100%" viewBox="0 0 100 100"><defs><linearGradient id="appliedGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e67e22;stop-opacity:1"/><stop offset="100%" style="stop-color:#d35400;stop-opacity:1"/></linearGradient></defs><circle cx="50" cy="40" r="15" fill="url(#appliedGradient)"/><path d="M35,60 Q50,80 65,60" fill="none" stroke="#34495e" stroke-width="4"/><rect x="40" y="60" width="20" height="25" fill="#34495e" rx="2"/></svg>`,
    performance:`<svg width="100%" height="100%" viewBox="0 0 100 100"><defs><linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e74c3c;stop-opacity:1"/><stop offset="100%" style="stop-color:#c0392b;stop-opacity:1"/></linearGradient></defs><circle cx="50" cy="50" r="35" fill="url(#performanceGradient)"/><path d="M35,35 L45,45 M65,35 L55,45 M35,65 L45,55 M65,65 L55,55" stroke="#ecf0f1" stroke-width="3" fill="none"/><circle cx="50" cy="50" r="8" fill="#ecf0f1"/></svg>`
  };
  return P[k] || P.visual;
}

function Z12(c){
  const N={visual:"Visual Arts",literary:"Literary Arts",applied:"Applied Arts",performance:"Performance Arts"};
  return N[c] || "Visual Arts";
}

function Z8b(a){
  document.getElementById("modalTitle").textContent=a.title;
  document.getElementById("modalArtist").textContent=a.artist;
  document.getElementById("modalCategory").textContent=Z12(a.category);
  document.getElementById("modalDescription").textContent=a.description;
  document.getElementById("modalMedium").textContent=a.medium;
  document.getElementById("modalDimensions").textContent=a.dimensions;
  document.getElementById("modalYear").textContent=a.year;
  document.getElementById("modalArtwork").innerHTML=Z6(a.category);
  X8.style.display="flex";
  document.body.style.overflow="hidden";
}

function Z8(){
  X8.style.display="none";
  document.body.style.overflow="auto";
}

function Z9(){
  const t=localStorage.getItem("theme");
  if(t){
    document.documentElement.setAttribute("data-theme",t);
    X1.querySelector("i").className=t==="dark"?"fas fa-sun":"fas fa-moon";
  }
}
