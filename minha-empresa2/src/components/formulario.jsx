import { Form, Forms } from 'react-bootstrap';

function Formulario() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" required />
            </Form.Group>
        </Form>
    )

}

export default Formulario