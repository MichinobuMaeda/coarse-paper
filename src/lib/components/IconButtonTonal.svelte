<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {import("svelte").Component} icon
   * @property {function} onClick
   * @property {boolean} [disabled]
   */

  /** @type {Props} */
  let { id, icon, onClick, disabled = false } = $props();

  const SvgIcon = $derived(icon);
</script>

<button
  {id}
  type="button"
  class={"h-10 px-2 py-1 border-none rounded-full text-base " +
    (disabled
      ? "opacity-50 " +
        "bg-lightSurfaceDim dark:bg-darkSurfaceDim " +
        "text-lightOnSurface dark:text-darkOnSurface"
      : "bg-lightPrimaryContainer dark:bg-darkPrimaryContainer " +
        "text-lightOnPrimaryContainer dark:text-darkOnPrimaryContainer")}
  onclick={disabled ? () => {} : () => onClick()}
>
  <span class="flex w-6 h-6"><SvgIcon /></span>
</button>
