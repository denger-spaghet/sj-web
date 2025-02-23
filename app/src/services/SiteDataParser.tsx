import PlainText from '../components/PlainText.tsx';

import React from 'react';

const componentMap: Record<string, React.ComponentType<any>> = {
    plainText: PlainText,
    default: () => <div className="text-red-500">Unknown Component</div>,
};

interface SiteDataParserProps {
    data: { type: string; [key: string]: any }[];
}

const SiteDataParser: React.FC<SiteDataParserProps> = ({ data }) => {
return (
    <div className="content">
      {data.map((d, index) => {
        const Component = componentMap[d.type] || componentMap.default;
        return <Component key={index} {...d} />;
      })}
    </div>
);
};

export default SiteDataParser;