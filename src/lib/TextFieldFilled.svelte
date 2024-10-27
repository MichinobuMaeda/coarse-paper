<script>
  export let id;
  export let type = "text";
  export let value = "";
  export let label;
  export let message = "";
  export let error = "";
  export let ouInput;
  export let readonly = false;
  export let disabled = false;
  export let monospace = false;

  const inputEventHandler = (e) => {
    const target = e.target;
    ouInput(target.value);
  };
</script>

<div class={"flex flex-col w-auto" + (disabled ? " opacity-40" : "")}>
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
      {value}
      class={"peer border-none focus:border-none focus:outline-none focus:ring-0 w-full text-base" +
        " bg-lightSurfaceContainer dark:bg-darkSurfaceContainer" +
        " text-lightOnSurface dark:text-darkOnSurface" +
        " placeholder-lightSurfaceContainer dark:placeholder-darkSurfaceContainer" +
        (monospace ? " font-mono" : "")}
      placeholder={label}
      on:input={inputEventHandler}
      {readonly}
      {disabled}
    />
    <span
      class="peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs
        pointer-events-none absolute start-2 top-2 -translate-y-1/2 p-0.5 text-xs transition-all
        text-lightOnSurfaceVariant dark:text-darkOnSurfaceVariant"
    >
      {label}
    </span>
  </label>
  {#if !error}
    <div class="text-sm pl-2 text-lightOnSurface dark:text-darkOnSurface">
      {message}
    </div>
  {/if}
  <div class="text-sm pl-2 text-lightError dark:text-darkError">
    {error}
  </div>
</div>
