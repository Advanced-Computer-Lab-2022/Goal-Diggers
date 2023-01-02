import React, { useState }  from 'react';
import { useEffect } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function Sidebar({subtitles}) {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        let itemTemp = [];
        subtitles.map((subtitle, index) => {
            itemTemp.push({
                            title: subtitle.title,
                            itemId: [subtitle.title]
                        });
        itemTemp[index].subNav = [];
        subtitle.videos.map((video) => {
            itemTemp[index].subNav.push({
                                    title: video.title,
                                    itemId: [video.url, video.description, video.title],
                                    elemBefore: () => { return <i className="fa fa-play" aria-hidden="true"></i> }
                                    })
                            });
        setItems(itemTemp);
        });
    },[])
    return (
      <>
        <Navigation
            // you can use your own router's api to get pathnam
            activeItemId={""}
            onSelect={()=>{}}
            items={items}
          />
      </>
    );
}

export default Sidebar;
