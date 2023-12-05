import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";


function Excluir({id}) {
    const [show, setShow] = useState(false);

    function excluirDados() {
        fetch('https://apiaulas.thiagodev502.repl.co/funcionarios/' + id)
        .then((resposta) => location.reload())
        .catch(() => console.log("Erro ao excluir"))
    }

  return (
      <div>
          <span style={{cursor:"pointer"}} onClick={() => setShow(true)}>
          <FaTrashAlt size={20} className='text-danger'/>

          </span>

          <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                    <h2>Excluir</h2>
              </Modal.Header>
              <Modal.Body>
                Deseja realmente excluir?
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={excluirDados} variant="dander">Excluir</Button>
              </Modal.Footer>
          </Modal>
        </div>
    );
}

export default Excluir;