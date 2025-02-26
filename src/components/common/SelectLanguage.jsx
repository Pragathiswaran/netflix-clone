import React, { useState } from "react";
import Lang from "./../../assets/lang.svg?react";
import DropDown from "./../../assets/dropdown.svg?react";

const SelectLanguage = () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
  ];

  return (
    <div
      className="relative flex items-center bg-[rgba(0,0,0,0.8)] rounded-sm border border-[#555]"
      aria-label="Select Language"
      role="group"
    >
      <Lang className="w-6 text-white fill-current absolute left-3.5" />
      <select
        id="language-select"
        className="text-white relative inline-flex justify-center px-10 py-1.5 bg-transparent outline-none appearance-none cursor-pointer"
        aria-label="Select a language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="text-black w-20">
            {lang.label}
          </option>
        ))}
      </select>
      <DropDown className="w-6 text-white fill-current absolute right-3" />
    </div>
  );
};

export default SelectLanguage;
