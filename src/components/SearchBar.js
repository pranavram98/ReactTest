import React from 'react';
class SearchBar extends React.Component{

    state={term:""};

    onInputChange=(event)=>{
        this.setState({term:event.target.value});
    }

    onSearchSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <div className="ui segment">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                    <input type="text" placeholder="Enter Search Term Here" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
            </div>
        );
    };
};
export default SearchBar;
