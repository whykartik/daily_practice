const reels = [
  {
    ismuted: true,
    username: "My Baddi<3",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "beauty and brain",
    video: "./reels/lv_7576083339631774981_20251223015509.mp4",
    userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    ismuted: true,
    username: "BAchii",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "tttujpakkndmu",
    video: "./reels/VN20251223_013312.mp4",

    userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
  },
  {
    ismuted: true,
    username: "PAtaka",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "flawless",
    video: "./reels/VN20251223_012438.mp4",

    userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    ismuted: true,
    username: "Cupcake sweety",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "bombb",
    video: "./reels/VN20251223_012302.mp4",

    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    ismuted: true,
    username: "PApi <3",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "liawot.",
    video: "./reels/lv_7577006647332179205_20251223023824.mp4",

    userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    ismuted: true,
    username: "honey.harshita",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "perfectionn",
    video: "./reels/lv_7531080601038884149_20251223023319.mp4",

    userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
  },
  {
    ismuted: true,
    username: "my love",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "my food 🤯🍔",
    video: "./reels/lv_7481912901377330438_20251223022906.mp4",

    userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
  }
  //, {
  //   ismuted: true,
  //   username: "musicbytara",
  //   likeCount: 14500,
  //   isLiked: false,
  //   commentCount: 267,
  //   shareCount: 73,
  //   isFollowed: true,
  //   caption: "Late night vibes // piano version 🎹✨",
  //   video: "./reels/lv_7576083339631774981_20251223015509.mp4",

  //   userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  // },
  // {
  //   ismuted: true,
  //   username: "techreviews101",
  //   likeCount: 23180,
  //   isLiked: true,
  //   commentCount: 481,
  //   shareCount: 120,
  //   isFollowed: false,
  //   caption: "The most underrated smartphone of 2024 📱",
  //   video: "./reels/lv_7576083339631774981_20251223015509.mp4",

  //   userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
  // },
  // {
  //   ismuted: true,
  //   username: "learnanimations",
  //   likeCount: 18740,
  //   isLiked: false,
  //   commentCount: 350,
  //   shareCount: 92,
  //   isFollowed: true,
  //   caption: "GSAP can literally change your career. Start today.",
  //   video: "./reels/lv_7576083339631774981_20251223015509.mp4",

  //   userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  // }
];
var allReels = document.querySelector('.all-reels')


function addData() {
  var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
          ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
      
    </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <hismuted:true,4>${elem.
        username}</h4>
              <button id=${idx} class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
  })

  allReels.innerHTML = sum
}

addData()


allReels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }

    addData()
  }
  if (dets.target.className == 'follow') {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }

    addData()
  }

 if (dets.target.className == 'mute') {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true
    } else {
      reels[dets.target.id].ismuted = false
    }
    addData()
  }

})
