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
      title: "Bob's Bowling",
      projectSummary: `Bobs Bowling is a fictional website created by Rabbit Ears Design. It is intended to showcasethe quality of work that clients can expect to recieve.`,
      projectDesignProcess: `The Design goal for "Bob's Bowling was to build a clean website to drive more traffic to the business. I wanted to pick a simple color scheme that was visually appealing and built more brand recognition.`,
      projectMoreInfo: `This project required deep knowledge of scss features along with the use of JavaScript and JS frameworks`,
      projectImg1: "./img/projects/bobs_bowling1.png",
      projectImg2: "./img/projects/bobs_bowling2.png",
      projectImg3: "./img/projects/bobs_bowling3.png",
      github: "https://github.com",
      website: "https://www.bobsbowling.com/",
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
        project.style.display = "block";
        project.scrollIntoView();

        let indexOfSwiper = projectsArr.indexOf(item);

        projectTitle.innerHTML = projectData[indexOfSwiper].title;
        projectSummary.innerHTML = projectData[indexOfSwiper].projectSummary;
        projectImg1.src = projectData[indexOfSwiper].projectImg1;
        projectImg2.src = projectData[indexOfSwiper].projectImg2;
        projectImg3.src = projectData[indexOfSwiper].projectImg3;
        projectDesignProcess.innerHTML =
          projectData[indexOfSwiper].projectDesignProcess;
        projectMoreInfo.innerHTML = projectData[indexOfSwiper].projectMoreInfo;
        github.href = projectData[indexOfSwiper].github;
        website.href = projectData[indexOfSwiper].website;
      } else {
        project.style.display = "none";
      }
    });
  });

  // Get various project content inputs via id

  const project = document.getElementById("project-details");
  const projectTitle = document.getElementById("project-title");
  const projectSummary = document.getElementById("project-summary");
  const projectDesignProcess = document.getElementById(
    "project-design-process"
  );
  const projectMoreInfo = document.getElementById("project-more-info");
  const projectImg1 = document.getElementById("project-img-1");
  const projectImg2 = document.getElementById("project-img-2");
  const projectImg3 = document.getElementById("project-img-3");
  const github = document.getElementById("github");
  const website = document.getElementById("website");
};

showProjectDetails();
// END
