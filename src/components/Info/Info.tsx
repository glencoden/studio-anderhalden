import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function Info({ items }: any): JSX.Element {
    return (
        <div>
            {documentToReactComponents(items?.[0].text)}
        </div>
    );
}

export default Info;