import React from 'react';

 class SearchBar extends React.Component{

    state = { term : ''};

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className = 'ui  segment'>
                <form onSubmit = {(event) => this.onFormSubmit(event)} className = 'ui form'>
                    <div className = 'field'>
                        <label>Image Search</label>
                        <input 
                        type = 'text' 
                        value = {this.state.term} 
                        onChange= { (e) => this.setState({term : e.target.value})}>

                        </input>
                    </div>
                </form>
            </div>
        )
    }
      
 }

 export default SearchBar; 