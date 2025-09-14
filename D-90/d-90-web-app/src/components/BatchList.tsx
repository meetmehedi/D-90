import React from 'react';

const BatchList: React.FC = () => {
    const batches = [
        { id: 1, name: 'Batch A', year: 2020 },
        { id: 2, name: 'Batch B', year: 2021 },
        { id: 3, name: 'Batch C', year: 2022 },
        { id: 4, name: 'Batch D', year: 2023 },
        { id: 5, name: 'Batch D-90', year: 2023 },
    ];

    return (
        <div className="batch-list">
            <h2 className="text-2xl font-bold mb-4">Batches</h2>
            <ul className="list-disc pl-5">
                {batches.map(batch => (
                    <li key={batch.id} className="mb-2">
                        <a href={`/batches/${batch.id}`} className="text-blue-500 hover:underline">
                            {batch.name} - {batch.year}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BatchList;