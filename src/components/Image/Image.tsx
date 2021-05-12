import { ParsedImage } from '../../lib/apiService';
import { useRef, useState, useEffect } from 'react';
import styles from './Image.module.css';
// import { apiService } from '../../lib/apiService/apiService';

interface ImageProps extends ParsedImage {
    width: number;
    ratio: number;
}

const imageLoadingTimeout = 5;


function Image({ width, ratio, id, title, file }: ImageProps): JSX.Element {
    const height = Math.round(width / ratio);

    const imageRef = useRef(null);

    const [ src, setSrc ] = useState('');
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setLoaded(false);
        // apiService.getImageUrl({ id, width, height })
        //     .then(imageUrl => setSrc(imageUrl))
        //     .catch(err => {
        //         console.warn('no image url', err);
        //         setSrc(file.url);
        //     });
        setSrc(file.url);
        const timeoutId = setTimeout(() => setLoaded(true), imageLoadingTimeout * 1000);
        return () => clearTimeout(timeoutId);
    }, [ id, width, height, file.url ]);

    const imageStyle: { [key: string]: any } = { opacity: 1 };

    if (!loaded) {
        imageStyle.opacity = 0;
        imageStyle.transition = 'none';
    }

    return (
        <div
            className={styles.ImageBox}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {src && (
                <img
                    className={styles.Image}
                    style={imageStyle}
                    ref={imageRef}
                    src={src}
                    alt={title}
                    onLoad={() => setLoaded(true)}
                    // onError={() => setSrc(file.url)}
                />
            )}
        </div>
    );
}

export default Image;