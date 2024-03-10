import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import React from "react";
import { FaLeaf } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";

function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      Icon: LuArrowDownToLine,
      description: "Get Your Assets to your email in them right way",
    },
    {
      name: "Guranted Quality",
      Icon: CheckCircledIcon,
      description: "Get Your Assets to your email in them right way",
    },
    {
      name: "For The Planet",
      Icon: FaLeaf,
      description: "Get Your Assets to your email in them right way",
    },
  ];
  return (
    <>
      <MaxWidthWrapper>
        <div className="px-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Marketplace for high quality
            <span className="text-blue-600"> digital assets</span>
          </h2>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            provident dicta fugit voluptatum non dolorum ad deserunt, qui sed,
            enim eveniet sunt repellat?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link className={buttonVariants()} href="/products">
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* Todo Add Products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => {
              return (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                > 
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100  text-blue-900">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

export default Home;
