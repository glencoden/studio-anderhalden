import styles from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import { requestService } from './lib/requestService';
import { useEffect } from 'react';


function App() {
    useEffect(() => {
        requestService.getEntries();
    }, []);
    return (
        <div className={styles.App}>
            <Navigation navElement={'Grafik'} />
        </div>
    );
}

export default App;
