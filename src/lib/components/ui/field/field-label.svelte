<script lang="ts">
  import type { ComponentProps } from 'svelte';

  import { Label } from '$lib/components/ui/label/index.js';
  import { cn } from '$lib/utils/utils.js';

  import { getFieldContext } from './field-context.js';

  const fieldContext = getFieldContext();

  let {
    ref = $bindable(null),
    class: className,
    children,
    for: htmlFor = fieldContext?.id,
    ...restProps
  }: ComponentProps<typeof Label> = $props();
</script>

<Label
  bind:ref
  data-slot="field-label"
  class={cn(
    'has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug',
    'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
    className
  )}
  for={htmlFor}
  {...restProps}
>
  {@render children?.()}
</Label>
