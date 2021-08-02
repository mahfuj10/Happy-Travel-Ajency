// counting
// $(document).ready(function(){
//     $(".counter").counterUp({
//         delay: 10,
//         time: 1200
//     });
// });

// data aos
AOS.init({
    duration: 1200,
    once: true,
    });
    
// preloader
setTimeout(function(){
        $('.loader-bg').fadeToggle();
    },2000);
