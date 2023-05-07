// Import React library along with required methods
import React, { useContext, useState, useEffect, useMemo } from "react";

// New context name StoreContext is created
const StoreContext = React.createContext();

// Custom hook name useStore is defined
export function useStore() {
  // Return useContext hook with StoreContext parameter
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  // loading state to render children conditionally
  const [loading, setLoading] = useState(true);

  // error and success states to give messages to the user about the cart
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // catalogue state to store products
  const [catalogue, setCatalogue] = useState([]);

  // categoryFilters state to store available categories with their labels
  const [categoryFilters, setCategoryFilters] = useState([]);

  // search state to get search input from search field
  const [search, setSearch] = useState("");

  // selectedFilters state to get the selectedFilters of the products according to the category
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    gender: [],
    price: [],
    type: [],
  });

  // shoppingCart state to get all the selected products
  const [shoppingCart, setShoppingCart] = useState([]);

  // This function resets the error and success status messages to empty
  const resetStatusMessages = () => {
    setError("");
    setSuccess("");
  };

  // This function updates the cart items by adding new product as an item
  const addCartItems = (item) => {
    // Reset error and success status messages
    resetStatusMessages();

    // Add new item to shoppingCart with initial selectedQuantity of 1
    const newItem = { ...item, selectedQuantity: 1 };
    setShoppingCart([...shoppingCart, newItem]);
  };

  const updateSelectedQuantity = (product, incrementOrDecrement) => {
    try {
      // Reset error and success status
      resetStatusMessages();

      // Find the existing item in the shopping cart which is equal to the product trying to update quantity
      const item = shoppingCart.find(({ id }) => id === product.id);

      // Extract selectedQuantity and maximumQuantity from item
      const { selectedQuantity, quantity: maximumQuantity } = item;

      // Calculate the new quantity based on the increment
      const newQuantity =
        incrementOrDecrement === 1
          ? selectedQuantity + 1
          : selectedQuantity - 1;

      // Check condition if the new quantity is greater than the available quantity in the catalogue or 0
      if (newQuantity > maximumQuantity) {
        // If yes set error as the quantity is exceeded
        setError("Quantity exceeds available stock.");
      } else if (newQuantity < 1) {
        // If the new quantity is 0, remove the item from the cart
        removeCartItems(product);
      } else {
        // If no, update the selectedQuantity in the shopping cart
        const updatedItems = shoppingCart.map((item) =>
          item.id === product.id
            ? { ...item, selectedQuantity: newQuantity }
            : item
        );
        setShoppingCart(updatedItems);
      }
    } catch (error) {
      // Catch error if the above functionality doesn't work
      resetStatusMessages();
      setError(error.message);
    }
  };

  // This function removes the selected product from the cart
  const removeCartItems = (product) => {
    // Reset error and success status
    resetStatusMessages();

    // Remove the item from the shopping cart using filter method and set success message
    setShoppingCart(shoppingCart.filter(({ id }) => id !== product.id));
    setSuccess("Product removed successfully");
  };

  // This function sets the searchValue of for the search functionality
  const searchCatalog = (searchValue = "") => {
    setSearch(searchValue);
  };

  // This function adds the selected filters to the selectedFilters state for the filtering
  const addSelectedFilters = (name, value, checked = true) => {
    // Verify if the checkbox is checked and the filters to the list
    const updatedFilters = {
      ...selectedFilters,
      [name]: checked
        ? [...selectedFilters[name], value]
        : selectedFilters[name].filter((item) => {
            return item !== value;
          }),
    };

    setSelectedFilters(updatedFilters);
  };

  // This function is to filter the catalogue with search and other filters
  const getFilteredCatalogue = () => {
    // Getting the filtered list from the checkbox filters
    const filteredProducts = applyFilters(catalogue, selectedFilters);

    // Getting the filtered list from the search filter
    if (search.length > 0) {
      return filteredProducts.filter((product) => {
        // Extracting color, gender, type from the product and store in productValues
        const productValues = [product.name, product.color, product.type];

        // Filter using the parameters and making them lowercase to make them easy to compare
        return productValues.some((value) =>
          value.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    // Return the final filtered products
    return filteredProducts;
  };

  // This function is to filter the products based on the checkbox selection filters
  const applyFilters = (products, filters) => {
    // Extracting color, gender, price and type from filters
    const { color, gender, price, type } = filters;

    // adding the existing products to the filteredproducts
    let filteredProducts = [...products];

    // filtering based on color
    if (color.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        color.includes(product.color)
      );
    }

    // filtering based on gender
    if (gender.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        gender.includes(product.gender)
      );
    }

    // filtering based on type
    if (type.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        type.includes(product.type)
      );
    }

    // filtering based on price range
    if (price.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        if (price.includes("250")) {
          return product.price <= 250;
        } else if (price.includes("251")) {
          return product.price >= 251 && product.price <= 450;
        } else if (price.includes("450")) {
          return product.price >= 450;
        } else {
          return true;
        }
      });
    }

    // Return the final filtered products by checkbox filters
    return filteredProducts;
  };

  // Using useMemo to memoize the result of the getFilteredCatalogue
  // To reduce the re-computing of the filtered catalogue on every
  const productCatalogue = useMemo(getFilteredCatalogue, [
    catalogue,
    selectedFilters,
    search,
  ]);

  const extractCategories = (products) => {
    // Declaration of variables for filter categories and labels
    const colorArr = [];
    const genderArr = [];
    const priceArr = [
      { range: "0 - 250", price: 250 },
      { range: "251 - 450", price: 251 },
      { range: "> 450", price: 450 },
    ];
    const typeArr = [];

    // Mapping the product data to extract the categories and labels for category filters
    products.forEach((product) => {
      colorArr.push(product.color);
      genderArr.push(product.gender);
      typeArr.push(product.type);
    });

    // Removing Duplicates from the filter labels
    function removeDuplicates(arr) {
      return arr.filter((label, index) => arr.indexOf(label) === index);
    }

    // Removing duplicates and Storing the above extracted categories data
    return [
      { name: "color", labels: removeDuplicates(colorArr) },
      { name: "gender", labels: removeDuplicates(genderArr) },
      { name: "price", labels: priceArr },
      { name: "type", labels: removeDuplicates(typeArr) },
    ];
  };

  // This useEffect is to fetch the catalogue data from the given url using the fetch api
  // It is then processed to extract the data to categorize the filters based on the product attributes
  // The filtered categories and labels are stored in the state variables
  useEffect(() => {
    const fetchCatalogue = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );

        const products = await response.json();
        // Storing products data in in the state variable
        setCatalogue(products);
        setCategoryFilters(extractCategories(products));
        setLoading(false);
      } catch (error) {
        console.log("Error fetching catalogue data: ", error);
      }
    };

    // Fetching the catalogue data and setting loading to false when the data is loaded
    fetchCatalogue();

    let timerId;

    if (error || success) {
      timerId = setTimeout(() => {
        resetStatusMessages();
      }, 5000);
    }

    return () => {
      clearTimeout(timerId);
    };

    // This useEffect hook is triggered whenever the catalogue or selectedFilters state changes
    // The state of the catalogue data is re-fetched and updated accordingly
  }, [error, success]);

  const value = {
    categoryFilters,
    selectedFilters,
    productCatalogue,
    shoppingCart,
    addCartItems,
    updateSelectedQuantity,
    searchCatalog,
    error,
    success,
    removeCartItems,
    addSelectedFilters,
  };

  // This returns the Provider Component which wraps the children with the StoreContext
  // The 'value' object is passed as a prop to the StoreContext
  // The children are rendered with conditional rendering only when the loading state is false
  return (
    <StoreContext.Provider value={value}>
      {!loading && children}
    </StoreContext.Provider>
  );
}
