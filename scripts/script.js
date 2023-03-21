$(function () {
    $.each(userGames, function (index, data) {
      // $("body").append(index + data);
  
      $("body").append(
        '<div class="card"> <div class="card-header"> ' +
          data.name +
          '</div><div class="card-body">' +
          '<a target ="_blank" href="' +
          data.url +
          '">' +
          data.gameName +
           
          "</a></div></div><br>"
      );
    });
  });
  
  const userGames = [
    {
      name: "Connor Brown",
      gameName: "Sad Lebron",
      url: "https://connorlbrown.github.io/bingbong-charlie//"
    },
    {
      name: "Aaron Phenicie",
      gameName: "Cookie Monster and Name Game",
      url: "https://phenicieaaron.github.io/upgraded-tribble-echo/"
    },
    {
      name: "Gage Mathis",
      gameName: "Gage's Gamespace",
      url: "https://gagethekidd.github.io/eery-eel-echo/#"
    },
    {
      name: "Aman Nawaria",
      gameName: "Amanna's Gamespace",
      url: "https://amannawaria12.github.io/Echo_lab/"
    },
    {
      name: "Vikas Nehra",
      gameName: "Elon and Dog",
      url: "https://barrycumbie.github.io/legendary-waddle/"
    },
     {
      name: "Will Wiggins",
      gameName: "Move Sphagett",
      url: "https://mithrandiryeet.github.io/charlie_spaghett_1/"
    },
       {
      name: "Jackson Thompson",
      gameName: "WooWop ",
      url: "https://jacksonthompson1.github.io/jt-lab-echo/"
    },
    {
    name: "Weston Humphries",
      gameName: "Drag Wow Picture",
      url: "https://westonhumphries.github.io/laughing-octo-bravo/"
    },
    {
    name: "Kaibry Southern",
      gameName: "Fun Name Game",
      url: "https://kaibrysouthern.github.io/psychic-octo-adventure-delta/"
    },  
       {
      name: "Brody Coan",
      gameName: "Brody's Name Game",
      url: "https://bcoan2.github.io/supreme-octo-broccoli-delta/"
    },    
       {
      name: "Jason Conkle",
      gameName: "Chess Quiz Game",
      url: "https://jconkle5.github.io/loose-juice-charlie/"
    },  
    {
      name: "Anna Stokes",
      gameName: "Anna's Name Game",
      url: "https://stokeybear.github.io/DeltaLab/"
    },  
    {
      name: "Anh Nguyen",
      gameName: "Anh's Doge Game",
      url: "https://stokeybear.github.io/DeltaLab/"
    },
    {
      name: "Robert Marcum",
      gameName: "Robert's Charlie Game",
      url: "https://cis-376-charlie.catharsis11867.repl.co/"
    },
    {
      name: "Vanessa Beard",
      gameName: "Vanessa's Charlie Game",
      url: "https://github.com/vbeard240/Charlie-Lab"
    },
    {
      name: "Junnosuke Noiri",
      gameName: "Junnosuke's Name Game",
      url: "https://junnoiri.github.io/cis-376-DELTA-lab/"
    },
  ];



  // FOR CODEPEN BACKGROUND
  const stars = document.getElementById('stars');
  const starsCtx = stars.getContext('2d');
  const slider = document.querySelector(".slider input");
  const output = document.querySelector("#speed");
  
  // global variables
  let screen, starsElements, starsParams = { speed: 2, number: 300, extinction: 4 };
  
  // run stars
  setupStars();
  updateStars();
  
  // handle slider
  output.innerHTML = slider.value;
  slider.oninput = function() {
      output.innerHTML = this.value;
      starsParams.speed = this.value;
  };
  
  // update stars on resize to keep them centered
  window.onresize = function() {
      setupStars();
  };
  
  // star constructor
  function Star() {
      this.x = Math.random() * stars.width;
      this.y = Math.random() * stars.height;
      this.z = Math.random() * stars.width;
  
      this.move = function() {
          this.z -= starsParams.speed;
          if (this.z <= 0) {
              this.z = stars.width;
          }
      };
  
      this.show = function() {
          let x, y, rad, opacity;
          x = (this.x - screen.c[0]) * (stars.width / this.z);
          x = x + screen.c[0];
          y = (this.y - screen.c[1]) * (stars.width / this.z);
          y = y + screen.c[1];
          rad = stars.width / this.z;
          opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;
  
          starsCtx.beginPath();
          starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
          starsCtx.arc(x, y, rad, 0, Math.PI * 2);
          starsCtx.fill();
      }
  }
  
  // setup <canvas>, create all the starts
  function setupStars() {
      screen = {
          w: window.innerWidth,
          h: window.innerHeight,
          c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
      };
      window.cancelAnimationFrame(updateStars);
      stars.width = screen.w;
      stars.height = screen.h;
      starsElements = [];
      for (let i = 0; i < starsParams.number; i++) {
          starsElements[i] = new Star();
      }
  }
  
  // redraw the frame
  function updateStars() {
      starsCtx.fillStyle = "black";
      starsCtx.fillRect(0, 0, stars.width, stars.height);
      starsElements.forEach(function (s) {
          s.show();
          s.move();
      });
      window.requestAnimationFrame(updateStars);
  }