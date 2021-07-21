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
      cardHeader: "Bob's Bowling",
      cardImage: "./img/projects/bobs_bowling1.png",
      cardLabelYear: "2021",
      cardLabelBizType: "Ski Company",
      cardLabelCategory: "Action",
      cardDescription: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      github: "https://github.com/RabbitEarsDesign/bowling_website",
      website: "https://google.com",
    },

    // Something Sweet
    {
      cardHeader: "Something Sweet",
      cardImage: "./img/projects/something_sweet3.png",
      cardLabelYear: "2021",
      cardLabelBizType: "Ice Cream Store",
      cardLabelCategory: "Small Business",
      cardDescription: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      github: "https://github.com",
      website: "https://google.com",
    },

    // Moment Gallery
    {
      cardHeader: "Bob's Bowling",
      cardImage: "./img/projects/bobs_bowling1.png",
      cardLabelYear: "2021",
      cardLabelBizType: "Ski Company",
      cardLabelCategory: "Action",
      cardDescription: "sdnfajdfnkdfnskjfna;kdsjnf sdkjnsfnskjfnk",
      github: "https://github.com",
      website: "https://google.com",
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

        cardHeader.innerHTML = projectData[indexOfSwiper].cardHeader;
        cardLabelYear.innerHTML = projectData[indexOfSwiper].cardLabelYear;
        cardImage.src = projectData[indexOfSwiper].cardImage;
        cardLabelBizType.innerHTML =
          projectData[indexOfSwiper].cardLabelBizType;
        cardLabelCategory.innerHTML =
          projectData[indexOfSwiper].cardLabelCategory;
        github.href = projectData[indexOfSwiper].github;
        website.href = projectData[indexOfSwiper].website;
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
  const cardLabelBizCategory = document.getElementById(
    "card-label-biz-category"
  );
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
