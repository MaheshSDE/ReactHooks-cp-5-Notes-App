// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesMainContainer,
  NotesHeading,
  FormContainer,
  TitleInput,
  NoteInput,
  Button,
  Container,
  ImgContainer,
  Img,
  EmptyHeading,
  EmptyDescription,
  UnOrderList,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [noteInput, setNoteInput] = useState('')
  const [noteList, setNoteList] = useState([])

  const onChangeTitle = event => {
    setTitleInput(event.target.value)
  }

  const onChangeNote = event => {
    setNoteInput(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      titleInput,
      noteInput,
    }
    setNoteList(prevState => [...prevState, newNote])
    setTitleInput('')
    setNoteInput('')
  }

  return (
    <NotesMainContainer>
      <NotesHeading>Notes</NotesHeading>
      <FormContainer onSubmit={onAddNote}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={titleInput}
          onChange={onChangeTitle}
        />
        <NoteInput
          placeholder="Take a Note..."
          type="text"
          rows="6"
          value={noteInput}
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      <Container>
        {noteList.length === 0 ? (
          <ImgContainer>
            <Img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHeading>No Notes Yet</EmptyHeading>
            <EmptyDescription>Notes you add will appear here</EmptyDescription>
          </ImgContainer>
        ) : (
          <UnOrderList>
            {noteList.map(eachItem => (
              <NoteItem noteDetails={eachItem} key={eachItem.id} />
            ))}
          </UnOrderList>
        )}
      </Container>
    </NotesMainContainer>
  )
}
export default Notes
