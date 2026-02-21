import Image from "next/image";

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
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800
                bg-transparent
                text-foreground
                transition-all duration-300
                hover:border-black dark:hover:border-white hover:z-10
                cursor-pointer
              "
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.name || "icon"}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              )}
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
