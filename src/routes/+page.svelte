<script lang="ts">
	import logo from '../assets/kraken-logo.png';
	import plantsLeft from '../assets/sea_plants_left.png';
	import plantsRight from '../assets/sea_plants_right.png';
	import discord from '../assets/discord-mark-black.svg';
	import medal from '../assets/medal.svg';
</script>

<div class="bg-main-01 text-white flex flex-col">
	<div class="bg-main-02 h-16 flex items-center text-lg px-36">
		<img src={logo} class="h-full" alt="logo" />
		<span class="ml-2"> Koło myślenia naukowego "Kraken" </span>
		<span class="ml-auto">Aktualności</span>
	</div>
	<div class="relative h-[1000px] flex">
		<div class="-top-4 absolute pointer-events-none -bottom-10">
			<img src={plantsLeft} class="h-full" alt="logo" />
		</div>
		<div class="top-0 right-0 absolute pointer-events-none -bottom-12 flex justify-end">
			<img src={plantsRight} class="h-full" alt="logo" />
		</div>
		<div class="px-36 grid w-full grid-cols-[3fr,3fr]" style="align-items: start;">
			<div class="px-16 pt-56">
				<div class="text-7xl font-semibold mb-3">Kraken</div>
				<div class="text-3xl font-light text-gray-300 mb-5">Koło myślenia projektowego</div>
				<div class="bg-gray-400 h-[1px] mb-7" />
				<div class="text-xl font-light text-gray-300 mb-10 flex flex-col gap-4">
					<div>Interesuje was wygrywanie konkursów?</div>
					<div>
						Szukacie możliwości poszerzenia swoich horyzontów poprzez rozmowę z osobami z wielu
						dziedzin?
					</div>
					<div class="font-normal">Koło myślenia projektowego pozwoli wam osiągnąć te cele.</div>
				</div>
				<button class="flex bg-white text-black rounded-full p-4 items-center">
					<img src={discord} alt="discord logo" class="h-6 mx-1" />
					<span class="mx-3 font-semibold">Dołącz do nas</span>
				</button>
			</div>
			<div class="flex flex-col items-center">
				<img src={logo} class="h-full opacity-15 -mb-16" alt="logo" />
				<div class="flex flex-col text-3xl gap-8 font-extralight text-gray-300">
					<div class="flex items-center">
						<div class="brain h-8 w-8 bg-gray-300 mr-3" />
						Myślenie kreatywne
					</div>
					<div class="flex items-center">
						<div class="wrench h-8 w-8 bg-gray-300 mr-3" />
						Prototypowanie
					</div>
					<div class="flex items-center">
						<div class="pen-nib h-8 w-8 bg-gray-300 mr-3" />
						Projektowanie
					</div>
					<div class="flex items-center">
						<div class="medal h-8 w-8 bg-gray-300 mr-3" />
						Hackathony
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="h-56 bg-main-03"></div>
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
</style>
