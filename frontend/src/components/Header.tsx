const Header = () => {
  return (
    <header className="bg-secondary text-white w-full flex flex-row justify-center">
      <div className="flex max-w-[1440px] flex-row w-full items-center justify-between pt-8 px-4">
        <div className="text-xl font-extrabold">logo</div>
        <div className="flex flex-row gap-4">
          <div className="text-xl">about</div>
          <div className="text-xl">contact</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
