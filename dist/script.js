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
    300: {
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
      github: "https://github.com",
      website: "https://google.com",
    },

    // Moment Gallery
    {
      title: "Moment Skis Gallery",
      projectSummary: `Moment Skis Gallery is a fan page built for the Moment Skis brand. The goal was to create a place where fans of moment skis could view all of the topsheet graphics that have been created by the brand since their inception.`,
      projectDesignProcess: `Throught the design process it was important to maintain the look and feel of the original momentskis.com website. Utilizing similar color schemes and logos allowed this process.`,
      projectMoreInfo: `Checkout momentskis.com to learn more about the brand and visit the gallery below to see the skis!`,
      projectImg1: "./img/projects/moment_gallery_cover.png",
      projectImg2: "./img/projects/moment_skis_gallery2.png",
      projectImg3: "./img/projects/moment_skis_gallery3.png",
      github: "https://github.com",
      website: "https://www.momentskisgallery.com/",
    },
    // Something Sweet
    {
      title: "Something Sweet",
      projectSummary: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusamus architecto corporis cupiditate consequuntur ex fuga
    nulla provident reiciendis mollitia quos ipsum incidunt
    doloremque cum consequatur, nobis asperiores, unde id facilis.`,
      projectDesignProcess: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Deserunt praesentium sit delectus quidem tenetur similique
    officiis aspernatur enim illum eaque!`,
      projectMoreInfo: `     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Pariatur quia vero facilis nostrum a deleniti accusamus quod
    debitis tenetur blanditiis non alias laborum consequatur, rerum
    veniam illo similique aspernatur aperiam earum? Maxime eaque
    animi ratione!`,
      projectImg1: "./img/projects/something_sweet1.png",
      projectImg2: "./img/projects/something_sweet2.png",
      projectImg3: "./img/projects/something_sweet3.png",
      github: "https://github.com",
      website: "https://somethingsweet.com/",
    },
  ];

  // Get index of swiper-slide and log the corresponding swiper slide array item
  projectsArr.forEach((item) => {
    item.addEventListener("click", () => {
      if (projectsArr.indexOf(item) + 1 <= projectData.length) {
        card.style.display = "flex";
        card.scrollIntoView();

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
