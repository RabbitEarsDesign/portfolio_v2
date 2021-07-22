// ASIDE
// toggle the hover state for aside
const aside = document.getElementById("aside");

aside.addEventListener("mouseover", () => {
  aside.classList.add("active");
});

aside.addEventListener("mouseleave", () => {
  aside.classList.remove("active");
});
// END

// SWIPER JS
// Initialize swiper

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 2,
    },

    1260: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// END

//
// ANIMATE LOGO ON PAGELOAD
//
function firstLoad() {
  // If this is the first visit then add 'doNotShow' to session storage and run preloader
  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);

    preloader();
  } else {
    document.getElementById("preloader").style.display = "none";
  }
}

firstLoad();

// Preload Function is used to apply loaded class to animation
function preloader(callback) {
  // disableScrolling();
  window.onload = () => {
    setTimeout(() => {
      const body = document.querySelector("body");

      body.classList.add("loaded");
    }, 4500);
  };
  if (callback) callback();
}

// Enable / Disable scroll
function enableScrolling() {
  document.documentElement.style.overflow = "visible";
}

function disableScrolling() {
  document.documentElement.style.overflow = "hidden";
}
// END

//
// SHOW PROJECT DATA
//
// I am not happy with how this code is written, there has to be a better more eficient way to display these cards
// need to basically run a different function depensind which swuiper slide array is clicked. everything wioll be the same excpet for the array that data is coming from
// or create 1 array with 2 objects and each object represents the specific swiper slide section
function showClientWork() {
  // Get various project content inputs via id
  const card = document.getElementById("card");
  const cardImage = document.getElementById("card-image");
  const cardHeader = document.getElementById("card-header");
  const cardLabelYear = document.getElementById("card-label-year");
  const cardLabelType = document.getElementById("card-label-biz-type");
  const cardLabelCategory = document.getElementById("card-label-category");
  const cardDescription = document.getElementById("card-description");
  const github = document.getElementById("github");
  const website = document.getElementById("website");

  const projects = document.querySelectorAll(".client-work");
  const projectsArr = Array.from(projects);

  // Create array of project data
  // keep in mind you may need to change img locations once you launch
  const projectData = [
    // Bobs Bowling
    {
      cardHeaderData: "Bob's Bowling",
      cardImageData: "./img/projects/bobs_bowling1.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Bowling Alley",
      cardLabelCategoryData: "Small Business",
      cardDescriptionData:
        "Bob's Bowling is a fictional bowling company that I built a website for. This website is intended to showcase the kind of work my clients can expect. Take a look at the site and see for youself!",
      githubData: "https://github.com/RabbitEarsDesign/bowling_website",
      websiteData: "https://ecstatic-hopper-c90f58.netlify.app",
    },

    // Something Sweet
    {
      cardHeaderData: "Something Sweet",
      cardImageData: "./img/projects/something_sweet3.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Ice Cream Store",
      cardLabelCategoryData: "Small Business",
      cardDescriptionData:
        "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk ",
      githubData: "https://github.com",
      websiteData: "https://google.com",
    },
  ];

  projectsArr.forEach((item) => {
    item.addEventListener("click", () => {
      if (projectsArr.indexOf(item) + 1 <= projectData.length) {
        card.style.display = "flex";

        // scrollToCenter();
        card.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
        // need to use a diffrent method this isnt supported enough

        let indexOfSwiper = projectsArr.indexOf(item);

        cardHeader.innerHTML = projectData[indexOfSwiper].cardHeaderData;
        cardLabelYear.innerHTML = projectData[indexOfSwiper].cardLabelYearData;
        cardImage.src = projectData[indexOfSwiper].cardImageData;
        cardLabelType.innerHTML =
          projectData[indexOfSwiper].cardLabelBizTypeData;
        cardLabelCategory.innerHTML =
          projectData[indexOfSwiper].cardLabelCategoryData;
        cardDescription.innerHTML =
          projectData[indexOfSwiper].cardDescriptionData;
        github.href = projectData[indexOfSwiper].githubData;
        website.href = projectData[indexOfSwiper].websiteData;
      } else {
        project.style.display = "none";
      }
    });
  });
}

function showPersonalProjects() {
  // Get various project content inputs via id
  const card = document.getElementById("personal-card");
  const cardImage = document.getElementById("personal-card-image");
  const cardHeader = document.getElementById("personal-card-header");
  const cardLabelYear = document.getElementById("personal-card-label-year");
  const cardLabelType = document.getElementById("personal-card-label-biz-type");
  const cardLabelCategory = document.getElementById(
    "personal-card-label-category"
  );
  const cardDescription = document.getElementById("personal-card-description");
  const github = document.getElementById("personal-github");
  const website = document.getElementById("personal-website");

  const projects = document.querySelectorAll(".personal-project");
  const projectsArr = Array.from(projects);

  // Create array of project data
  // keep in mind you may need to change img locations once you launch
  const projectData = [
    // Moment Gallery
    {
      cardHeaderData: "Moment Skis Gallery",
      cardImageData: "./img/projects/moment_skis_gallery2.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Ski Company",
      cardLabelCategoryData: "Action",
      cardDescriptionData: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      githubData: "https://github.com",
      websiteData: "https:/momentskisgallery.com",
    },
    // Bobs Bowling
    {
      cardHeaderData: "Bob's Bowling",
      cardImageData: "./img/projects/bobs_bowling1.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Bowling Alley",
      cardLabelCategoryData: "Small Business",
      cardDescriptionData:
        "Bob's Bowling is a fictional bowling company that I built a website for. This website is intended to showcase the kind of work my clients can expect. Take a look at the site and see for youself!",
      githubData: "https://github.com/RabbitEarsDesign/bowling_website",
      websiteData: "https://ecstatic-hopper-c90f58.netlify.app",
    },
  ];

  projectsArr.forEach((item) => {
    item.addEventListener("click", () => {
      if (projectsArr.indexOf(item) + 1 <= projectData.length) {
        card.style.display = "flex";

        // scrollToCenter();
        card.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
        // need to use a diffrent method this isnt supported enough

        let indexOfSwiper = projectsArr.indexOf(item);

        cardHeader.innerHTML = projectData[indexOfSwiper].cardHeaderData;
        cardLabelYear.innerHTML = projectData[indexOfSwiper].cardLabelYearData;
        cardImage.src = projectData[indexOfSwiper].cardImageData;
        cardLabelType.innerHTML =
          projectData[indexOfSwiper].cardLabelBizTypeData;
        cardLabelCategory.innerHTML =
          projectData[indexOfSwiper].cardLabelCategoryData;
        cardDescription.innerHTML =
          projectData[indexOfSwiper].cardDescriptionData;
        github.href = projectData[indexOfSwiper].githubData;
        website.href = projectData[indexOfSwiper].websiteData;
      } else {
        project.style.display = "none";
      }
    });
  });
}

showClientWork();
showPersonalProjects();
