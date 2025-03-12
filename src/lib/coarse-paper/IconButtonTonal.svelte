<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {import("svelte").Component} icon
   * @property {function} onClick
   * @property {boolean} [disabled]
   * @property {boolean} [danger]
   * @property {boolean} [dense]
   */

  /** @type {Props} */
  let {
    id,
    icon,
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
  class={"flex border-none rounded-full text-base justify-center items-center" +
    (dense ? " size-8" : " size-10") +
    (disabled
      ? " opacity-50" +
        " bg-light-surface-dim dark:bg-dark-surface-dim" +
        " text-light-on-surface dark:text-dark-on-surface"
      : danger
        ? " bg-light-error-container dark:bg-dark-error-container" +
          " text-light-on-error-container dark:text-dark-on-error-container"
        : " bg-light-primary-container dark:bg-dark-primary-container" +
          " text-light-on-primary-container dark:text-dark-on-primary-container")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex size-6"><SvgIcon /></span>
</button>
