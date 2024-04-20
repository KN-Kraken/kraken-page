<script lang="ts">
	export let count: number;
</script>

<div class="relative h-6 w-6 ml-auto">
	<div class="newspaper bg-white h-full" />
	{#if count > 0}
		<div
			class="absolute top-0 right-0 w-3 h-3 rounded-full bg-highlight text-[0.6rem] flex items-center justify-center translate-x-1 -translate-y-0.5"
		>
			{count}
		</div>
	{/if}
</div>

<style>
	.newspaper {
		mask: url(../assets/newspaper.svg) center no-repeat;
		mask-size: contain;
	}
</style>
