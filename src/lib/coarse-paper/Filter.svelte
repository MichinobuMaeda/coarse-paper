<script>
  import SvgCheck from "../icons/SvgCheck.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {string} label
   * @property {boolean} checked
   * @property {boolean} [disabled]
   */

  /** @type {Props} */
  let { id, label, checked = $bindable(), disabled = false } = $props();
</script>

<button
  {id}
  type="button"
  class={"pr-4 py-0.5 rounded-lg h-8 text-base " +
    (disabled
      ? checked
        ? "opacity-50 pl-1 border-none " +
          "bg-light-surface-dim dark:bg-dark-surface-dim " +
          "text-light-on-surface dark:text-dark-on-surface"
        : "opacity-50 pl-4 border " +
          "bg-light-surface dark:bg-dark-surface " +
          "text-light-on-surface dark:text-dark-on-surface " +
          "border-light-outline-variant dark:border-dark-outline-variant"
      : checked
        ? "pl-1 border-none " +
          "bg-light-primary-container dark:bg-dark-primary-container " +
          "text-light-on-primary-container dark:text-dark-on-primary-container"
        : "pl-4 border " +
          "bg-light-surface dark:bg-dark-surface " +
          "text-light-on-surface dark:text-dark-on-surface " +
          "border-light-outline-variant dark:border-dark-outline-variant")}
  onclick={disabled
    ? () => {}
    : () => {
        checked = !checked;
      }}
>
  <span class="flex flex-row gap-0.5">
    {#if checked}
      <span class="w-6 h-6"><SvgCheck /></span>
    {/if}
    {label}
  </span>
</button>
