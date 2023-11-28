import Header from "../components/Header"
import Conteudo from "../components/conteudo"
import Form from 'react-bootstrap/Form'
import Button  from "react-bootstrap/Button"

function Login() {
    return (
        <>
        <Header btn={false} />
        <Conteudo>
            <h2>Login</h2>
            <Form>
                <Form.Group>
                    <Form.Label className="mt-2">Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-2">Senha:</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua Senha" required />
                </Form.Group>
                <Button type="submit" className="mt-3">Login</Button>
            </Form>
        </Conteudo>
        </>
    )
}

export default Login