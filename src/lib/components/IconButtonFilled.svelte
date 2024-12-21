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
        " bg-lightSurfaceDim dark:bg-darkSurfaceDim" +
        " text-lightOnSurface dark:text-darkOnSurface"
      : danger
        ? " bg-lightError dark:bg-darkError" +
          " text-lightOnError dark:text-darkOnError"
        : " bg-lightPrimary dark:bg-darkPrimary" +
          " text-lightOnPrimary dark:text-darkOnPrimary")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex size-6"><SvgIcon /></span>
</button>
