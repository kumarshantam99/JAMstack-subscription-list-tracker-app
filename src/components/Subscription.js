import React from 'react';

export default function Subscription({ subscription, refreshSubs }) {
    
    const unmarkSub=async()=>{
        try {
            await fetch('/api/subscriptions', {
                method: 'PUT',
                body: JSON.stringify({ ...subscription, archive: false }),
            }).then(refreshSubs());
            
        } catch (err) {
            console.error(err);
        }

    }
    const markCourseArchived = async () => {
        try {
            await fetch('/api/subscriptions', {
                method: 'PUT',
                body: JSON.stringify({ ...subscription, archive: true }),
            }).then(refreshSubs());
            
        } catch (err) {
            console.error(err);
        }
    };

    const deleteSub = async () => {
        try {
            await fetch('/api/subscriptions', {
                method: 'DELETE',
                body: JSON.stringify({ id: subscription.id }),
            }).then(refreshSubs());
            
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="list-group-item">
            <a href={subscription.url}>
                <h4 className="list-group-item-heading">{subscription.name}</h4>
            </a>
            <p>
                Free-Trial:{' '}
                {subscription.trial &&
                    subscription.trial.map((tag) => (
                        <span className="badge badge-primary mr-2">{tag}</span>
                    ))}
            </p>
                    <h5 className="list-group-item-heading">Start Date: {subscription.date}</h5>
                    <h5 className="list-group-item-heading">Renew Date: {subscription.edate}</h5>
                    <h6 className="list-group-item-heading">Amount: {subscription.amount}</h6>
            {!subscription.archive && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markCourseArchived}
                >
                    Mark
                </button>
            )}
            {subscription.archive && (
                <button
                    className="btn btn-sm btn-warning"
                    onClick={unmarkSub}
                >
                   UnMark
                </button>
            )}

            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteSub}
            >
                Delete
            </button>
        </div>
    );
}
