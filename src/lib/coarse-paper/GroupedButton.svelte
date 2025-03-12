<script>
  import SvgCheck from "../icons/SvgCheck.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {Array} items
   * @property {string} value
   */

  /** @type {Props} */
  let { id, items, value = $bindable() } = $props();
</script>

<div {id} role="group" class="inline-flex rounded-md shadow-sm h-10 text-base">
  {#each items as item, index (item.value)}
    <button
      type="button"
      onclick={() => {
        value = item.value;
      }}
      class={(index == 0
        ? "pr-4 py-1.5 border-t border-b border-l rounded-l-full "
        : index == items.length - 1
          ? "pr-4 py-1.5 border rounded-r-full "
          : "pr-4 py-1.5 border-t border-b border-l ") +
        "border-light-outline dark:border-dark-outline" +
        (value === item.value
          ? " pl-2 " +
            "bg-light-secondary-container dark:bg-dark-secondary-container " +
            "text-light-on-secondary-container dark:text-dark-on-secondary-container"
          : " pl-4 " +
            "bg-light-surface dark:bg-dark-surface " +
            "text-light-on-surface dark:text-dark-on-surface")}
    >
      <span class="flex flex-row gap-0.5">
        {#if value === item.value}
          <span class="w-6 h-6"><SvgCheck /></span>
        {/if}
        {item.label}
      </span>
    </button>
  {/each}
</div>
