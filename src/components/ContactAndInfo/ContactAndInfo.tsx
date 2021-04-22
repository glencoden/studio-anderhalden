import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function ContactAndInfo({ items }: any): JSX.Element {
    if (!Array.isArray(items)) {
        return <div>Info Loading...</div>;
    }
    const doc = items[0]?.fields?.testRichtText;
    const richTextComponent = documentToReactComponents(doc);
    return (
        <div>
            {richTextComponent}
        </div>
    );
}

export default ContactAndInfo;