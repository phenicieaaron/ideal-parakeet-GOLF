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
      url: "https://barrycumbie.github.io/legendary-https://connorlbrown.github.io/bingbong-charlie//"
    },
    {
      name: "Aaron Phenicie",
      gameName: "Cookie Monster and Name Game",
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
    }
  ];

 







