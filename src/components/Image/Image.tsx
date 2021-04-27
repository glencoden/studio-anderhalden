import { ParsedImage } from '../../lib/apiService/parser';
import { useRef, useState, useEffect } from 'react';
import styles from './Image.module.css';
import { apiService } from '../../lib/apiService/apiService';

interface ImageProps extends ParsedImage {
    width: number;
    ratio: number;
}

const imageLoadingTimeout = 5;


function Image({ width, ratio, id, title, url }: ImageProps): JSX.Element {
    const height = Math.round(width / ratio);

    const imageRef = useRef(null);

    const [ src, setSrc ] = useState('');
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        apiService.getImageUrl({ id, width, height })
            .then(imageUrl => setSrc(imageUrl))
            .catch(err => {
                console.warn('no image url', err);
                setSrc(url);
            });
        const timeoutId = setTimeout(() => setLoaded(true), imageLoadingTimeout * 1000);
        return () => clearTimeout(timeoutId);
    }, [ id, width, height, url ]);

    return (
        <div
            className={styles.ImageBox}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                opacity: loaded ? 1 : 0
            }}
        >
            {src && (
                <img
                    className={styles.Image}
                    ref={imageRef}
                    src={src}
                    alt={title}
                    onLoad={() => setLoaded(true)}
                    onError={() => setSrc(url)}
                />
            )}
        </div>
    );
}

export default Image;