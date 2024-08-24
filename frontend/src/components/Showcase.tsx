interface BookMetaData {
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
}

const Showcase = () => {
  const books: BookMetaData[] = [
    {
      name: "harry potter and the sorcerer's stone",
      author: "j. k. rowling",
      image: "/hp_stone.jpg",
      price: 15,
      description: `In "Harry Potter and the Sorcerer's Stone," Harry discovers he's a wizard on his eleventh birthday and attends Hogwarts School. He befriends Ron and Hermione, and together they uncover a plot to steal the Sorcerer's Stone, which grants immortality. The trio faces various challenges and eventually confronts Professor Quirrell, who is possessed by the dark wizard Voldemort. Harry defeats Quirrell, preventing Voldemort from regaining power.`,
    },
    {
      name: "harry potter and the sorcerer's stone",
      author: "j. k. rowling",
      image: "/hp_stone.jpg",
      price: 15,
      description: `In "Harry Potter and the Sorcerer's Stone," Harry discovers he's a wizard on his eleventh birthday and attends Hogwarts School. He befriends Ron and Hermione, and together they uncover a plot to steal the Sorcerer's Stone, which grants immortality. The trio faces various challenges and eventually confronts Professor Quirrell, who is possessed by the dark wizard Voldemort. Harry defeats Quirrell, preventing Voldemort from regaining power.`,
    },
    {
      name: "harry potter and the sorcerer's stone",
      author: "j. k. rowling",
      image: "/hp_stone.jpg",
      price: 15,
      description: `In "Harry Potter and the Sorcerer's Stone," Harry discovers he's a wizard on his eleventh birthday and attends Hogwarts School. He befriends Ron and Hermione, and together they uncover a plot to steal the Sorcerer's Stone, which grants immortality. The trio faces various challenges and eventually confronts Professor Quirrell, who is possessed by the dark wizard Voldemort. Harry defeats Quirrell, preventing Voldemort from regaining power.`,
    },
  ];
  return (
    <div className="flex flex-col items-center h-fit gap-[150px] w-full py-20 px-64">
      <h2 className="text-3xl font-extrabold">
        Check out our most popular items
      </h2>
      {books.map((book, index) => {
        return (
          <div
            className={
              "flex flex-row w-full items-center gap-16 " +
              (!(index % 2) ? "justify-end" : "")
            }
          >
            {index % 2 ? <img src={book.image} alt={book.name} /> : <></>}
            <div className=" flex flex-col items-start">
              <h2 className="text-2xl font-extrabold">{book.name}</h2>
              <h2 className="text-xl text-gray-500">{book.author}</h2>
              <p className="my-4 text-lg max-w-xl">{book.description}</p>
              <br />
              <button className="text-md font-extrabold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                buy for {book.price}$
              </button>
            </div>
            {!(index % 2) ? <img src={book.image} alt={book.name} /> : <></>}
          </div>
        );
      })}
    </div>
  );
};

export default Showcase;
