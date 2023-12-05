import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";


function Editar({id}) {
    const [show, setShow] = useState(false);

    function excluirDados() {
        fetch('https://apiaulas.thiagodev502.repl.co/funcionarios/' + id)
        .then((resposta) => location.reload())
        .catch(() => console.log("Erro ao excluir"))
    }

  return (
      <div>
          <span style={{cursor:"pointer"}} onClick={() => setShow(true)}>
          <FaPencilAlt size={20} className='text-primary'/>

          </span>

          <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                    <h2>Editar</h2>
              </Modal.Header>
              <Modal.Body>
                Oque deseja editar?
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={excluirDados} variant="dander">Excluir</Button>
              </Modal.Footer>
          </Modal>
        </div>
    );
}

export default Editar;