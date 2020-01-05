import React, { Component } from 'react';
import Amplify, {API,graphqlOperation} from 'aws-amplify';


const readNote = `query listNotes{
    listNotes{
      items{
        __typename
        id
        note
      }
    }
  }`;

  export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      id
      note
      owner
    }
  }
  `;

export default class ListNotes extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            notes:[],
            value:"",
            displayAdd:true,
            displayUpdate:false
         };

    }

    selectNote(note){
        this.setState({id:note.id,value:note.note,displayAdd:false,displayUpdate:true});
        console.log(note.id, note.note)
      }

    async handleDelete(id) {
        const noteId = {"id":id};
        console.log(noteId)
        await API.graphql(graphqlOperation(deleteNote, noteId));
        this.listNotes();
        console.log('worked')
    }

    async listNotes(){
        const notes = await API.graphql(graphqlOperation(readNote));
        this.setState({notes:notes.data.listNotes.items});
      }

    async componentDidMount(){
        const notes = await API.graphql(graphqlOperation(readNote));
        this.setState({notes:notes.data.listNotes.items});
      }

    

    render(){
        const data = [].concat(this.state.notes)
      .map((item,i)=> 
      <div className="alert alert-primary alert-dismissible show" role="alert">
        <span key={item.i} onClick={this.selectNote.bind(this, item)}>{item.note}</span>
      </div>
        )


         return(
            <div className="container"> 
                {data}
            </div>
        )
    }
}