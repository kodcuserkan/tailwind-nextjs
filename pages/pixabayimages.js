import React, { useEffect, useState } from "react";
import { PIXABAY_API } from "../components/pixabay";
import axios from "axios";

const MyButton = ({ name, color, disabledvalue }) => (
  <button
    className={`bg-${color}-400 ${
      Boolean(disabledvalue) && `hover:bg-${color}-700`
    } text-white py-2 px-4 rounded mt-2 focus:outline-none`}
    disabled={Boolean(disabledvalue)}
  >
    {name}
  </button>
);
function Pixabayimages() {
  const [searchText, setsearchText] = useState("");
  const [count, setcount] = useState(0);
  const [results, setresults] = useState([]);

  const getImagesFromPixabay = async () => {
    let query =
      searchText && searchText.length > 0 ? searchText.replace(" ", "+") : "";
    console.log(query, searchText);
    const getStr = `https://pixabay.com/api/?key=${PIXABAY_API}&q=${query}&image_type=photo`;
    const data = await axios
      .get(getStr)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (data && data.data && data.data.hits.length > 0) {
      setresults(data.data.hits);
    } else {
      setresults([]);
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      console.log(results);
    }
  }, [results]);

  useEffect(() => {
    if (count > 0 && searchText.length > 0) {
      getImagesFromPixabay();
    } else {
      console.log("Bulunamadı");
    }
  }, [count, searchText]);
  useEffect(() => {
    if (count < 0) {
      setcount(0);
    }
    if (count > 20) {
      setcount(20);
    }
    if (searchText.length > 20) {
      setsearchText("");
    }
  }, [count, searchText]);

  return (
    <div className="m-3 p-2 mr-3 block border shadow-xl rounded-lg border-gray-800 w-full overflow-hidden ">
      <div className="inputsdiv my-1 mx-2 flex flex-row shadow-sm overflow-hidden ">
        <div className="mx-3 overflow-hidden">
          <label htmlFor="inputcount">Kaç adet resim gelsin?</label>
          <input
            type="number"
            id="inputcount"
            className="px-3 m-0 focus:outline-none border border-gray-300 w-full"
            placeholder="Rakam giriniz"
            value={count}
            onChange={(e) => setcount(e.target.value)}
          />
        </div>
        <div className="mx-3 w-full">
          <label htmlFor="inputsearch">Arama kelimesi: </label>
          <input
            type="text"
            id="inputsearch"
            className="px-3 m-0 focus:outline-none border border-gray-300 w-full"
            placeholder="Kelime girin"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mx-auto overflow-hidden flex-wrap">
        {results && results.length > 0 ? (
          results.slice(0, count).map((result, i) => {
            return (
              <div
                className="m-5 flex w-50 p-2 border rounded-lg border-orange-400 overflow-hidden"
                key={i}
              >
                <div className="flex w-50 flex-col">
                  <div className="imagediv w-50 bg-gray-500 self-center align-middle block overflow-hidden ">
                    <img
                      className="block mx-auto lg:mx-0 lg:flex-shrink-0 h-30 lg:h-24"
                      src={result.largeImageURL}
                      alt={result.user}
                    />
                  </div>
                  <div className="flex flex-row flex-wrap m-1">
                    <strong>Etiketler: </strong>
                    <span className="flex flex-row">
                      {result &&
                        result.tags &&
                        result.tags.length > 0 &&
                        result.tags.split(",").map((tag, index) => (
                          <h5
                            className="text-xs p-2 mx-2 h-auto  rounded-lg border border-gray-700 max-w-xs"
                            key={index}
                          >
                            {tag.trim()}
                          </h5>
                        ))}
                    </span>
                  </div>
                  <MyButton name="Sil" color="red" disabledvalue="false" />
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-3xl justify-items-center justify-center">
            Resim Bulunamadı
          </h1>
        )}
      </div>
    </div>
  );
}

export default Pixabayimages;
