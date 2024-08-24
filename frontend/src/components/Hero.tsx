const Hero = () => {
  return (
    <div className="w-full bg-secondary  text-white min-h-fit ">
      <div className="flex w-full h-[700px] flex-row justify-center py-16 gap-16">
        <div className="flex flex-col items-center justify-center w-[50%] h-full gap-16">
          <div>
            <h2 className="text-5xl font-extrabold">
              Start learning with the{" "}
              <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                best
              </mark>{" "}
              online library!
            </h2>
            <p className="my-4 text-lg text-white w-[80%]">
              With us you can learn as much as you want, any subject, any theme,
              allow us to take you on an amazing learning journey!
            </p>
            <br />
            <button className="text-xl font-extrabold bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
              start learning now
            </button>
          </div>
        </div>
        <img
          src="/hero.jpeg"
          alt=""
          className="object-contain  h-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
