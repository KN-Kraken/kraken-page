<script lang="ts">
	import logo from '../assets/kraken-logo.png';
	import plantsLeft from '../assets/sea_plants_left.png';
	import plantsRight from '../assets/sea_plants_right.png';
	import discord from '../assets/discord-mark-black.svg';
</script>

<div class="bg-main-01 text-white flex flex-col">
	<div class="bg-main-02 h-16 flex items-center text-lg px-36">
		<img src={logo} class="h-full" alt="logo" />
		<span class="ml-2"> Koło myślenia naukowego "Kraken" </span>
		<span class="ml-auto">Członkowie</span>
	</div>
	<div class="relative h-[1000px] flex">
		<div class="-top-4 absolute pointer-events-none -bottom-10">
			<img src={plantsLeft} class="h-full" alt="logo" />
		</div>
		<div class="top-0 right-0 absolute pointer-events-none -bottom-12 flex justify-end">
			<img src={plantsRight} class="h-full" alt="logo" />
		</div>
		<div class="px-36 grid items-center w-full grid-cols-[2fr,3fr]">
			<div class="px-12">
				<div class="text-7xl font-semibold mb-3">Kraken</div>
				<div class="text-3xl font-light text-gray-300 mb-6">Dołącz do nas</div>
				<div class="text-xl font-light text-gray-300 mb-10 text-justify">
					Interesuje was wygrywanie konkursów? Szukacie możliwości poszerzenia swoich horyzontów
					poprzez rozmowę z osobami z wielu dziedzin? Koło myślenia projektowego pozwoli wam
					osiągnąć te cele.
				</div>
				<button class="flex bg-white text-black rounded-full p-4 items-center">
					<img src={discord} alt="discord logo" class="h-6 mx-1" />
					<span class="mx-3 font-semibold">Dołącz do nas</span>
				</button>
			</div>
			<div>
				<img src={logo} class="h-full opacity-15" alt="logo" />
			</div>
		</div>
	</div>
	<div class="h-56 bg-main-03"></div>
</div>
