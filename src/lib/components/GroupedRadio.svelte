<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {Array} items
   * @property {string} value
   */

  /** @type {Props} */
  let { id, items, value = $bindable() } = $props();
</script>

{#each items as item, index}
  <label
    for={`${id}-${index}`}
    class="cursor-pointer text-base
      text-lightOnBackground dark:text-darkOnBackground"
  >
    <input
      type="radio"
      id={`${id}-${index}`}
      name={id}
      value={item.value}
      bind:group={value}
      class="size-5 align-text-bottom mr-0.5
        border-lightOutline dark:border-darkOutline
        accent-lightPrimary dark:accent-darkPrimary"
    />
    {item.label}
  </label>
{/each}
