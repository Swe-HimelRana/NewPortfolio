import Image from "next/image";
import React from "react";


interface MyComponentProps{
    items:Array<{ alt: string; img: any }>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <>
      <div className="flex flex-wrap gap-1">
      { items && items.map((val, indx) => {
        return (
          <div className="p-2 gap-2 flex flex-wrap " key={indx}>
            <Image src={val?.img} alt={val?.alt} className="rounded-full w-8 max-h-8" />
            <p className="text-lg">{val.alt}</p>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default SkillsFooter;
