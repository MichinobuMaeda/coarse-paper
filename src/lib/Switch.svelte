<script>
  export let id;
  export let checked = false;
  export let ouClick;
</script>

<label
  for={id}
  class="relative inline-block h-8 w-14 cursor-pointer rounded-full
    bg-lightSurfaceVariant dark:bg-darkSurfaceVariant
    transition [-webkit-tap-highlight-color:_transparent]
    has-[:checked]:bg-lightPrimary has-[:checked]:dark:bg-darkPrimary
    border-2 has-[:checked]:border-none
    border-lightOutline dark:border-darkOutline"
>
  <input
    type="checkbox"
    {id}
    {checked}
    on:click={() => ouClick(!checked)}
    class="peer sr-only
      [&:checked_+_span_svg[data-checked-icon]]:block
      [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
  />

  <span
    class="absolute inset-y-0 start-0 z-10 inline-flex
      m-1.5 peer-checked:m-1
      size-4 peer-checked:size-6
      items-center justify-center rounded-full
      bg-lightOnSurfaceVariant dark:bg-darkOnSurfaceVariant
      transition-all peer-checked:start-6
      peer-checked:text-lightPrimary peer-checked:dark:text-darkPrimary
      peer-checked:bg-lightSurface peer-checked:dark:bg-darkSurface"
  >
    <svg
      data-checked-icon
      xmlns="http://www.w3.org/2000/svg"
      class="hidden size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </span>
</label>
