import { getContext, setContext } from 'svelte';

export type FieldContext = {
  id: string;
};

const FIELD_CONTEXT_KEY = 'field-id';

export function setFieldContext(context: FieldContext): FieldContext {
  return setContext(Symbol.for(FIELD_CONTEXT_KEY), context);
}

export function getFieldContext(): FieldContext | undefined {
  return getContext<FieldContext | undefined>(Symbol.for(FIELD_CONTEXT_KEY));
}
