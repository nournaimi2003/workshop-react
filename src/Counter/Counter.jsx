
import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Code à exécuter après chaque rendu
        document.title = `Vous avez cliqué ${count} fois`;

        // Facultatif : retour de fonction de nettoyage
        return () => {
        };
    }, [count]); // Dépendances

    return (
        <div>
            <p>Vous avez  {count} fois</p>
            <button onClick={() => setCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    );
};





