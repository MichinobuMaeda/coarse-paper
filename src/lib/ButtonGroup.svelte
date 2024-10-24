<script>
  export let id;
  export let items;
  export let onClick;
</script>

<div {id} role="group" class="inline-flex rounded-md shadow-sm h-10">
  {#each items as item, index}
    <button
      type="button"
      on:click={() => {
        items.forEach((item) => {
          item.selected = false;
        });
        item.selected = true;
        onClick(item.value);
      }}
      class={(index == 0
        ? "pr-4 pl-5 py-1.5 border-t border-b border-l rounded-l-full"
        : index == items.length - 1
          ? "pl-4 pr-5 py-1.5 border rounded-r-full"
          : "px-4 py-1.5 border-t border-b border-l") +
        " border-lightOutline dark:border-darkOutline" +
        (item.selected
          ? " bg-lightSecondaryContainer dark:bg-darkSecondaryContainer text-lightOnSecondaryContainer dark:text-darkOnSecondaryContainer"
          : " bg-lightSurface dark:bg-darkSurface text-lightOnSurface dark:text-darkOnSurface")}
      >{item.label}</button
    >
  {/each}
</div>
