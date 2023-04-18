const cap1stLetter = str => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
};
export default cap1stLetter;