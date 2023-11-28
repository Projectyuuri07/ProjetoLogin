import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

function Header({btn}) {
    return (
        <header>
            <Navbar variant='dark'>
                <Container>
                    <Navbar.Brand>
                        Minha Empresa
                    </Navbar.Brand>
                    {btn ? (
                        <div className='d-flex gap-4'>
                            <Button>Adicionar</Button>
                            <Button>Sair</Button>
                        </div>
                    ): ''}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header