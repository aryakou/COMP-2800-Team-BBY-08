import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import logo from './MML.svg';
 

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const Swal = require('sweetalert2')

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroupItem header={note.content.trim().split("\n")[0]}>
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    let myCounter = 0;
    let start;

  function handleClick(e) {
    e.preventDefault();
    myCounter++;
    if(myCounter === 3){
    console.log('Easter Egg Activated!');
    Swal.fire({
      title: 'Activated!',
      text: 'Easter Egg has been activated!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    start = setInterval(lightShow, 1200);
    }
    if (myCounter === 6){
      clearIt();
      console.log('Easter Egg Deactivated!');
      Swal.fire({
        title: 'Deactivated!',
        text: 'Easter Egg has been Deactivated!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      myCounter = 0;
    }

  }

  function lightShow(){
    document.body.style = `background: ${'#'+(Math.random()*0xFFFFFF<<0).toString(16)};`;
  }

  function clearIt(){
    clearInterval(start);
    document.body.style = 'background: #1A1E23;';
  }
    return (
      <div className="lander">
        <h1>Meta MoLog</h1>
        <img src={logo} id='logo' alt="logo" onClick={handleClick} />
        <p>Beyond your typical journal, access your secure quarantine chronicles from any device. Features include: listed time, date, and serverless storage. </p>
      </div>
    );
  }

  function renderNotes() {

    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }


  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}