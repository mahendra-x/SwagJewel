import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import BookCard from "./book";
import { Link } from "react-router-dom";
// import axios from "axios";

export const Book = {
  asin: "",
  author: "",
  image_url: "",
  rating: "",
  title: "",
  url: "",
  catagories: "",
  ISBN10: "",
};

function DBCarousel() {
  //   const API_BASE_URL =
  // process.env.NODE_ENV === "production" ? "http://3.128.189.242:4000" : "";
  // setting the state variables
  // cards will be the cards that are displayed
  const [cards, setCards] = useState([]);
  // currentPage is the current page of the cards that is currently displayed
  const [currentPage, setCurrentPage] = useState(0);
  // slideDirection is the direction that the cards will slide in
  const [slideDirection, setSlideDirection] = useState("left");

  // cardsPerPage is the number of cards that will be displayed per page
  // you can modify for your needs
  const cardsPerPage = 4;
  // axios get request to get the data from the database
  const fetchBooks = async () => {
    try {
      //   const response = await axios.get(`${API_BASE_URL}/api/books`);
      const response = await fetch(`/book.json`)
        .then((res) => res.json())
        .then((data) => {
          // this.setState({ links: data });
          // console.log(data);
          return data;
        });

      console.log("API response:", response);
      setCards(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  // these two functions handle changing the pages
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // useEffect hook to fetch the data from the database
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);
  // this sets the container width to the number of cards per page * 250px
  // which we know because it is defined in the card component
  const containerWidth = cardsPerPage * 250; // 250px per card

  return (
    //  outer box that holds the carousel and the buttons
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        // height: "400px",
        width: "100%",
        marginTop: "40px",
        flexWrap: "wrap",
        // display: { xs: "none", md: "none", lg: "flex" },
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: 5 }}
        disabled={currentPage === 0}
      >
        {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
        <NavigateBeforeIcon />
      </IconButton>
      <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
        {/* this is the box that holds the cards and the slide animation,
        in this implementation the card is already constructed but in later versions you will see how the
        items you wish to use will be dynamically created with the map method*/}
        {cards?.map((card, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}
          >
            {/* this is the slide animation that will be used to slide the cards in and out*/}
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}
              >
                {/* this slices the cards array to only display the amount you have previously determined per page*/}
                {cards
                  .slice(
                    index * cardsPerPage,
                    index * cardsPerPage + cardsPerPage
                  )
                  .map((book, index) => (
                      <Box key={book.asin}>
                        <BookCard book={book} />
                      </Box>
                  ))}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{
          margin: 5,
        }}
        disabled={
          currentPage >= Math.ceil((cards?.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

export default DBCarousel;
