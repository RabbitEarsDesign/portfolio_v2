// ASIDE SCRIPTS
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

// SHOW DETAILS OF EACH PROJECT
// Create function
const showProjectDetails = () => {
  const projects = document.querySelectorAll(".swiper-slide");
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
      cardLabelbizCategoryData: "Small Business",
      cardDescriptionData: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      githubData: "https://github.com/RabbitEarsDesign/bowling_website",
      websiteData: "https://google.com",
    },

    // Something Sweet
    {
      cardHeaderData: "Something Sweet",
      cardImageData: "./img/projects/something_sweet3.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Ice Cream Store",
      cardLabelCategoryData: "Small Business",
      cardDescriptionData: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      githubData: "https://github.com",
      websiteData: "https://google.com",
    },

    // Moment Gallery
    {
      cardHeaderData: "Bob's Bowling",
      cardImageData: "./img/projects/bobs_bowling1.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Ski Company",
      cardLabelCategoryData: "Action",
      cardDescriptionData: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      githubData: "https://github.com",
      websiteData: "https://google.com",
    },
  ];

  // Get index of swiper-slide and log the corresponding swiper slide array item
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

  // scroll to center
  function scrollToCenter() {
    const cardTop = document.card.offsetTop() - window.innerHeight / 2;
    window.scrollTo(cardTop);
  }

  // Get various project content inputs via id

  const card = document.getElementById("card");
  const cardImage = document.getElementById("card-image");
  const cardHeader = document.getElementById("card-header");
  const cardLabelYear = document.getElementById("card-label-year");
  const cardLabelType = document.getElementById("card-label-type");
  const cardLabelCategory = document.getElementById("card-label-biz-category");
  const cardDescription = document.getElementById("card-description");
  const github = document.getElementById("github");
  const website = document.getElementById("website");
};

showProjectDetails();
// END

// Animate the logo onload
function firstLoad() {
  // Preload Function is used to apply loaded class to animation
  function Preloader() {
    window.onload = () => {
      setTimeout(() => {
        const body = document.querySelector("body");

        body.classList.add("loaded");
      }, 6000);
      console.log("test");
    };
  }
  // If this is the first visit then add 'doNotShow' to session storage and run preloader
  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);
    Preloader();
  } else {
    document.getElementById("preloader").style.display = "none";
  }
}

firstLoad();
