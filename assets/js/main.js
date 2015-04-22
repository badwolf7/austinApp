$(function(){
	// Instantiate Sidr and bootstrap
	$('header .fa.fa-bars').sidr();
	$(".collapse").collapse();

	// Data for CTA images
	var cta_data = [
		{
			img: 'http://austintexas.gov/sites/default/files/styles/large_banner_954_257/public/traffic-feature-banner.jpg?itok=aqS0-P4u',
			txt: {
				h2: 'Traffic Congestion Action Plan',
				h3: 'City takes steps to improve traffic flow. <a href="#">Read the full plan here.</a>'
			}
		},
		{
			img: 'http://austintexas.gov/sites/default/files/styles/large_banner_954_257/public/lifeguardatxbanner.jpg?itok=WYQZwe6Q',
			txt: {
				h2: 'Be a Leader! Be a Lifeguard!',
				h3: 'More than 1,000 lifeguards needed this summer'
			}
		},
		{
			img: 'http://austintexas.gov/sites/default/files/styles/large_banner_954_257/public/TalkGreenToMe_Igeekgreenliving.jpg?itok=hWxrqpJx',
			txt: {
				h2: 'Talk Green to Me',
				h3: '"I geek green everything," Thor Harris, The Swans'
			}
		},
		{
			img: 'http://austintexas.gov/sites/default/files/styles/large_banner_954_257/public/RESIDENT_Nature_Day.jpg?itok=jqT3g9IJ',
			txt: {
				h2: 'Austin Nature Day!',
				h3: 'At Barton Springs, April 25, noon to 2 p.m.'
			}
		}
	];
	// init interval
	var int = 0;

	function changeImg(num){
		// Change the CTA image
		$('section.cta').fadeOut(400, function(){
			// after fade begin changes
			if(num === 1){
				// cta-one is special due to the location of the lifeguard
				$('section.cta img').addClass('cta-one');
			}else{
				$('section.cta img').removeClass('cta-one');
			}
			// change the displayed info
			$('section.cta img').attr('src',cta_data[num].img);
			$('section.cta .cta-txt h2').html(cta_data[num].txt.h2);
			$('section.cta .cta-txt h3').html(cta_data[num].txt.h3);
		})
		// changes complete fade back in
		.fadeIn(400);
	}
	setInterval(function(){
		// repeat the change every 5s
		if(int === 4){
			// reset int based on num of photos
			int = 0;
		}
		changeImg(int);
		int++;
	}, 5000);

	// timed out - they weren't bad we just have to wait for bootstrap to finish
	setTimeout(function(){
		$('a[href="#resCollapseOne"]').click();
	}, 420); // 400 works but giving a little padding just to be safe

	// set height for footer push
	var footerHeight = $('footer').height();
	console.log(footerHeight);
	$('.footerPush').height(footerHeight);
});