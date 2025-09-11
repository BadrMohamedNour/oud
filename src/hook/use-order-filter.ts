import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  orderDirections,
  orderOptions,
} from "@/components/product/filter-data/data";

const useOrderFilter = (updateImmediately?: boolean) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState(
    orderOptions.reduce(
      (acc, { value }) => {
        const initialFilter = searchParams.get(value);
        acc[value] = initialFilter || orderDirections[0].value; // Default to the first direction value
        return acc;
      },
      {} as Record<string, string>
    )
  );

  const handleSelectOrder = (event: any, param: string) => {
    const value = event.target.value?.trim();

    const updatedFilters = {
      ...selectedFilters,
      [param]: value,
    };

    setSelectedFilters(updatedFilters);

    if (updateImmediately) {
      const currentParams = new URLSearchParams(searchParams.toString());
      Object.entries(updatedFilters).forEach(([key, val]) => {
        if (!val || val === orderDirections[0].value) {
          currentParams.delete(key);
        } else {
          currentParams.set(key, val);
        }
      });

      const queryString = currentParams.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    }
  };

  const handleSubmitOrder = () => {
    const currentParams = new URLSearchParams(searchParams.toString());

    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (!value || value === orderDirections[0].value) {
        currentParams.delete(key);
      } else {
        currentParams.set(key, value);
      }
    });

    const queryString = currentParams.toString();

    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  const isValidDirection = (value: string): boolean =>
    orderDirections.some((direction) => direction.value === value);

  const getOrderValue = (param: string | null): string =>
    isValidDirection(param || "") ? param! : orderDirections[0].value;

  return {
    handleSelectOrder,
    handleSubmitOrder,
    selectedFilters,
    getOrderValue,
  };
};

export default useOrderFilter;
