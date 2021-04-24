import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Image from '../Image/Image';


function Info({ items }: any): JSX.Element {
    if (!items || !items.length) {
        return <div />;
    }

    return (
        <div>
            {items[0].images && (
                <Image
                    width={640}
                    ratio={2}
                    {...items[0].images[0]}
                />
            )}
            {documentToReactComponents(items[0].text)}
        </div>
    );
}

export default Info;