const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Đom Đóm Lofi Ver",
      singer: "Anh Khoa x Enderlazer",
      path: "music//y2mate.com - Gió Ơi Xin Đừng Lấy Em Đi  Đom Đóm Enderlazer Lofi Ver  Jack  Anh Khoa Cover.mp3",
      image:
        "https://i.ytimg.com/vi/4CCGI83vOVo/maxresdefault.jpg"
    },
    {
      name: "Chúng Ta Của Hiện Tại Lofi Mood",
      singer: "sơn Tùng MT-P x TUYENVU",
      path: "music//y2mate.com - Tình em là đại dương x Missing you  Lofi Mood 1 (2).mp3",
      image:
        "https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
    },
    {
      name: "Chỉ Muốn Bên Em Lúc Này",
      singer: "Jiki X ft Huy Vạc",
      path: "music//y2mate.com - Chỉ Muốn Bên Em Lúc Này Freak D Lofi Ver  Jiki X ft Huy Vạc.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/4/d/c/e4dce0d4ae15c688e2cd8b1934902380.jpg"
    },
    {
      name: "Hạnh Phúc Đơn Giản Lắm Lofi Ver",
      singer: "Anh Quân Idol x Khắc Anh x Freak D",
      path: "music//y2mate.com - Hạnh Phúc Đơn Giản Lắm Lofi Ver  Anh Quân Idol x Khắc Anh x Freak D.mp3",
      image:
        "https://i.ytimg.com/vi/xEtzAaKeWJ8/maxresdefault.jpg"
    },
    {
      name: "Dù Cho Mai Về Sau Lofi Ver",
      singer: "buitruonglinh x Freak D",
      path: "music//y2mate.com - Dù Cho Mai Về Sau Lofi Ver  buitruonglinh x Freak D.mp3",
      image:
        "https://i.ytimg.com/vi/SGlBQR-ftVI/maxresdefault.jpg"
    },
    {
      name: "Lời Nói Điêu Trên Môi Em Lofi Ver",
      singer: "Freak D x Đỗ Nguyên Phúc.ft Lil Z Poet",
      path: "music//y2mate.com - Lời Nói Điêu Trên Môi Em Freak D Lofi Ver  Đỗ Nguyên Phúc ft Lil Z Poet.mp3",
      image:
        "https://i1.sndcdn.com/artworks-mbFBrQaHrpHY-0-t500x500.jpg"
    },
    {
      name: "Tình Yêu Màu Hồng Lofi Ver",
      singer: "Hồ Văn Quý x Xám x Freak D",
      path: "music//y2mate.com - Tình Yêu Màu Hồng Lofi Ver  Hồ Văn Quý x Xám x Freak D.mp3",
      image:
        "https://i.ytimg.com/vi/uVoxiIkf48Y/maxresdefault.jpg"
    },
    {
      name: "Cô Ấy Nói Lofi Ver",
      singer: "Ngô Anh Đạt x Freak D",
      path: "music//y2mate.com - Cô Ấy Nói Lofi Ver  Ngô Anh Đạt x Freak D.mp3",
      image:
        "https://i.ytimg.com/vi/rkWSr7Ue5hk/maxresdefault.jpg"
    },
    {
      name: "Chúng Ta Sau Này Lofi Ver",
      singer: "TRI x Freak D",
      path: "music//y2mate.com - Chúng Ta Sau Này Lofi Ver  TRI x Freak D.mp3",
      image:
        "https://leecoffee.net/wp-content/uploads/2021/02/Chung-Ta-Sau-Nay-T.R.jpg"
    },
    {
      name: "Phố Cũ Còn Anh",
      singer: "Quinn Ft",
      path: "music//y2mate.com - Phố Cũ Còn Anh  Quinn ft ChillyLyrics VideoMeens.mp3",
      image:
        "https://data.chiasenhac.com/data/cover/128/127674.jpg"
    },
    {
      name: "Nợ Ai Đó Lời Xin Lỗi Lofi ver",
      singer: "Bozitt x Freak D",
      path: "music//y2mate.com - Nợ Ai Đó Lời Xin Lỗi Lofi ver  Bozitt x Freak D.mp3",
      image:
        "image//nợ ai đó lời xin lỗi.jpg"
    },
    {
      name: "Nợ Ai Đó Lời Xin lỗi 2 Lofi Ver",
      singer: "Bozitt x Freak D",
      path: "music//y2mate.com - Nợ Ai Đó Lời Xin lỗi 2 Lofi Ver  Bozitt x Freak D.mp3",
      image:
        "image//nợ ai đó lời xin lỗi.jpg"
    },
    {
      name: "Phải Chăng Em Đã Yêu Lofi Ver",
      singer: "Juky San x RedT x Freak D",
      path: "music//y2mate.com - Phải Chăng Em Đã Yêu Lofi Ver  Juky San x RedT x Freak D.mp3",
      image:
        "https://i1.sndcdn.com/artworks-orHjJMNcCvJQMVfF-w9Qk9w-t500x500.jpg"
    },
    {
      name: "Nàng Thơ Lofi Ver",
      singer: "Hoàng Dũng x Freak D",
      path: "music//y2mate.com - Nàng Thơ Lofi Ver  Hoàng Dũng x Freak D.mp3",
      image:
        "image//maxresdefault (4).jpg"
    },
    {
      name: "Hôm Nay Em Cưới Rồi Lofi Ver",
      singer: "Khải Đăng x Freak D",
      path: "music//y2mate.com - Hôm Nay Em Cưới Rồi Lofi Ver  Khải Đăng x Freak D.mp3",
      image:
        "https://images.shazam.com/coverart/t551416640_s400.jpg"
    },
    {
      name: "Kẻ Mộng Mơ Lofi Ver",
      singer: "Reddy x Freak D",
      path: "music//y2mate.com - Kẻ Mộng Mơ Lofi Ver  Reddy x Freak D.mp3",
      image:
        "image//kẻ mộng mơ.jpg"
    },
    {
      name: "Chẳng Thể Tìm Được Em",
      singer: "PhucXp ft x Freak D",
      path: "music//y2mate.com - Chẳng Thể Tìm Được Em  PhucXp ft Freak D  Audio Official.mp3",
      image:
        "https://o.rada.vn/data/image/2020/11/30/loi-bai-hat-chang-the-tim-duoc-em-700.jpg"
    },
    {
      name: "Anh Mệt Rồi Lofi Ver",
      singer: "Anh Quân Idol x Freak D",
      path: "music//y2mate.com - Anh Mệt Rồi Lofi Ver  Anh Quân Idol x Freak D.mp3",
      image:
        "https://i1.sndcdn.com/artworks-FTkruxyRiVir-0-t500x500.jpg"
    },
    {
      name: "Chắc Ai Đó Sẽ Về Lofi",
      singer: "Sơn Tùng M-TP",
      path: "music//y2mate.com - Chắc Ai Đó Sẽ Về Lofi Ver  Sơn Tùng MTP  Sad Radio Official.mp3",
      image:
        "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"
    },
    {
      name: "Âm Thầm Bên Em Lofi",
      singer: "Sơn Tùng M-TP",
      path: "music//y2mate.com - Âm Thầm Bên Em Lofi Ver  Sơn Tùng MTP x Quanvrox.mp3",
      image:
        "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"
    },
    {
      name: "3107-1",
      singer: "W/n x Nâu x Duongg",
      path: "music//y2mate.com - 3107  Wn  Official Video  ft Nâu Duongg.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2020/05/15/c/f/3/0/1589511815593_640.jpg"
    },
    {
      name: "3107-2",
      singer: "W/n x Nâu x Duongg",
      path: "music//y2mate.com - 31072  DuongG x NAU x WN  OFFICIAL MV.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2020/05/15/c/f/3/0/1589511815593_640.jpg"
    },
    {
      name: "3107-3",
      singer: "W/n x Nâu x Duongg",
      path: "music//y2mate.com - 3107 3  Wn  ft  NâuDuonggTitie  OFFICIAL MV.mp3",
      image:
        "https://avatar-nct.nixcdn.com/song/2020/05/15/c/f/3/0/1589511815593_640.jpg"
    },
    {
      name: "Dừng Thương",
      singer: "DATKAA x marco",
      path: "music//y2mate.com - Dừng Thương Lofi Ver  DATKAA x marco.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/a/e/4/9ae496d0b92cf2ca93359d3b6a508a63.jpg"
    },
    {
      name: "Người Có Thương",
      singer: "DATKAA",
      path: "music//y2mate.com - NGƯỜI CÓ THƯƠNG     LOFI MIX VER BY HIEUZ   DATKAA ft QT BEATZ    FAKE MUSIC VIDEO.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/a/e/4/9ae496d0b92cf2ca93359d3b6a508a63.jpg"
    },
    {
      name: "Anh Sẽ Quên Em Mà Lofi Ver",
      singer: "Nit x Sing x Freak D",
      path: "music//y2mate.com - Anh Sẽ Quên Em Mà Lofi Ver  Nit x Sing x Freak D.mp3",
      image:
        "image//anh sẽ quên em mà.jpg"
    },
    {
      name: "Vầng Trăng Cô Đơn Lofi Ver",
      singer: "Reddy x Orinn",
      path: "music//y2mate.com - Vầng Trăng Cô Đơn Lofi Ver  Reddy x Orinn.mp3",
      image:
        "image//maxresdefault (3).jpg"
    },
    {
      name: "Em Đã Có Người Mới Lofi Ver",
      singer: "Tóc Tiên x Freak D",
      path: "music//y2mate.com - Em Đã Có Người Mới Lofi Ver  Tóc Tiên x Freak D.mp3",
      image:
        "image//em đã có người mới lofi.jpg"
    },
    {
      name: "Tiny Love Lofi Ver",
      singer: "Thịnh Suy x Freak D",
      path: "music//y2mate.com - Tiny Love Lofi Ver  Thịnh Suy x Freak D.mp3",
      image:
        "image//Tiny Love Lofi Vert.jpg"
    },
    {
      name: "Sinh Ra Đã Là Thứ Đối Lập Nhau",
      singer: "Emcee L Da LAB x Freak D",
      path: "music//y2mate.com - Sinh Ra Đã Là Thứ Đối Lập Nhau Freak D Lofi Ver  Emcee L Da LAB ft Badbies.mp3",
      image:
        "image//maxresdefault (1).jpg"
    },
    {
      name: "Phố Đã Lên Đèn Lofi Ver",
      singer: "Huyền Tâm Môn x Freak D",
      path: "music//y2mate.com - Phố Đã Lên Đèn Lofi Ver  Huyền Tâm Môn x Freak D.mp3",
      image:
        "image//maxresdefault (2).jpg"
    },
    {
      name: "Kiêu Ngạo Lofi Ver",
      singer: "Huy Vạc x Freak D",
      path: "music//y2mate.com - Kiêu Ngạo Lofi Ver  Huy Vạc x Freak D.mp3",
      image:
        "https://i1.sndcdn.com/artworks-ZPA4yPy1KUDKKYUv-XzQdvg-t500x500.jpg"
    },
    {
      name: "Kẻ Theo Đuổi Ánh Sáng Lofi Ver",
      singer: "Huy Vạc x Tiến Nguyễn x Freak D",
      path: "music//y2mate.com - Kẻ Theo Đuổi Ánh Sáng Lofi Ver  Huy Vạc x Tiến Nguyễn x Freak D.mp3",
      image:
        "https://i.scdn.co/image/ab67616d0000b2736e26ad2d7d6f55de27298783"
    },
    {
      name: "Suốt Đời Không Xứng Lofi Ver",
      singer: "Khải Đăng x Freak D",
      path: "music//y2mate (mp3cut.net).mp3",
      image:
        "https://i.scdn.co/image/ab67616d0000b273d2c414dbc092cfd18e8434d7"
    },
    {
      name: "Tình Yêu Diệu Kỳ",
      singer: "JIKI",
      path: "music//y2mate.com - Tình yêu diệu kỳ JIKI xLyric.mp3",
      image:
        "https://i.ytimg.com/vi/eM3SIL2KFcI/maxresdefault.jpg"
    },
    {
      name: "Anh Không Theo Đuổi Em Nữa Lofi Ver",
      singer: "JIKI",
      path: "music//y2mate.com - Anh không theo đuổi em nữa Him Lofi Ver  JikiX Cover.mp3",
      image:
        "https://i.ytimg.com/vi/Ns9zrgeoF6A/maxresdefault.jpg"
    },
    {
      name: "Anh Yêu Em Nhiều Lắm Cover",
      singer: "AN VŨ",
      path: "music//y2mate.com - AN VŨ  FULL Anh Yêu Em Nhiều Lắm  Cover Anh biết giờ đây mình không thể trở lại bên nhau.mp3",
      image:
        "https://i.ytimg.com/vi/UWSiWZek-Co/maxresdefault.jpg"
    },
    {
      name: "Những Gì Anh Nói",
      singer: "BOZITT",
      path: "music//y2mate.com - Những Gì Anh Nói  BOZITT  MV Lyrics HD.mp3",
      image:
        "https://nhachay.vn/wp-content/uploads/2020/05/6_maxresdefault.jpg"
    },
    {
      name: "Lạ Lùng Lofi Ver",
      singer: "Vũ x Luxofons",
      path: "music//y2mate.com - lạ lùng  vũlofi ver by luxofons.mp3",
      image:
        "https://i.ytimg.com/vi/FszRWR5Xw6E/maxresdefault.jpg"
    },
    {
      name: "Oceans Remix Lofi",
      singer: "Shalom Margaret Cover",
      path: "music//y2meta.com - Oceans (Shalom Margaret Cover) - Lofi Remix (64 kbps).mp3",
      image:
        "https://i.ytimg.com/vi/vOdUcyAiHjI/maxresdefault.jpg"
    },
    {
      name: "Jar Of Hearts Remix Lofi",
      singer: "Fasetya",
      path: "music//y2mate.com - Jar of Hearts remix lofi  Fasetya  Vietsub  Lyric.mp3",
      image:
        "https://i.ytimg.com/vi/MoWpUXF8ucE/maxresdefault.jpg"
    },
    {
      name: "Someone To You Lofi Cover",
      singer: "Cover Shalom margaret",
      path: "music//y2mate.com - VietSub Someone To You Lofi  Cover Shalom margaret  Lyric Video (1).mp3",
      image:
        "https://i.ytimg.com/vi/mjJ0vfrajGI/maxresdefault.jpg"
    },
    {
      name: "Deathbed Beat",
      singer: "Powfu",
      path: "music//y2mate.com - powfudeathbed beat.mp3",
      image:
        "https://i0.wp.com/themusicalhype.com/wp-content/uploads/2020/02/powfu-death-bed-columbia.jpg?ssl=1"
    },
    {
      name: "Lemon Tree",
      singer: "Gustixa",
      path: "music//y2mate.com - Gustixa  lemon tree.mp3",
      image:
        "https://i.ytimg.com/vi/l2UiY2wivTs/maxresdefault.jpg"
    },
    {
      name: "Anh Sẽ Đón Em",
      singer: "Nguyên x Trang",
      path: "music//y2mate.com - ANH SẼ ĐÓN EM  Nguyên với Trang  Official Lyrics Video .mp3",
      image:
        "https://data.chiasenhac.com/data/cover/152/151279.jpg"
    },
    {
      name: "Lưu Số Em Đi",
      singer: "Huỳnh Văn x VPTiên",
      path: "music//y2mate.com - Lưu Số Em Đi  Huỳnh Văn x VPTiên MV OFFICIAL LYRICS khi nao má cần con dâu thì gọi cho em.mp3",
      image:
        "https://i.ytimg.com/vi/-pZlcAnj5Tc/maxresdefault.jpg"
    },
    {
      name: "Sẵn Sàng Yêu Em Đi Thôi",
      singer: "Woni x Minh Tú",
      path: "music//y2mate.com - Sẵn Sàng Yêu Em Đi Thôi  Woni x Minh Tú  Relax Music.mp3",
      image:
        "https://i.ytimg.com/vi/Svwi0D04RZE/maxresdefault.jpg"
    },
    {
      name: "Trời Giấu Mang Đi",
      singer: "AMEE x VIRUSS",
      path: "music//y2mate.com - TRỜI GIẤU TRỜI MANG ĐI  AMEE x VIRUSS  Lyrics.mp3",
      image:
        "https://images.genius.com/f507c7b66ff6d0f567db15f9b02fa464.500x500x1.jpg"
    },
    {
      name: "Anh Đánh Rơi Người Yêu Này",
      singer: "Andiez ft AMEE",
      path: "music//y2mate.com - Anh Đánh Rơi Người Yêu Này  Andiez ft AMEE  OST TTVKOBE.mp3",
      image:
        "https://i.ytimg.com/vi/I3RICWXA_3U/maxresdefault.jpg"
    },
    {
      name: "ĐÂU AI DÁM HỨA",
      singer: "CZEE",
      path: "music//y2mate.com - ĐÂU AI DÁM HỨA  CZEE Official Lyric MV  OST Thỏ Bảy Màu Và Người Yêu Mới Của Chị Xô.mp3",
      image:
        "https://i.scdn.co/image/ab67616d0000b27300c0e52e51e9063096b8d029"
    },
    {
      name: "WHEN YOU LOOK AT ME",
      singer: "Obito x Seachains",
      path: "music//y2mate.com - WHEN YOU LOOK AT ME CM1X REMIX  Obito x Seachains.mp3",
      image:
        "https://i.ytimg.com/vi/MTIKObDJe10/maxresdefault.jpg"
    },
    {
      name: "Tell Ur Mom II",
      singer: "Gii ft Winno x Cucak Remix",
      path: "music//y2mate.com - Tell Ur Mom II Remake  Gii ft WinnoCukak Remix Audio Lyrics Video.mp3",
      image:
        "https://i1.sndcdn.com/artworks-hMq2AqUAd827K61N-HC9AhA-t500x500.jpg"
    },
    {
      name: " Mắt Nice Cha Cha Tune Remix",
      singer: "Ssahita ft Duy Lion x Cucak Remix",
      path: "music//y2mate.com - Mắt Nice Cha Cha Tune  Ssahita ft Duy LionCukak Remix Audio Lyrics Video.mp3",
      image:
        "https://i.ytimg.com/vi/QKCGXXIOWBg/mqdefault.jpg"
    },
    {
      name: "Lưu Số Em Đi Remix",
      singer: "Huỳnh Văn x VPTiên x HUVA Remix",
      path: "music//y2mate.com - Lưu Số Em Đi  HUVA Remix   Huỳnh Văn x Vũ Phụng Tiên  Nhạc Trẻ Remix Hot TikTok Hay Nhất 2021.mp3",
      image:
        "https://i.ytimg.com/vi/-pZlcAnj5Tc/maxresdefault.jpg"
    },
    {
      name: "Ngại Nói Remix",
      singer: "Tú Đào ft EZFluv x ToannRemix Version by 1 9 6 7",
      path: "music//y2mate.com - Ngại Nói  Tú Đào ft EZFluv x ToannRemix Version by 1 9 6 7 Audio Lyrics.mp3",
      image:
        "https://images.genius.com/f1a396ab9a5309867a6bc27d39cc56df.500x500x1.jpg"
    },
    {
      name: "Ai Đưa Em Về Remix",
      singer: "Tia ft Lê Thiện Hiếu x Cucak Remix",
      path: "music//y2mate.com - Ai Đưa Em Về  Tia ft Lê Thiện HiếuCukak Remix Audio Lyrics Video.mp3",
      image:
        "https://i.ytimg.com/vi/apqe_u3VJQ4/maxresdefault.jpg"
    },
    {
      name: "Anh Sẽ Đón Em Remix",
      singer: " Nguyên ft Trang x Cucak Remix",
      path: "music//y2mate.com - Anh Sẽ Đón Em  Nguyên ft TrangCukak Remix  Audio Lyrics.mp3",
      image:
        "https://data.chiasenhac.com/data/cover/152/151279.jpg"
    },
    {
      name: "Chạy Về Khóc Với Anh Remix",
      singer: "Erik x Cukak Remix",
      path: "music//y2mate.com - Chạy Về Khóc Với Anh  ErikCukak Remix Audio Lyrics Video.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/share/2022/01/26/1/f/7/6/1643184498175.jpg"
    },
    {
      name: "PRECIOUS Remix",
      singer: " DADUC ft KIPER T  x  Cucak Remix",
      path: "music//y2mate.com - PRECIOUS  DADUC ft KIPER TCukak Remix  Official Lyrics Video.mp3",
      image:
        "https://i1.sndcdn.com/artworks-dlaiKRITNaCbsVYo-oglMhw-t500x500.jpg"
    },
    {
      name: "ĐÂU AI DÁM HỨA Remix",
      singer: "CZEE x Cukak Remix",
      path: "music//y2mate.com - Đâu Ai Dám Hứa  CZEECukak Remix Official Lyrics Video.mp3",
      image:
        "https://i.scdn.co/image/ab67616d0000b27300c0e52e51e9063096b8d029"
    },




  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')",>
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();
