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
</script>

<button
  {id}
  type="button"
  class={(dense
    ? "px-4 py-0.5 border-none rounded-full h-8 text-base"
    : "px-5 py-1.5 border-none rounded-full h-10 text-base") +
    (disabled
      ? " bg-lightSurfaceDim dark:bg-darkSurfaceDim " +
        " text-lightOnSurface dark:text-darkOnSurface" +
        " opacity-50 "
      : " bg-lightSurfaceContainerHigh dark:bg-darkSurfaceContainer " +
        (danger
          ? " text-lightError dark:text-darkError"
          : " text-lightPrimary dark:text-darkPrimary") +
        " shadow-sm " +
        " shadow-lightShadow dark:shadow-darkShadow")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex flex-row gap-0.5">
    {#if icon !== null}
      {@const SvgIcon = icon}
      <span class="w-6 h-6"><SvgIcon /></span>
    {/if}
    {label}
  </span>
</button>
