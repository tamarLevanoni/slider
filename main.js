// var slider = tns({
//   container: ".my-slider",
//   items: 3,

//   responsive: {
//     640: {
//       edgePadding: 20,
//       gutter: 20,
//       items: 2,
//     },
//     700: {
//       gutter: 30,
//     },
//     900: {
//       items: 3,
//     },
//   },
// });
var slider2 = tns({
  container: "#customize",
  items: 3,
  controlsContainer: "#customize-controls",
  navContainer: "#customize-thumbnails",
  navAsThumbnails: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayButton: "#customize-toggle",
  swipeAngle: false,
  speed: 400,
});
