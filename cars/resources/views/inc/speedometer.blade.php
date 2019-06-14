<svg width="230" height="230" viewBox="0 0 280 280" class="speedometer">

	<circle class="circle" cx="140" cy="140" r="121" fill="#D6D6D6" stroke="#F1F1F1" stroke-width="1.65" stroke-miterlimit="10" />

	<path class="inner_1" fill="none" stroke="#F1F1F1" stroke-width="6" stroke-miterlimit="10" d="M58.448 198.968C46.446 182.398 39.37 162.025 39.37 140c0-25.236 9.29-48.3 24.635-65.965" stroke-linejoin="round"></path>

	<path class="inner_2" fill="none" stroke="#F49F29" stroke-width="6" stroke-miterlimit="10" d="M64.005 74.035c11.465-13.197 26.31-23.378 43.19-29.196" stroke-linejoin="round"></path>

	<g class="stripes" fill="none" stroke="#F1F1F1" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round">
		<line x1="112.355" x2="113.871" y1="39.629" y2="46.323"></line>
		<line x1="125.162" x2="125.613" y1="37.062" y2="43.911"></line>
		<line x1="137.676" x2="137.648" y1="37.055" y2="43.919"></line>
		<line x1="150.487" x2="149.385" y1="38.15" y2="44.925"></line>
		<line x1="163.228" x2="161.194" y1="40.813" y2="47.368"></line>
		<line x1="175.804" x2="173.182" y1="45.428" y2="51.771"></line>
		<line x1="187.747" x2="184.165" y1="50.716" y2="56.571"></line>
		<line x1="197.975" x2="193.993" y1="57.927" y2="63.518"></line>
		<line x1="207.81" x2="203.002" y1="66.209" y2="71.108"></line>
		<line x1="216.683" x2="211.241" y1="75.732" y2="79.914"></line>
		<line x1="224.493" x2="218.693" y1="85.745" y2="89.415"></line>
		<line x1="231.201" x2="224.898" y1="96.953" y2="99.671"></line>
		<line x1="235.399" x2="228.922" y1="108.741" y2="111.013"></line>
		<line x1="238.658" x2="231.906" y1="121.179" y2="122.41"></line>
		<line x1="240.416" x2="233.558" y1="134.076" y2="134.355"></line>
		<line x1="240.954" x2="234.095" y1="147.068" y2="146.807"></line>
		<line x1="240.131" x2="233.397" y1="160.104" y2="158.773"></line>
		<line x1="236.911" x2="230.287" y1="172.197" y2="170.399"></line>
		<line x1="232.549" x2="226.288" y1="184.292" y2="181.48"></line>
		<line x1="226.691" x2="220.882" y1="195.915" y2="192.259"></line>
	</g>

	<defs>
		<filter id="filter-glow" width="5" height="5" x="-1" y="-1">
			<feOffset result="offOut" in="SourceGraphic"></feOffset>
			<feGaussianBlur result="blurOut" in="offOut" stdDeviation="8"></feGaussianBlur>
			<feBlend in="SourceGraphic" in2="blurOut"></feBlend>
		</filter>
		<linearGradient id="grad" x1="0%" y1="0%" y2="100%">
			<stop offset="30%" stop-color="#FFF"></stop>
			<stop offset="50%" stop-color="#F1F1F1"></stop>
			<stop offset="70%" stop-color="#FFF"></stop>
		</linearGradient>
	</defs>
	<ellipse class="glow" cx="140" cy="140" fill="none" stroke="url(#grad)" stroke-width="6" rx="121" ry="121" filter="url(#filter-glow)" data-svg-origin="115 115" style="stroke-dashoffset: -307; stroke-dasharray: 220, 1000;"></ellipse>
</svg>