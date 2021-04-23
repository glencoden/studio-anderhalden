import { ParsedImage } from '../../lib/parser';
import { useRef, useState, useEffect } from 'react';
import styles from './Image.module.css';
import { apiService } from '../../lib/services/apiService';

interface ImageProps extends ParsedImage {
    width: number;
    ratio: number;
}


function Image({ width, ratio, id, title, url }: ImageProps): JSX.Element {
    const height = Math.round(width / ratio);

    const imageRef = useRef(null);

    const [ src, setSrc ] = useState('');
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        apiService.getImageUrl({ id, width, height })
            .then(url => setSrc(url));
    }, [ id, width, height ]);

    return (
        <div
            className={styles.ImageBox}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                opacity: loaded ? 1 : 0
            }}
        >
            <img
                className={styles.Image}
                ref={imageRef}
                src={src}
                alt={title}
                onLoad={() => setLoaded(true)}
                onError={() => setSrc(url)}
            />
        </div>
    );
}

export default Image;