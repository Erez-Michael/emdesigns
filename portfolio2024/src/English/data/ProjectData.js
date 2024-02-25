export const data = [
  //Project One
  {
    title: "Retrofitting & Underpinning",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738137/Ludmer%20Engineering/Project%201/IMG_5041_y3fvrc.jpg",
    navigateTo: "/Retrofiting+Underpinning",
  },
  //Project Two

  {
    title: "Slope Stability",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%202/IMG_5123_sgu4v6.jpg",
    navigateTo: "/Geotechnical-engineering",
  },
  //Project Three

  {
    title: "Shoring Design",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1693257378/DJI_0221_rih3sc.jpg",
    navigateTo: "/Shoring-design",
  },
  //Project Four
  
  {
    title: "Rock Mechanics",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%204/IMG_5241_ufqieb.jpg",
    navigateTo: "/Rock-Mechanics",
  },

];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
