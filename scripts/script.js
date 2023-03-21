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
           
          "</a></div></div>"
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
      gameName: "Cookie Monster and Name",
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
      gameName: "Vanessa's Charlie Repo",
      url: "https://github.com/vbeard240/Charlie-Lab"
    },
    {
      name: "Junnosuke Noiri",
      gameName: "Junnosuke's Name Game",
      url: "https://junnoiri.github.io/cis-376-DELTA-lab/"
    },
  ];

