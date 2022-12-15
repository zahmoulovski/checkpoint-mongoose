import React ,{useEffect}from 'react'
import {fetchContacts} from '../api/api.js'
import {useDispatch,useSelector} from 'react-redux'
import {setContacts } from '../store/contactsSlice'
import CardContact from './CardContact'

const ListContact = () => {
  const dispatch=useDispatch();
  const contacts = useSelector(state=>state.contact)
  const getContacts=async()=>{
  const data = await fetchContacts()
  dispatch(setContacts(data.Contacts))
  }
  useEffect(()=>{
    getContacts();
  },[])
  return (
    <div>
      {
contacts.map((el)=>(<CardContact contact={el} getContacts={getContacts} />))
    }
    </div>
  )
}

export default ListContact