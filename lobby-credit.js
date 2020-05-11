// window.setTimeout("showTime()", 1000);

//         function getVNTime() {
//             var time = new Date();
//             var dow = time.getDay();
//             if (dow == 0)
//                 dow = "Chủ nhật";
//             else if (dow == 1)
//                 dow = "Thứ hai";
//             else if (dow == 2)
//                 dow = "Thứ ba";
//             else if (dow == 3)
//                 dow = "Thứ tư";
//             else if (dow == 4)
//                 dow = "Thứ năm";
//             else if (dow == 5)
//                 dow = "Thứ sáu";
//             else if (dow == 6)
//                 dow = "Thứ bảy";
//             var day = time.getDate();
//             var month = time.getMonth() + 1;
//             var year = time.getFullYear();
//             var hr = time.getHours();
//             var min = time.getMinutes();
//             var sec = time.getSeconds();
//             day = ((day < 10) ? "0" : "") + day;
//             month = ((month < 10) ? "0" : "") + month;
//             hr = ((hr < 10) ? "0" : "") + hr;
//             min = ((min < 10) ? "0" : "") + min;
//             sec = ((sec < 10) ? "0" : "") + sec;
//             return "GMT+8: " + year + "/" + month + "/" + day + " " + hr + ":" + min + ":" + sec;
//         }

//         function showTime() {
//             var vnclock = document.getElementById("vnclock");
//             if (vnclock != null)
//                 vnclock.innerHTML = getVNTime();
//             setTimeout("showTime()", 1000);
//         }
//     $(document).ready(function() {
//  // executes when HTML-Document is loaded and DOM is ready

// // breakpoint and up  
// //$(window).resize(function(){
//     if ($(window).width() >= 980){  

//       // when you hover a toggle show its dropdown menu
//       $(".navbar-collapse .nav-item").hover(function () {
//         console.log('hv');
//          $(this).parent('.navbar-nav').toggleClass("show");
//          $(this).find(".megamenu").toggleClass("show"); 
//        });

//         // hide the menu when the mouse leaves the dropdown
//       $( ".menu-large .megamenu" ).mouseleave(function() {
//         $(this).removeClass("show");  
//       });
  
//         // do something here
//     }   
// //});  
  
  

// // document ready  
// });
$(document).ready(function() {
	$(".hs-menubar").hsMenu();
	$(".grid-trigger").click(function(){
    $(".fa-sync").toggleClass("fa-sync-rotate");
  });
});