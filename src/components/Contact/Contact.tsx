import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Contact({ items }: any): JSX.Element {
    if (!Array.isArray(items)) {
        return <div>Info Loading...</div>;
    }
    console.log(items[0]?.fields?.titel);// TODO remove dev code
    const doc = items[0]?.fields?.text;
    const richTextComponent = documentToReactComponents(doc);
    return (
        <div>
            {items[0]?.fields?.titel && (
                <p style={{ whiteSpace: 'pre-line' }}>{items[0]?.fields?.titel}</p>
            )}
            {richTextComponent}
        </div>
    );
}

export default Contact;