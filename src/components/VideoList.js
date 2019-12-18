import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoSelect})=>{
const list=videos.map((video=>{
return(
<div  className="ui relaxed divided list">
    <br></br>
    
<VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
</div>
);
}));
return <div>{list}</div>;

};
export default VideoList;