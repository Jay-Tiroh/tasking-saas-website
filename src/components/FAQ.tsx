"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center  max-w-[43rem] w-[90%] text-center m-auto ">
      <h2 className="text-xl sm:text-3xl font-bold text-text-inv-high-lgt mb-5">
        Frequently Asked Questions
      </h2>
      <div className="text-text-inv-low-lgt w-full !text-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1 " className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              What is Tasking?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              How can Tasking benefit my team?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              Is Tasking suitable for small businesses or larger enterprises?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              How secure is my data on Tasking?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              Can I try Tasking before committing to a plan?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              What types of integrations does Tasking support?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              How does billing work?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              Are there any hidden fees?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              How can I get in touch with customer support?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              What makes Tasking different from other project management
              platforms?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11" className="!border-0">
            <AccordionTrigger className="!text-[1rem]">
              How do I cancel my subscription if needed?
            </AccordionTrigger>
            <AccordionContent className="text-start w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat ullam maxime numquam nemo quia culpa porro earum
              praesentium molestiae?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
