// Write your code here
import {ListItem, Heading, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {titleInput, noteInput} = noteDetails
  return (
    <ListItem>
      <Heading>{titleInput}</Heading>
      <Note>{noteInput}</Note>
    </ListItem>
  )
}
export default NoteItem
