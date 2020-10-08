import React, { useEffect, useState, useReducer } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Modal } from "semantic-ui-react";

  
  const ModalImage = ({isOpen, item}) => {
    const [isOpenOrder, setisOpenOrder] = useState(false);
    useEffect(() => {
        setisOpenOrder(isOpen);
    }, [isOpen]);
    
    useEffect(() => {
        !item && setisOpenOrder(false);

    }, [item]);

    return (
      <>
        <Modal
          size="fullscreen"
          open={isOpenOrder}
          onClose={() => setisOpenOrder(prev =>!prev)}
        >
          <Modal.Header>{item && item.tags && item.tags.split(",")[0].toUpperCase()}</Modal.Header>
          <Modal.Content>
            <img src={item && item.largeImageURL} alt={item && item.tags && item.tags.split(",")[0]}/>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => setisOpenOrder(prev =>!prev)}>
              KAPAT
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  };

  export default ModalImage;