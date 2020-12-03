import React from 'react';
import Subscription from './Subscription';

export default function SubsList({ subscriptions, refreshSubs }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Your Subscriptions</h2>
            <div className="list-group">
                {subscriptions
                    .filter((subscription) => !subscription.archive)
                    .map((subscription) => (
                        <Subscription
                            subscription={subscription}
                            key={subscription.id}
                            refreshSubs={refreshSubs}
                        />
                    ))}
            </div>
            <h2 className="mt-5 mb-3">Marked</h2>
            {subscriptions
                .filter((subscription) => subscription.archive)
                .map((subscription) => (
                    <Subscription
                        subscription={subscription}
                        key={subscription.id}
                        refreshSubs={refreshSubs}
                    />
                    
                ))}
                
        </div>
    );
}
