$(document).ready(function(){
	$('#fullpage').fullpage({
		navigation: true,
    navigationPosition: 'right',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    
    //Accessibility
    keyboardScrolling: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
	});
});
