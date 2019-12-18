import React from 'react';
import SearchBar from './SearchBar';
import youtube,{baseParams} from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {videos: [],onVideoSelect:null};
    onTermSubmit= async (term)=>{
      const x=  await youtube.get('/search',{
        params:{
            ...baseParams,
            q: term
        }
             });
        this.setState({
            videos: x.data.items,
            onVideoSelect:x.data.items[0]
        });
    };

    onVideoSelect=(video)=>{
        this.setState({onVideoSelect:video})
    };

    componentDidMount(){
        this.onTermSubmit('iOS');
    }
    render(){
        return(
            <div>
            <SearchBar onSearchSubmit={this.onTermSubmit}/>
            <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
            <VideoDetail video={this.state.onVideoSelect}/>
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
            </div>
            </div>
            </div>
            
            
        );
    };
};
export default App;
