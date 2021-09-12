import InfiniteScroll from "react-infinite-scroll-component";
import Data from "../colleges.json";
import React, {useState, useEffect} from "react";

function Scrolling() {
    const [page, setPage] = useState(1);

    return (
        <InfiniteScroll dataLength={Data.colleges.length} next={() => setPage(page+1)} hasMore={true}>
            
                {Data.colleges.map(post => {
                    return (
                        <>
                            <div key={post.college_name}></div>
                            <div>{post.college_name}</div>
                            <div>{post.famous_nearest_places}</div>
                        </>
                    )
                })}
            
        </InfiniteScroll>
    );
}

export default Scrolling;