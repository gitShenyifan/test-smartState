import React, {useState, useEffect} from 'react';

const Demo = ({label, btnClick}: any) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setValue(label);
    }, [label]);

    return (
        <div className={'demo'}>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value);}}/>
            <button onClick={() => btnClick(value)}>保存</button>
        </div>
    );
};

export default Demo;