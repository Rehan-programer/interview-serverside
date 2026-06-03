
import Statics from "@/components/Statics";
import Worldwide from "@/components/Worldwide";
import React from "react";


const Homepage = () => {
 

  return (
    <div className="p-4 bg-(--background) h-full ">
    <div>
      <Statics />
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-2 mt-[2rem] gap-6 p-4">
      <div>
        <Worldwide heading="Worldwide Sales" />
      </div>

      <div>
        <Worldwide heading="Revenue & Sales" />
      </div>
    </div>
    </div>
  );
};

export default Homepage;