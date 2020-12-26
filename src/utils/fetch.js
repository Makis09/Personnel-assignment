const getData = async (url) => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getData;
