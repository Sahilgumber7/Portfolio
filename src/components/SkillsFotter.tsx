import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg
                bg-white dark:bg-gray-800
                text-muted-foreground dark:text-muted-foreground-dark
                transition-transform  duration-300
                hover:scale-105 hover:shadow-lg hover:z-10
                cursor-pointer
              "
            >
              <img
                src={item.icon}
                alt={item.name || "icon"}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <span className="text-sm text-center font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
