import React from "react";

function TopPage(){
    const name = "hideaki";
    console.log(name); 

    const num = [1,3,5];
    num[1] = 10;
    console.log(num);

    return(
        <div>
            <a className="App-link2" href="">トップページ</a>
        </div>
    );
}

export default TopPage;