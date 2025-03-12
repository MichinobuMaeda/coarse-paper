<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {import("svelte").Component?} [icon]
   * @property {string} label
   * @property {function} onClick
   * @property {boolean} [disabled]
   * @property {boolean} [danger]
   * @property {boolean} [dense]
   */

  /** @type {Props} */
  let {
    id,
    icon = null,
    label,
    onClick,
    disabled = false,
    danger = false,
    dense = false,
  } = $props();

  const SvgIcon = $derived(icon);
</script>

<button
  {id}
  type="button"
  class={(dense
    ? "px-4 py-0.5 border-none rounded-full h-8 text-base"
    : "px-5 py-1.5 border-none rounded-full h-10 text-base") +
    (disabled
      ? " opacity-50" +
        " bg-light-surface-dim dark:bg-dark-surface-dim " +
        " text-light-on-surface dark:text-dark-on-surface"
      : danger
        ? " bg-light-error-container dark:bg-dark-error-container " +
          " text-light-on-error-container dark:text-dark-on-error-container"
        : " bg-light-primary-container dark:bg-dark-primary-container " +
          " text-light-on-primary-container dark:text-dark-on-primary-container")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex flex-row gap-0.5">
    {#if icon !== null}
      <span class="w-6 h-6"><SvgIcon /></span>
    {/if}
    {label}
  </span>
</button>
