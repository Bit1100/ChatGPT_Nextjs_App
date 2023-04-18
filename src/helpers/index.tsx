import { toast } from "react-toastify";

export const setTitleCase = (category) => {
  return category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase();
};

export const handleToast = (content, type, duration = 5000) => {
  toast(content, {
    type,
    autoClose: duration,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
  });
};

export const stringifyQuery = (queryParams, queryObj) => {
  let stringifiedQuery = "";

  console.log(queryObj);

  try {
    for (const key in queryObj) {
      for (const iKey of Object?.keys(queryObj[key])) {
        stringifiedQuery += `${iKey} = ${queryObj[key][iKey]}\n-`;
      }
    }

    return `${queryParams}:\n-${stringifiedQuery}`;
  } catch (error) {
    handleToast("Empty Query is not allowed", "error");
  }
};
