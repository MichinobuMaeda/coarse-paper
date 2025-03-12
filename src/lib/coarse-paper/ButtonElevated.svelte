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
      ? " bg-light-surface-dim dark:bg-dark-surface-dim " +
        " text-light-on-surface dark:text-dark-on-surface" +
        " opacity-50 "
      : " bg-light-surface-container-high dark:bg-dark-surface-container " +
        (danger
          ? " text-light-error dark:text-dark-error"
          : " text-light-primary dark:text-dark-primary") +
        " shadow-sm " +
        " shadow-light-shadow dark:shadow-dark-shadow")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex flex-row gap-0.5">
    {#if icon !== null}
      <span class="w-6 h-6"><SvgIcon /></span>
    {/if}
    {label}
  </span>
</button>
