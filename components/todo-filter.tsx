"use client";

import { TODO_FILTERS, type TodoFilter } from "@/lib/types";
import { PillRadioGroup } from "@/components/pill-radio-group";

interface TodoFilterProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <PillRadioGroup
      ariaLabel="필터"
      options={TODO_FILTERS}
      value={value}
      onChange={onChange}
    />
  );
}
