import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <section>
        <div className="todoList">
          <Container>
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div className="todos">
                  <h1>My Todos</h1>
                  <div className="listContainer">
                    <input
                      type="text"
                      placeholder="Add something to do..."
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button type="button" onClick={addTodo}>
                      Save
                    </button>
                  </div>
                  <div className="list">
                    <ul>
                      {todos.map((todo, index) => (
                        <li key={index}>
                         <input type="checkbox"/>
                          {todo}
                          <button onClick={() => removeTodo(index)}>
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default TodoList;
