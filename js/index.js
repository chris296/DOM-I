const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navigation = document.querySelectorAll('a');
const navArray = Array.from(navigation);
navArray[0].textContent = "Services";
navArray[1].textContent = "Product";
navArray[2].textContent = "Vision";
navArray[3].textContent = "Features";
navArray[4].textContent = "About";
navArray[5].textContent = "Contact";

const ctaText = document.getElementsByTagName("h1");
ctaText[0].textContent = "Dom Is Awesome";

const btn = document.getElementsByTagName("button");
btn[0].textContent = "Get Started";

const codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent["cta"]["img-src"]);

const h4s = document.querySelectorAll('h4');
const h4sArray = Array.from(h4s);
h4sArray[0].textContent = siteContent["main-content"]["features-h4"];
h4sArray[1].textContent = siteContent["main-content"]["about-h4"];
h4sArray[2].textContent = siteContent["main-content"]["services-h4"];
h4sArray[3].textContent = siteContent["main-content"]["product-h4"];
h4sArray[4].textContent = siteContent["main-content"]["vision-h4"];

const text = document.querySelectorAll(".text-content p");
text[0].textContent = siteContent["main-content"]["features-content"];
text[1].textContent = siteContent["main-content"]["about-content"];
text[2].textContent = siteContent["main-content"]["services-content"];
text[3].textContent = siteContent["main-content"]["product-content"];
text[4].textContent = siteContent["main-content"]["vision-content"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];


const contactInfo = Array.from(document.querySelectorAll(".contact p"));
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];



// document.querySelector("nav").prepend(document.createElement("a").textContent = "Home");

// document.querySelector("nav").appendChild(document.createElement("a").textContent = "Blog");

const currentnav = document.querySelector("nav");
const newnavA = document.createElement("a");
newnavA.textContent = "Home";
currentnav.prepend(newnavA);

const newnavB = document.createElement('a');
newnavB.textContent = 'Blog';
currentnav.appendChild(newnavB);

document.querySelectorAll("a").forEach(item => item.style.color = "green");
