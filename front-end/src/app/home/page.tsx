import React from 'react';

function Page() {
    return (
        <div>
            {/*Header start*/}
            <div className="container-fluid">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold">Chat<span className="text-theme">Echo</span></h1>
                    </div>
                </div>
            </div>
            {/*Header end  */}
        </div>
    );
}

export default Page;