<script lang="ts">
	import logo from '../assets/kraken-logo.png';
	import logoNoText from '../assets/kraken-logo-no-text.png';
	import plantsLeftTop from '../assets/sea_plants_left_top.png';
	import plantsLeftBottom from '../assets/sea_plants_left_bottom.png';
	import plantsRightTop from '../assets/sea_plants_right_top.png';
	import plantsRightBottom from '../assets/sea_plants_right_bottom.png';
	import discord from '../assets/discord-mark-black.svg';
</script>

<div class="bg-main-01 text-white flex flex-col">
	<div class="bg-main-02 h-16 flex items-center text-lg px-6 md:px-24 lg:px-36">
		<img src={logoNoText} class="h-full py-4" alt="logo" />
		<span class="ml-md hidden sm:block md:hidden"> KN "Kraken" </span>
		<span class="ml-md hidden md:block"> Koło Naukowe Myślenia Projektowego "Kraken" </span>
		<div class="relative h-6 w-6 ml-auto">
			<div class="newspaper bg-white h-full" />
			<div
				class="absolute top-0 right-0 w-3 h-3 rounded-full bg-highlight text-[0.6rem] flex items-center justify-center translate-x-1 -translate-y-0.5"
			>
				2
			</div>
		</div>
		<span class="ml-sm">Aktualności</span>
	</div>
	<div class="relative h-[1250px] sm:h-[1400px] xl:h-[1000px] flex">
		<div
			class="-top-2 md:-top-4 w-28 sm:w-36 md:w-56 lg:w-72 absolute pointer-events-none -bottom-4 sm:-bottom-6 xl:-bottom-10 flex flex-col justify-between"
		>
			<img src={plantsLeftTop} alt="plants" />
			<img src={plantsLeftBottom} alt="plants" />
		</div>
		<div
			class="top-0 right-0 w-28 sm:w-36 md:w-56 lg:w-72 absolute pointer-events-none -bottom-6 sm:-bottom-8 xl:-bottom-12 flex flex-col justify-between items-end"
		>
			<img src={plantsRightTop} alt="plants" />
			<img src={plantsRightBottom} alt="plants" />
		</div>
		<div
			class="px-6 md:px-24 lg:px-36 grid w-full grid-rows-[auto,1fr] grid-cols-1 xl:grid-cols-[1fr,min(40%,600px)] xl:grid-rows-1 xl:justify-items-start justify-items-center"
		>
			<div class="px-12 sm:px-20 2xl:px-16 pt-24 xl:pt-36 2xl:pt-56 max-w-3xl mb-6">
				<div class="text-5xl md:text-7xl font-semibold mb-xs">Kraken</div>
				<div class="text-xl md:text-3xl font-light text-gray-300 mb-md">
					Koło Naukowe Myślenia Projektowego
				</div>
				<div class="bg-gray-400 text-xl h-[1px] mb-lg" />
				<div class="text-lg md:text-xl font-light text-gray-300 mb-10 flex flex-col gap-sm">
					<div>Interesuje was wygrywanie konkursów?</div>
					<div>
						Szukacie możliwości poszerzenia swoich horyzontów poprzez rozmowę z osobami z wielu
						dziedzin?
					</div>
					<div class="font-normal">Koło myślenia projektowego pozwoli wam osiągnąć te cele.</div>
				</div>
				<button class="flex bg-white text-black rounded-full p-4 items-center">
					<img src={discord} alt="discord logo" class="h-6 mx-xs" />
					<span class="mx-md font-semibold">Dołącz do nas</span>
				</button>
			</div>
			<div class="flex flex-col items-center max-w-2xl">
				<img src={logo} class="opacity-15 p-12" alt="logo" />
				<div class="flex flex-col text-2xl md:text-3xl gap-md font-extralight text-gray-300">
					<div class="flex items-center">
						<div class="brain h-[1em] w-[1em] bg-gray-300 mr-sm" />
						Myślenie kreatywne
					</div>
					<div class="flex items-center">
						<div class="wrench h-[1em] w-[1em] bg-gray-300 mr-sm" />
						Prototypowanie
					</div>
					<div class="flex items-center">
						<div class="pen-nib h-[1em] w-[1em] bg-gray-300 mr-sm" />
						Projektowanie
					</div>
					<div class="flex items-center">
						<div class="medal h-[1em] w-[1em] bg-gray-300 mr-sm" />
						Hackathony
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="min-h-56 bg-main-03 grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr,196px,1fr] justify-center p-10 gap-lg text-gray-300"
	>
		<div
			class="sm:justify-self-end sm:border-r sm:pr-lg border-gray-600 border-b sm:border-b-0 pb-lg sm:pb-0"
		>
			<div class="mb-xs font-semibold">Skontaktuj się z nami</div>
			<div class="ml-xs flex items-center">
				<div class="facebook h-[1em] w-[1em] bg-gray-300 mr-xs" />
				<a href="https://www.facebook.com/profile.php?id=61558821743627&is_tour_dismissed"
					>Facebook</a
				>
			</div>
			<div class="ml-xs flex items-center">
				<div class="email h-[1em] w-[1em] bg-gray-300 mr-xs" />
				kn.mp.kraken@gmail.com
			</div>
		</div>
		<img src={logo} class="h-full opacity-20 hidden md:block" alt="logo" />
		<div class="md:border-l md:pl-lg border-gray-600">
			<div class="mb-xs font-semibold">Nasze sukcesy</div>
			<a
				class="block ml-xs"
				href="https://www.facebook.com/BESTHACKINGLEAGUE/posts/pfbid02diwTAofwZSpR7z16UpbPAe8HBBN4VrkwBqQVAGUd5dKahfFja2J7e8ymVruBXLBhl?__cft__[0]=AZXLKVgDIbYWAMQMnDtGtkN8i6tKhDUZIbHk7UxzxfA2OaNi1UCwMxcFUQoEuoqco57YA59J4Wdgi9ssjPwUXTF42tJhFQmJwNXhj3ZnK-yn4AVk2DBdz9WYerIDR463M-ACVhaaYtUCLJhti1MYmF6hgrwrupZ7bG7h3m0al10MiWlgG_DQVqfQwaW-jeg9nqRvT4Dn4VdbOYAJEn_JvVXo&__tn__=%2CO%2CP-R"
			>
				BHL 2023
			</a>
			<a
				class="block ml-xs"
				href="https://www.facebook.com/BESTHACKINGLEAGUE/posts/pfbid0jJe3Gjc6gRReKGK8JVV4BgrS2n2f1JUPoNmZ74bCRQhiFZszXVMm9TAqMpAvJTfgl?__cft__[0]=AZWfHqRT06NqdPHS1_fbWdU-168V5JMP0ukVWQiMhpQlGikcLZvVuVucMm6NQ1IRTVnOH-1LrI9kX917r0XAb_NUpi8cF5tcQlp_BxMormtzoMlwAyDXgklSzVlGh6dfDA1PXkVmMLRtjFFDprmyBqzZ336gHNB2bpv7zMnm0WFM189vEmwAW8MNMjt4DNbUawXL_-TwalqyflmPj0ZZXHXv&__tn__=%2CO%2CP-R"
			>
				BHL 2022
			</a>
		</div>
	</div>
</div>

<style>
	.medal {
		mask: url(../assets/medal.svg) center no-repeat;
		mask-size: contain;
	}
	.pen-nib {
		mask: url(../assets/pen-nib.svg) center no-repeat;
		mask-size: contain;
	}
	.brain {
		mask: url(../assets/brain.svg) center no-repeat;
		mask-size: contain;
	}
	.wrench {
		mask: url(../assets/wrench.svg) center no-repeat;
		mask-size: contain;
	}
	.newspaper {
		mask: url(../assets/newspaper.svg) center no-repeat;
		mask-size: contain;
	}
	.facebook {
		mask: url(../assets/facebook.svg) center no-repeat;
		mask-size: contain;
	}
	.email {
		mask: url(../assets/email.svg) center no-repeat;
		mask-size: contain;
	}
</style>
