"use client";

import { SORT_OPTIONS, type SortBy } from "@/lib/types";
import { PillRadioGroup } from "@/components/pill-radio-group";

interface TodoSortProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function TodoSort({ value, onChange }: TodoSortProps) {
  return (
    <PillRadioGroup
      ariaLabel="정렬"
      options={SORT_OPTIONS}
      value={value}
      onChange={onChange}
    />
  );
}
