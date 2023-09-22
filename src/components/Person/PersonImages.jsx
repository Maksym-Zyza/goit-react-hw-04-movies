import { useState, useEffect } from 'react';
import st from './PersonImages.module.scss';
import Loader from '../../components/Loader/Loader';
import api from '../../api/movies-api';
import Modal from '../Modal/Modal';

const PersonImages = ({ showModal, toggleModal }) => {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const PersonId = window.location.pathname.split('/').pop();
    setIsLoading(true);

    api
      .getPersonImages(PersonId)
      .then(result => {
        const newArr = [];
        const newObj = Object.values(result.profiles);
        for (var key in newObj) {
          newArr.push(newObj[key].file_path);
        }
        setImages([...newArr]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal}>
          {images?.map(el => (
            <div key={el}>
              <img className={st.img} src={`${src}${el}`} alt="Person poster" />
            </div>
          ))}
        </Modal>
      )}

      {isLoading && <Loader isLoading={isLoading} />}
    </div>
  );
};

export default PersonImages;
