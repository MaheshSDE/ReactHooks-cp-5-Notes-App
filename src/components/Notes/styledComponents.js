// Style your elements here
import styled from 'styled-components'

export const NotesMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  font-weight: 500;
  color: #4c63b6;
`
export const FormContainer = styled.form`
  width: 80%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 60px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  padding-right: 20px;
`
export const TitleInput = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 20px;
  color: #475569;
`
export const NoteInput = styled.textarea`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 20px;
  color: #475569;
  margin-bottom: 60px;
`
export const Button = styled.button`
  width: 60px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #4c63b6;
  color: #ffffff;
  font-size: 15px;
  align-self: flex-end;
`
export const Container = styled.div`
  width: 80%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const Img = styled.img`
  height: 80px;
  width: 80px;
`
export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #334155;
`
export const EmptyDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
`

export const UnOrderList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`
