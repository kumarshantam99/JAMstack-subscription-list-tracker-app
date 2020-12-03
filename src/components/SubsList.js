import React from 'react';
import Subscription from './Subscription';

export default function SubsList({ subs, refreshSubs }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Your Subscriptions</h2>
            <div className="list-group">
                <>
                {subs
                    .filter((subscription) => !subscription.archive)
                    .map((subscription) => (
                        <Subscription
                            subscription={subscription}
                            key={subscription.id}
                            refreshSubs={refreshSubs}
                        />
                    ))}</>
            </div>
            <h2 className="mt-5 mb-3">Marked</h2>
            <>
            {subs
                .filter((subscription) => subscription.archive)
                .map((subscription) => (
                    <Subscription
                        subscription={subscription}
                        key={subscription.id}
                        refreshSubs={refreshSubs}
                    />
                    
                ))}</>
                
        </div>
    );
}
