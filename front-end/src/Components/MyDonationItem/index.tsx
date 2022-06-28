import React from 'react';
import {
  Row, Col, Card, Button, ListGroup
} from 'react-bootstrap';
import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { DonationItem, ButtonsContainer } from './styles';

interface GridDonationItemProps {
    donates: Array<IDonate>;
}

const GridDonationItem: React.FC<GridDonationItemProps> = ({ donates }) => (
  <DonationItem>
    <Row>
      {donates.map((donate) => (
        <Col xs={12} md={12}>
          <Card>
            <Card.Header>{donate.tag.name}</Card.Header>
            <Card.Body>
              <Row xs={1} md={2}>
                <Col>
                  <Card.Title>{donate.title}</Card.Title>
                  <Card.Text>
                    {donate.description}
                    .
                  </Card.Text>
                </Col>
                {!donate.status_donate.includes('finalizada') && (
                <Col>
                  <Card.Title>Usuários interessados</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" style={{ height: '100px', overflow: 'auto', width: '100%' }}>
                      <ListGroup.Item>
                        Cras justo odio
                        <Button variant="primary">Chat</Button>
                        {' '}
                        <Button variant="primary">Aceitar</Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Cras justo odio
                        <Button variant="primary">Chat</Button>
                        {' '}
                        <Button variant="primary">Editar</Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Cras justo odio
                        <Button variant="primary">Chat</Button>
                        {' '}
                        <Button variant="primary">Editar</Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Col>
                )}
              </Row>

            </Card.Body>
            <Card.Footer className="text-muted" style={{ fontSize: '12px' }}>
              Criado em:
              {' '}
              {donate.created_at}
              {!donate.status_donate.includes('finalizada') && (
              <ButtonsContainer>
                <Button variant="primary">Editar</Button>
                <Button variant="danger">Excluir</Button>
              </ButtonsContainer>
              )}
              <div>
                {' '}
                Atualizado em:
                {donate.updated_at}
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  </DonationItem>
);

export default GridDonationItem;
