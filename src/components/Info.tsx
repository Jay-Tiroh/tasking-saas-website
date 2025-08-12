import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col items-center  max-w-[43rem] w-[90%] text-center ">
      <p className="text-text-inv-low-lgt text-xl">
        <span className="text-text-inv-high-lgt">
          &quot;Where project management
        </span>{" "}
        meets seamless collaboration.{" "}
        <span className="text-text-inv-high-lgt">Streamline your workflow</span>
        , enhance team communication, and{" "}
        <span className="text-text-inv-high-lgt">achieve project success</span>{" "}
        with our <span className="text-text-inv-high-lgt">powerful</span> suite
        of tools.&quot;
      </p>
      <Image
        src="/assets/images/divider.svg"
        alt="divider"
        width={80}
        height={100}
        className="m-auto my-20"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-text-inv-high-lgt text-3xl font-bold mb-2">
          We Covered What You Need
        </h1>
        <p className="text-text-inv-mid-lgt text-xs">
          Main features to support your managing task
        </p>
        <div className="grid  md:grid-cols-6 gap-5 my-5  md:w-[55rem] max-w-[80%]">
          <div className="md:col-span-2 flex flex-col gap-2 bg-white/5 justify-center p-3 rounded-md">
            <Image
              src="assets/images/tasks.svg"
              width={200}
              height={200}
              alt="tasks"
              className="w-full mb-5"
            />
            <h3 className="text-sm font-medium text-text-inv-high-lgt">
              Collaborative Task Management
            </h3>{" "}
            <p className="text-xs text-text-inv-mid-lgt">
              Effortlessly assign and track tasks, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2 bg-white/5 justify-center p-3 rounded-md">
            <Image
              src="assets/images/integration.svg"
              width={200}
              height={200}
              alt="integration"
              className="w-full mb-5"
            />
            <h3 className="text-sm font-medium text-text-inv-high-lgt">
              Integration Capabilities
            </h3>{" "}
            <p className="text-xs text-text-inv-mid-lgt">
              Connect with your favorite productivity tools seamlessly.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2 bg-white/5 justify-center p-3 rounded-md">
            <Image
              src="assets/images/tracking.svg"
              width={200}
              height={200}
              alt="tracking"
              className="w-full mb-5"
            />
            <h3 className="text-sm font-medium text-text-inv-high-lgt">
              Real-time Project Tracking
            </h3>{" "}
            <p className="text-xs text-text-inv-mid-lgt">
              Visualize timelines, track milestones, and make data-driven
              decisions to keep projects on schedule.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2 bg-white/5 justify-center p-3 rounded-md">
            <Image
              src="assets/images/communication.svg"
              width={200}
              height={200}
              alt="communication"
              className="w-full mb-5"
            />
            <h3 className="text-sm font-medium text-text-inv-high-lgt">
              Seamless Team Communication
            </h3>{" "}
            <p className="text-xs text-text-inv-mid-lgt">
              Share updates, files, and feedback instantly, and fostering a
              collaborative.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/divider.svg"
        alt="divider"
        width={80}
        height={100}
        className="m-auto my-20"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-text-inv-high-lgt text-3xl font-bold mb-2 w-[70%] ">
          Why Tasking to Managing Your Task?
        </h1>
        <div className="grid md:grid-cols-2 gap-5 my-5 md:w-[55rem] max-w-[80%] ">
          <Image
            src="/assets/images/why-image.svg"
            alt="divider"
            width={500}
            height={500}
            className="w-full md:block hidden"
          />
          <Image
            src="/assets/images/why-img-2.svg"
            alt="divider"
            width={500}
            height={500}
            className="w-full md:hidden"
          />
          <div className="text-start">
            <p className="text-text-inv-mid-lgt text-sm">
              Choose Tasking — where security, scalability, and simplicity
              converge for project management excellence.
            </p>
            <div className="my-10 flex flex-col justify-between gap-5">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon.svg"
                  alt="why-tasking"
                  width={50}
                  height={50}
                  className="mr-2 size-8"
                />
                <div className="text-start">
                  <h3 className="font-medium text-text-inv-high-lgt text-sm">
                    Reliable and Secure
                  </h3>
                  <p className="text-text-inv-mid-lgt text-xs flex flex-col">
                    Trust in our secure and reliable platform.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-1.svg"
                  alt="why-tasking"
                  width={50}
                  height={50}
                  className="mr-2 size-8"
                />
                <div className="text-start">
                  <h3 className="font-medium text-text-inv-high-lgt text-sm">
                    Scalable Solutions
                  </h3>
                  <p className="text-text-inv-mid-lgt text-xs flex flex-col">
                    Designed for teams of all sizes.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-2.svg"
                  alt="why-tasking"
                  width={50}
                  height={50}
                  className="mr-2 size-8"
                />
                <div className="text-start">
                  <h3 className="font-medium text-text-inv-high-lgt text-sm">
                    User-Friendly Interface
                  </h3>
                  <p className="text-text-inv-mid-lgt text-xs flex flex-col">
                    Enjoy a sleek and user-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
