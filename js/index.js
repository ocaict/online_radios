/* Oca WebTech */
import streams from "./streams.js";

function onDeviceReady() {
  // Define initial variables
  let selected = streams[0];
  let selectedImage = null;
  const waveGif = "images/wave.gif";
  const wavePNG = "images/wave2.png";

  // Get DOM elements
  const playPauseBtn = document.querySelector("#play-btn");
  const noticeContainer = document.querySelector(".notice-container");
  const radiosContainer = document.querySelector(".radios");
  const searchInput = document.querySelector("#search");
  const openMenuBtn = document.querySelector(".menu-btn");
  const navContainer = document.querySelector(".nav-container");
  const overlay = document.querySelector(".overlay");
  const page = document.querySelector(".page");
  const backBtn = document.querySelector(".back-btn");
  const pageTile = document.querySelector(".page .title");
  const pageBody = document.querySelector(".page .body");

  // Create an audio object
  let audio = new Audio();

  // Function to create a radio button
  const createRadioButton = (radio) => {
    // Create button element
    const button = document.createElement("button");
    button.classList.add("ocamedia");
    button.id = radio.stream;

    // Create image element
    const image = document.createElement("img");
    image.src = radio.imageUrl;
    image.alt = radio.name;
    button.appendChild(image);

    // Create contents div
    const contentsDiv = document.createElement("div");
    contentsDiv.classList.add("btn-contents");

    // Create name paragraph
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = radio.name;
    contentsDiv.appendChild(nameParagraph);

    // Create location small
    const locationSmall = document.createElement("small");
    locationSmall.textContent = radio.location;
    contentsDiv.appendChild(locationSmall);

    button.appendChild(contentsDiv);

    return button;
  };

  // Function to create radio list
  const createRadioList = (streams) => {
    if (streams.length === 0) {
      radiosContainer.innerHTML = `<p>Result Not Found!</p>`;
      return;
    }
    // Create a document fragment
    const fragment = document.createDocumentFragment();

    // Iterate through the streams
    streams.forEach((radio) => {
      const button = createRadioButton(radio);
      // Create Wave Image
      const waveImage = document.createElement("img");
      waveImage.classList.add("wave");
      waveImage.src = waveGif;
      waveImage.alt = "Wave";
      button.appendChild(waveImage);
      fragment.appendChild(button);

      if (radio.stream === selected.stream) {
        button.classList.add("selected");
        selectedImage = button.querySelector(".wave");
      }
    });

    // Clear and update radios container
    radiosContainer.innerHTML = "";
    radiosContainer.appendChild(fragment);
  };

  // Create the radio list
  createRadioList(streams);

  // Function to play media
  const playMedia = (selected) => {
    // Display loading notice
    noticeContainer.innerHTML = `<p>Loading... ${selected.name}</p>`;
    // Fetch the selected stream
    fetch(selected.stream)
      .then((response) => {
        if (response.ok) {
          console.log("Data is available to stream.");
          // Event listener for when audio starts playing
          audio.addEventListener("play", () => {
            console.log("Audio started playing.");
          });

          // Event listener for audio errors
          audio.addEventListener("error", (error) => {
            console.error("Error playing audio:", error);
          });

          // Set the audio source to the selected stream
          audio.src = selected.stream;

          // Event listener for when audio metadata is loaded
          audio.addEventListener("loadedmetadata", () => {
            audio.play();
            playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            noticeContainer.innerHTML = `<p>Playing - ${selected.name}</p>`;
            selectedImage.src = waveGif;
            selectedImage.style.display = "block";
          });
        } else {
          console.log(
            "No data available to stream. Response status:",
            response.status
          );
        }
      })
      .catch((error) => {
        noticeContainer.innerHTML = `<p style="color:red;">Ubnable to play Radio, Check Your Network Connection</p>`;
        console.error("Error checking data availability:", error);
      });
  };

  // Function to stop media
  const stopMedia = () => {
    if (selectedImage) {
      selectedImage.src = wavePNG;
    }
    audio.src = selected.stream;
    audio.pause();
    audio.currentTime = 0;
  };

  const addEventListener = () => {
    // Add click event listeners to radio buttons
    const buttons = document.querySelectorAll(".ocamedia");
    const waves = document.querySelectorAll(".wave");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const streamUrl = button.id;
        selected = streams.find((stream) => stream.stream === streamUrl);
        buttons.forEach((btn) => btn.classList.remove("selected"));
        waves.forEach((wave) => {
          wave.style.display = "none";
        });
        stopMedia();
        button.classList.add("selected");
        selectedImage = button.querySelector(".wave");

        playMedia(selected);
      });
    });
  };

  addEventListener();
  // Add click event listener to play button
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      playMedia(selected);
    } else {
      audio.pause();
      selectedImage.src = wavePNG;
      playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
      noticeContainer.innerHTML = `<p>Paused - ${selected.name}</p>`;
    }
  });

  // Event listener for offline status
  window.addEventListener("offline", () => {
    stopMedia();
    noticeContainer.innerHTML = `<p style="color:red;">You are Offline</p>`;
  });

  // Event listener for online status
  window.addEventListener("online", () => {
    playMedia(selected);
    noticeContainer.classList.remove("offline");
  });

  // Implement Search and Filter
  searchInput.addEventListener("input", (e) => {
    let filteredStreams = [];

    const search = e.target.value;
    if (search && search.trim().length >= 2) {
      filteredStreams = streams.filter((stream) => {
        return (
          stream.name.toLowerCase().includes(search.trim().toLowerCase()) ||
          stream.location.toLowerCase().includes(search.trim().toLowerCase())
        );
      });
      createRadioList(filteredStreams);
    } else {
      createRadioList(streams);
    }
    addEventListener();
  });

  // Open Menu
  const showMenu = () => {
    navContainer.classList.add("show-nav");
    overlay.classList.remove("hide");
  };
  // hide Menu
  const hideMenu = () => {
    navContainer.classList.remove("show-nav");
    overlay.classList.add("hide");
  };

  overlay.addEventListener("click", hideMenu);

  openMenuBtn.addEventListener("click", showMenu);

  // Show Page
  const showPage = (title, body) => {
    pageBody.innerHTML = "";
    pageTile.innerHTML = title;
    pageBody.innerHTML = `
    <p>${body}</p>

    `;
    page.classList.remove("hide");
  };

  const menuBtns = document.querySelectorAll(".list-item");
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.classList.contains("home")) {
        hideMenu();
      } else if (btn.classList.contains("contact")) {
        hideMenu();
        showPage(
          "Contact",
          "Contact Oluegwu Chigozie of Oca WebTech today at  <a href='mailto:ocawebtech@gmail.com'><em>ocawebtech@gmail.com</em></a>   and let's unlock your full potential through exceptional web development, eLearning development, mobile app development training services!"
        );
      } else if (btn.classList.contains("about")) {
        hideMenu();
        showPage(
          "About",
          "Oca WebTech Your One-Stop Solution for Web Development, eLearning Development, Mobile App Development, and Training Services!"
        );
      } else if (btn.classList.contains("more")) {
        hideMenu();
      } else if (btn.classList.contains("share")) {
        hideMenu();
      }
    });
  });

  // hide Page

  const hidePage = () => {
    page.classList.add("hide");
  };

  backBtn.addEventListener("click", () => {
    hideMenu();
    hidePage();
  });
}

onDeviceReady();
