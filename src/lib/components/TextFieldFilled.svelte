<script>
  /**
   * @typedef {Object} Props
   * @property {string} id
   * @property {string} [type]
   * @property {Object} value
   * @property {string} label
   * @property {string} [message]
   * @property {string} [error]
   * @property {boolean} [readonly]
   * @property {boolean} [disabled]
   * @property {boolean} [monospace]
   */

  /** @type {Props} */
  let {
    id,
    type = "text",
    value = $bindable(),
    label,
    message = "",
    error = "",
    readonly = false,
    disabled = false,
    monospace = false,
  } = $props();
</script>

<div class={"flex flex-col grow" + (disabled ? " opacity-40" : "")}>
  <label
    for={id}
    class="pt-4 pb-2 px-2 relative block rounded-t-md border-b
      border-lightOutline dark:border-darkOutline
      focus-within:border-lightOutline focus-within:dark:border-darkOutline
      bg-lightSurfaceContainer dark:bg-darkSurfaceContainer"
  >
    <input
      {id}
      {type}
      bind:value
      class={"peer border-none w-full text-base " +
        "focus:border-none focus:outline-none focus:ring-0 " +
        "bg-lightSurfaceContainer dark:bg-darkSurfaceContainer " +
        "text-lightOnSurface dark:text-darkOnSurface " +
        "placeholder-lightSurfaceContainer dark:placeholder-darkSurfaceContainer" +
        (monospace ? " font-mono" : "")}
      placeholder={label}
      {readonly}
      {disabled}
    />
    <span
      class="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
        peer-focus:top-2 peer-focus:text-xs pointer-events-none
        absolute start-2 top-2 -translate-y-1/2 p-0.5 text-xs transition-all
        text-lightOnSurfaceVariant dark:text-darkOnSurfaceVariant"
    >
      {label}
    </span>
  </label>
  {#if !error}
    <div
      class="text-sm pl-2
        text-lightOnSurface dark:text-darkOnSurface"
    >
      {message}
    </div>
  {:else}
    <div
      class="text-sm pl-2
      text-lightError dark:text-darkError"
    >
      {error}
    </div>
  {/if}
</div>
