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
        " bg-lightSurfaceDim dark:bg-darkSurfaceDim " +
        " text-lightOnSurface dark:text-darkOnSurface"
      : danger
        ? " bg-lightErrorContainer dark:bg-darkErrorContainer " +
          " text-lightOnErrorContainer dark:text-darkOnErrorContainer"
        : " bg-lightPrimaryContainer dark:bg-darkPrimaryContainer " +
          " text-lightOnPrimaryContainer dark:text-darkOnPrimaryContainer")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex flex-row gap-0.5">
    {#if icon !== null}
      <span class="w-6 h-6"><SvgIcon /></span>
    {/if}
    {label}
  </span>
</button>
