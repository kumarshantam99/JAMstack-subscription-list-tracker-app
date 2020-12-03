import React, { useState } from 'react';
import Tags from './Tags';

export default function SubsForm({ subAdded }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [trials, setTrial] = useState([]);
    const [date, setDate]=useState('')
    const [edate, setEdate]=useState('')
    const [amount, setAmount]=useState('')
    const [count, setCount] = useState(0);

    const resetForm = () => {
        setName('');
        setUrl('');
        setDate('')
        setEdate('')
        setAmount('')
        setCount(count + 1);
    };

    const submitSub = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/courses', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    url,
                    trials,
                    date,
                    edate,
                    amount
                }),
            });
            resetForm();
            subAdded();
        } catch (err) {
            console.error(err);
        }
        console.log(name, url);
    };

    return (
        <div className="card">
            <div className="card-header">Add a New Subscription</div>
            <div className="card-body">
                <form className="" onSubmit={submitSub}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={url}
                            className="form-control"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Free-Trial</p>
                        <Tags tagsUpdated={setTrial} key={count} />
                    </div>
                    <div className="form-group">
                        <label className="col-2 col-form-label">Start Date</label>
                           
                                <input className="form-control" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            
                    </div>
                    <div className="form-group">
                        <label className="col-2 col-form-label">Renew Date</label>
                            
                                <input className="form-control" type="date" name="edate" value={edate} onChange={(e) => setEdate(e.target.value)} />
                            
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Amount</label>
                        <input
                            type="text"
                            name="amount"
                            value={amount}
                            className="form-control"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
