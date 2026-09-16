"use client";

import { Button } from "@/components/ui/button";

interface PillRadioGroupOption<T extends string> {
  value: T;
  label: string;
}

interface PillRadioGroupProps<T extends string> {
  ariaLabel: string;
  options: PillRadioGroupOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

// TodoFilter/TodoCategoryFilter/TodoSort가 공유하는 라디오 버튼 그룹 UI.
export function PillRadioGroup<T extends string>({
  ariaLabel,
  options,
  value,
  onChange,
}: PillRadioGroupProps<T>) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="flex gap-1">
      {options.map((item) => {
        const selected = item.value === value;
        return (
          <Button
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
