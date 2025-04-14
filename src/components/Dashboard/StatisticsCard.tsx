import React, { useState, useEffect, useRef } from "react";
import { StatCard } from "./StatCard";

interface Stat {
  icon: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

interface FilterOption {
  label: string;
  key: string;
}

export const StatisticsCard = () => {
  // Define initial statistics for the "This week" filter.
  const initialStats: { [key: string]: Stat } = {
    soldItems: {
      icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/962b7eb83d3086a8b1d5e3eb1387f1fd39b0c97d?placeholderIfAbsent=true",
      label: "Sold Item",
      value: "8,232",
      change: "+23",
      changeType: "positive",
    },
    products: {
      icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/a6f8313f927f68c7727349370f81cbd4734571ff?placeholderIfAbsent=true",
      label: "Products",
      value: "842",
      change: "+23",
      changeType: "positive",
    },
    events: {
      icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/063adb7f88261e05ba62b838354b473fe70c36a5?placeholderIfAbsent=true",
      label: "Events",
      value: "24",
      change: "Nil",
      changeType: "negative",
    },
    orders: {
      icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/c8448d420ee88b3b779c47b2de2e4088cb0e100d?placeholderIfAbsent=true",
      label: "Orders",
      value: "8,232",
      change: "+23",
      changeType: "positive",
    },
    customers: {
      icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2cca095bcaa594fb397f6619b3651c742a77c8ff?placeholderIfAbsent=true",
      label: "Customers",
      value: "8,232",
      change: "+23",
      changeType: "positive",
    },
  };

  // Define filter options.
  const filterOptions: FilterOption[] = [
    { label: "This week", key: "week" },
    { label: "This month", key: "month" },
    { label: "This year", key: "year" },
  ];

  // State hooks for the selected filter and stats.
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>(filterOptions[0]);
  const [stats, setStats] = useState<{ [key: string]: Stat }>(initialStats);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Reference to the dropdown for closing it when clicking outside.
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to update statistics based on the filter.
  const updateStatsForFilter = (filterKey: string) => {
    // In this example, we simulate different statistics. In a real scenario you could fetch data.
    if (filterKey === "month") {
      return {
        soldItems: { ...initialStats.soldItems, value: "32,928" },
        products: { ...initialStats.products, value: "3,368" },
        events: { ...initialStats.events, value: "96" },
        orders: { ...initialStats.orders, value: "32,928" },
        customers: { ...initialStats.customers, value: "32,928" },
      };
    } else if (filterKey === "year") {
      return {
        soldItems: { ...initialStats.soldItems, value: "429,864" },
        products: { ...initialStats.products, value: "43,704" },
        events: { ...initialStats.events, value: "1,248" },
        orders: { ...initialStats.orders, value: "429,864" },
        customers: { ...initialStats.customers, value: "429,864" },
      };
    }
    // Default (week)
    return initialStats;
  };

  // Handler for selecting a filter.
  const handleFilterSelect = (option: FilterOption) => {
    setSelectedFilter(option);
    setStats(updateStatsForFilter(option.key));
    setDropdownOpen(false);
  };

  // Close dropdown if clicking outside.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="border border-[color:var(--Grey-2,#E6E6E6)] bg-white w-full overflow-hidden font-medium p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg">
      {/* Header: Title & Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex-1">
          <h2 className="text-[#1A011E] text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[-0.4px] font-bold">
            Your statistics
          </h2>
          <p className="text-[#808080] text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[-0.32px] mt-1">
            Summary of your dashboard
          </p>
        </div>
        <div className="relative flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-[-0.24px] leading-tight" ref={dropdownRef}>
          <span>Filter By</span>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center rounded border border-[color:var(--Grey-2,#E6E6E6)] bg-neutral-50 p-1 sm:p-2"
          >
            <span className="whitespace-nowrap">{selectedFilter.label}</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0e39ee91c2965dc86fd0b416248081c5ce1fd71f?placeholderIfAbsent=true"
              alt=""
              className="object-contain w-3 sm:w-4"
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full mt-1 right-0 bg-white border border-[color:var(--Grey-2,#E6E6E6)] rounded shadow-lg z-10">
              {filterOptions.map((option) => (
                <li key={option.key}>
                  <button
                    onClick={() => handleFilterSelect(option)}
                    className="block px-2 py-1 hover:bg-neutral-100 w-full text-left"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Statistic Cards Row */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
        <div className="flex-1">
          <StatCard {...stats.soldItems} />
        </div>
        <div className="hidden sm:block border bg-[#E6E6E6] h-6 w-px" />
        <div className="flex-1">
          <StatCard {...stats.products} />
        </div>
        <div className="hidden sm:block border bg-[#E6E6E6] h-6 w-px" />
        <div className="flex-1">
          <StatCard {...stats.events} />
        </div>
        <div className="hidden sm:block border bg-[#E6E6E6] h-6 w-px" />
        <div className="flex-1">
          <StatCard {...stats.orders} />
        </div>
        <div className="hidden sm:block border bg-[#E6E6E6] h-6 w-px" />
        <div className="flex-1">
          <StatCard {...stats.customers} />
        </div>
      </div>
    </section>
  );
};
