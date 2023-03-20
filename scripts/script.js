$(function () {
    $.each(classCharlies, function (index, data) {
      // $("body").append(index + data);
  
      $("body").append(
        '<div class="card"> <div class="card-header"> ' +
          data.name +
          '</div><div class="card-body">' +
          '<a href="' +
          data.url +
          '">' +
          data.gameName +
          "'s game" +
          "</a></div></div>"
      );
    });
  });
  
  const classCharlies = [
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
      name: "Gage Last Name?",
      gameName: "Gage's Gamespace",
      url: "https://gagethekidd.github.io/eery-eel-echo/#"
    },
    {
      name: "Amanna Waria?",
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
      name: "Will Wiggins",
      gameName: "Spaghett name ",
      url: "https://mithrandiryeet.github.io/delta_name_game/#"
    },
    
       {
      name: "Jackson Thompson",
      gameName: "WooWop ",
      url: "https://jacksonthompson1.github.io/jt-lab-echo/"
    },
       {
      name: "Weston Jumphries",
      gameName: "Wow ",
      url: "https://westonhumphries.github.io/studious-carnival-delta/"
    },
    {
    name: "Weston Jumphries",
      gameName: "Wow Picture",
      url: "https://westonhumphries.github.io/bug-free-octo-barnacle-charlie/"
    },
    {
    name: "Weston Jumphries",
      gameName: "Drag Wow Picture",
      url: "https://westonhumphries.github.io/laughing-octo-bravo/"
    },
       {
      name: "Kaibry southern",
      gameName: "Fun Dog",
      url: "https://kaibrysouthern.github.io/legendary-adventure-charlie/"
    },
    {
    name: "Kaibry southern",
      gameName: "Fun Name",
      url: "https://kaibrysouthern.github.io/psychic-octo-adventure-delta/"
    },
       {
      name: "Brody Coan",
      gameName: "SuperWow V2.0",
      url: "https://bcoan2.github.io/scaling-computing-machine-Charlie/"
    },
       {
      name: "Brody Coan",
      gameName: "Brody's Name Game",
      url: "https://bcoan2.github.io/supreme-octo-broccoli-delta/"
    },
       {
      name: "Brody Coan",
      gameName: "Brody's name facts",
      url: "https://bcoan2.github.io/psychic-umbrella-alpha/"
    },
    
 
  ];