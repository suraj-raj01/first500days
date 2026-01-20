import { useState } from 'react';
import Upload from './FileUpload';
import Chart from './ChartView';


function Home() {
    const [result, setResult] = useState(null);

    return (
        <div>
            <h2>WhatsApp Chat Analyzer</h2>
            <Upload onResult={setResult} />


            {result && (
                <div>
                    <Chart data={result.graphData} />
                    <div id='active4day'>
                        <p>Users Active 4+ Days</p>
                        <div>{result.active4DaysUsers.map(u => <li key={u}>{u}</li>)}</div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Home;