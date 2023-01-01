const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 1 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m110.syncusercontent.com/mfs-60:4a3840d84a78ea5efb8683bf3366a8c3=============================/p/épisode%203.mp4?allowdd=0&datakey=oIstlU/XEXH/TXNTJ7JZW7/0FbmMAf/eU5EfXC+OwLTgPL+ulsNhOI0sQp6epsbt67mErlF6bggRBvmlgwRPn0lGXy+hHIGMum4WGVbxRtBc1iTxU9os5GR/X2Ud8T9YACM1ZDVPPgda9z1Q3rfEFBmjsHi8sRcGyvDWtuP3DVH01Jcd5QeKU+pAakDFPsJ9NRjIHUaOkud8NH35B4OKN+UtRuzI38bM860SGOdpK1uCifsu6CX6jRiqunSde6Hka+o3MFpr2ySU5tsAa9sEAR5i4bHNVyt3esUlHyFnVY4wwmfzu/d6UY5lXkFzkQvPSQvNByXdb4zA4g02WMOuHw&engine=ln-2.3.7.3&errurl=ZJPl4jZ0DAHdVJDOOitnu25wfOanjJcPgdt0JsP5bzq8vQdnoAxtEXuk07nrNb8d61OusDphlx0J7ti7RYCCKCdU0sO9n5GVPbeqF//PxxBImxgzySjN2UWj9mAV93WjRQacMzrmXFt4bXnBGN7v9RKu8p453Rou3KwQTRfD9EAcjB7U2Z+RUX24+lNcoZqHGzlLEyXroU1PqVEa+8pBC6edaj9A/7KklD9Gg+DwJxTzgM8OqMZFA6prEfAaMWwoZpy5qUgquxwqldY+J1KXFcVRZsjNuc3N1N+AvXH1yrZsCUaE9RvQoddRCEmO0PM7golf/8O0pkyMz1JgQV+qBw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwMy5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnJUMzJUE5cGlzb2RlJTIwMy5tcDQ7&ipaddress=1458994159&linkcachekey=85c672ca0&linkoid=1982860011&mode=101&sharelink_id=9628443710011&timestamp=1672607315632&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=fded5fc2c8b1e0dbd69b635aadde5939003c2b59&cachekey=60:4a3840d84a78ea5efb8683bf3366a8c3=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
