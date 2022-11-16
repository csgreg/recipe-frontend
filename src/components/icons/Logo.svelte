<script lang="ts">
	export let isSmall: boolean = false;
</script>

<svg
	class="brand-logo"
	class:is-small={isSmall}
	width="592"
	height="631"
	viewBox="0 0 592 631"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="71" y="133" width="446" height="454" rx="57" fill="#302861" />
	<g filter="url(#filter0_d_0_1)">
		<circle cx="244" cy="537" r="50" fill="#5433FF" />
		<circle cx="244" cy="537" r="49.5" stroke="#5433FF" />
	</g>
	<g filter="url(#filter1_d_0_1)">
		<circle cx="436" cy="580" r="50" fill="#5433FF" />
	</g>
	<g filter="url(#filter2_d_0_1)">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M587 152V143H586.705C581.466 63.2422 507.042 0 416 0C367.298 0 323.351 18.0975 292.207 47.1397C261.336 18.0975 217.775 0 169.5 0C76.2597 0 0.603397 67.5129 0.00359131 151H0V152V171V173V343V349H0.3563C3.32043 373.785 24.4163 393 50 393C75.5837 393 96.6796 373.785 99.6437 349H100V343V332.046C106.07 352.823 125.262 368 148 368C169.609 368 188.016 354.293 195 335.099V390V393H195.089C196.64 419.217 218.393 440 245 440C271.607 440 293.36 419.217 294.911 393H295V390V277.999C299.632 300.822 319.81 318 344 318C359.003 318 372.462 311.392 381.627 300.928C384.394 301.43 387.186 301.873 390 302.254V437V438H390.01C390.542 465.153 412.72 487 440 487C467.28 487 489.458 465.153 489.99 438H490V437V410.099C496.984 429.293 515.391 443 537 443C563.607 443 585.36 422.217 586.911 396H587V393V152Z"
			fill="#5433FF"
		/>
	</g>
	<defs>
		<filter
			id="filter0_d_0_1"
			x="194"
			y="487"
			width="108"
			height="104"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dx="8" dy="4" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
		</filter>
		<filter
			id="filter1_d_0_1"
			x="386"
			y="530"
			width="107"
			height="101"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dx="7" dy="1" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
		</filter>
		<filter
			id="filter2_d_0_1"
			x="0"
			y="0"
			width="592"
			height="507"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dx="5" dy="20" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
		</filter>
	</defs>
</svg>

<style lang="scss">
	.brand-logo {
		display: relative;
		top: 0;
		max-width: 50px;
		max-height: 50px;
	}

	.is-small {
		max-width: 40px;
		max-height: 40px;
	}
</style>
