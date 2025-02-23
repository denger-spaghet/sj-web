import PlainText from '../components/PlainText.tsx';
import Default from '../components/Default.tsx';

import React from 'react';

const data = [
    {
        text : 'hello',
        component : 'plainText'
    },
    {
        text : 'world',
        component : 'plainText'
    }
]
  
const componentMap = {
plainText : PlainText,
default   : Default,
}

const SiteDataParser: React.FC = () => {
return (
    <div className="content">
    {
        data.map( d => {
        const Component = componentMap[ d.component ] 
            || componentMap.default;
            
        return <Component {...d} />;
        } )
    }
    </div>
);
};

export default SiteDataParser;