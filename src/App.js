import React, { useState, Fragment } from "react";

import fetchImages from './components/ApiService/ImageApi';
// import ErrorView from "./components/ErrorView/ErrorView";
import SearchBar from './components/SearchBar';
import ImageGallery from "./components/ImageGallery";

import Button from './components/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const [searchRequest, setSearchRequest] = useState('');
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalBigImage, setModalBigImage] = useState('');


  const handleFormSubmit = searchRequest => {
    setIsLoading(true);
    setSearchRequest(searchRequest);

    fetchImages(searchRequest, 1).then(response => {
      if (response.hits.length === 0) {

        setImages('')
        notify()
        return;
      } setImages(response.hits); setPage(+ 1);window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }).catch(error => setError(error)).finally(() => setIsLoading(false));

  };

    
  const handleButtonClick = () => {
    
    setIsLoading(true);

    fetchImages(searchRequest, page +1).then(({ hits }) => {
      setImages([...images, ...hits]);setPage(page + 1);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }).catch(error => setError(error)).finally(() => setIsLoading( false));

  };

  const onOpenModalClick = largeImageURL => {
    setModalBigImage(largeImageURL);
  };

  const closeModal = () => {
    setModalBigImage('');
  };

  const notify = () => {
    toast.error("Whoops, something went wrong");
    toast.clearWaitingQueue();
    return;
  };


  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} images={images} />
      <Fragment>
        {error && <span>Something went wrong. Please type in another request</span>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} onClick={onOpenModalClick} />}
        {images.length > 11 && <Button onClick={handleButtonClick} />}
        {modalBigImage && <Modal
          modalBigImage={modalBigImage}
          closeModal={closeModal} />}
      </Fragment>

      <ToastContainer autoClose={2000} limit={1} />
    </>
  );

};