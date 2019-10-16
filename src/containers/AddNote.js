import React, { Component } from 'react';
import Amplify, {API,graphqlOperation} from 'aws-amplify';


const createNote = `mutation CreateNote($input: CreateNoteInput!) {
    createNote(input: $input) {
      id
      note
      owner
    }
  }
  `;

export default class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            notes:[],
            value:"",
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        const note = {"note":this.state.value}
        await API.graphql(graphqlOperation(createNote, note));
        this.listNotes();
        this.setState({value:""});
      }


    handleChange(event) {
        this.setState({value:event.target.value});
     }

    render(){



         return(
            <div className="container"> 
        
                <form onSubmit={this.handleSubmit}>
                     <div className="input-group mb-3">
                           <input type="text" className="form-control form-control-lg" placeholder="New Note" aria-label="Note" aria-describedby="basic-addon2" value={this.state.value} onChange={this.handleChange}/>
                            <div className="input-group-append">
                                 <button className="btn btn-primary" type="submit">Add Note</button>
                            </div>
                        </div>
                 </form>

            </div>
        )
    }
}