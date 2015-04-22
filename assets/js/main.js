$(function(){
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

	var int = 0;

	function changeImg(num){
		$('section.cta').fadeOut(400, function(){
			if(num === 1){
				$('section.cta img').addClass('cta-one');
			}else{
				$('section.cta img').removeClass('cta-one');
			}
			$('section.cta img').attr('src',cta_data[num].img);
			$('section.cta .cta-txt h2').html(cta_data[num].txt.h2);
			$('section.cta .cta-txt h3').html(cta_data[num].txt.h3);
		})
		.fadeIn(400);
	}
	setInterval(function(){
		if(int === 4){
			int = 0;
		}
		changeImg(int);
		int++;
	}, 5000);


	$('header .fa.fa-bars').sidr();
	$(".collapse").collapse();
});