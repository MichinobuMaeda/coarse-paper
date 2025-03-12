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
  class={"flex size-10 border-none rounded-full text-base justify-center items-center" +
    (dense ? " size-8" : " size-10") +
    (disabled
      ? " opacity-50 " +
        " bg-light-surface-dim dark:bg-dark-surface-dim" +
        " text-light-on-surface dark:text-dark-on-surface"
      : danger
        ? " bg-light-error dark:bg-dark-error" +
          " text-light-on-error dark:text-dark-on-error"
        : " bg-light-primary dark:bg-dark-primary" +
          " text-light-on-primary dark:text-dark-on-primary")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex size-6"><SvgIcon /></span>
</button>
